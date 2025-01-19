document.addEventListener("DOMContentLoaded", () => {
    const sessionKey = "userSession";
    const sessionTimeout = 5 * 60 * 60 * 1000; // 5 hours
  
    const sessionData = JSON.parse(localStorage.getItem(sessionKey));
  
    if (!sessionData || new Date().getTime() - sessionData.timestamp >= sessionTimeout) {
      window.location.href = "login.html"; 
      return; 
    }
  
    // Firebase Configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDP84X-vZKmKaB26tcTEziHUBOaX2tuDmw",
      authDomain: "care-saathi-eb157.firebaseapp.com",
      databaseURL: "https://care-saathi-eb157-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "care-saathi-eb157",
      storageBucket: "care-saathi-eb157.firebasestorage.app",
      messagingSenderId: "592718953578",
      appId: "1:592718953578:web:04d44c42f9995b1b109e13"
    };
  
    firebase.initializeApp(firebaseConfig);
  
    const database = firebase.database();
    const tableBody = document.querySelector("#data-table tbody");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const pageInfo = document.getElementById("page-info");
    const rowsPerPageSelect = document.getElementById("rows-per-page");
  
    let enquiries = [];
    let currentPage = 1;
    let rowsPerPage = parseInt(rowsPerPageSelect.value) || 5;
  
    // Fetch enquiries from Firebase
    database.ref("enquiries").on("value", (snapshot) => {
      enquiries = [];
      snapshot.forEach((childSnapshot) => {
        enquiries.push(childSnapshot.val());
      });
      displayTable();
    });
  
    // Display table with paginated data
    function displayTable() {
      tableBody.innerHTML = "";
      const start = (currentPage - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      const paginatedData = enquiries.slice(start, end);
  
      paginatedData.forEach((data) => {
        const row = `
          <tr>
            <td>${data.name}</td>
            <td>${data.mobile}</td>
            <td>${data.email ?? '--'}</td>
            <td>${data.service ?? '--'}</td>
            <td>${data.datetime ?? '--'}</td>
            <td>${data.location ?? '--'}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
  
      updatePaginationControls();
    }
  
    // Update pagination controls based on current page and data length
    function updatePaginationControls() {
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage * rowsPerPage >= enquiries.length;
      pageInfo.textContent = `Page ${currentPage}`;
    }
  
    // Event listener for "Previous" button
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayTable();
      }
    });
  
    // Event listener for "Next" button
    nextButton.addEventListener("click", () => {
      if (currentPage * rowsPerPage < enquiries.length) {
        currentPage++;
        displayTable();
      }
    });
  
    // Event listener for changing rows per page
    rowsPerPageSelect.addEventListener("change", (e) => {
      rowsPerPage = parseInt(e.target.value);
      currentPage = 1; // Reset to the first page when rows per page changes
      displayTable();
    });
  });
  