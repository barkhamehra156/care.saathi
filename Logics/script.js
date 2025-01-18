document.addEventListener("DOMContentLoaded", () => {

    const enquiryForm = document.getElementById("enquiry-form");
  
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("input[name='name']").value;
      const mobile = document.querySelector("input[name='phone']").value;
      const email = document.querySelector("input[name='email']").value;
      const service = document.querySelector("select[name='services']").value;
      const location = document.querySelector("input[name='add']").value;
  
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
  
      const newEnquiryRef = database.ref("enquiries").push();
      newEnquiryRef
        .set({
          name: name,
          mobile: mobile,
          email: email,
          service: service,
          location: location,
        })
        .then(() => {
          alert("Your enquiry has been submitted successfully!");
          enquiryForm.reset(); 
        })
        .catch((error) => {
          console.error("Error saving data:", error);
          alert("Failed to submit your enquiry. Please try again.");
        });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  
    const PopupEnquire = document.getElementById("popup-enquiry-form");
  
    PopupEnquire.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("input[name='Name']").value;
      const mobile = document.querySelector("input[name='Mobile']").value;
      const email = document.querySelector("input[name='Email']").value;
      const service = document.querySelector("select[name='Services']").value;
      const location = document.querySelector("input[name='Address']").value;
  
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
  
      const newEnquiryRef = database.ref("enquiries").push();
      newEnquiryRef
        .set({
          name: name,
          mobile: mobile,
          email: email,
          service: service,
          location: location,
        })
        .then(() => {
          alert("Your enquiry has been submitted successfully!");
          PopupEnquire.reset(); 
        })
        .catch((error) => {
          console.error("Error saving data:", error);
          alert("Failed to submit your enquiry. Please try again.");
        });
    });
  });
  