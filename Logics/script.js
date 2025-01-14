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
        apiKey: "AIzaSyBlLTh5ReW7BqXOCcpcs-_IYVwvCwfDbtI",
        authDomain: "landing-demo-28d4c.firebaseapp.com",
        databaseURL: "https://landing-demo-28d4c-default-rtdb.firebaseio.com",
        projectId: "landing-demo-28d4c",
        storageBucket: "landing-demo-28d4c.appspot.com",
        messagingSenderId: "578703396014",
        appId: "1:578703396014:web:8dde8338e536f3ed85313f",
        measurementId: "G-N1RC29SZ50",
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
        apiKey: "AIzaSyBlLTh5ReW7BqXOCcpcs-_IYVwvCwfDbtI",
        authDomain: "landing-demo-28d4c.firebaseapp.com",
        databaseURL: "https://landing-demo-28d4c-default-rtdb.firebaseio.com",
        projectId: "landing-demo-28d4c",
        storageBucket: "landing-demo-28d4c.appspot.com",
        messagingSenderId: "578703396014",
        appId: "1:578703396014:web:8dde8338e536f3ed85313f",
        measurementId: "G-N1RC29SZ50",
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
  