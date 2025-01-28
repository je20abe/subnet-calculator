// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhbByXlK57jzRW9GwCbTdX5wi3QmyWupY",
    authDomain: "subnet-calculator-a0fe9.firebaseapp.com",
    projectId: "subnet-calculator-a0fe9",
    storageBucket: "subnet-calculator-a0fe9.firebasestorage.app",
    messagingSenderId: "28241838449",
    appId: "1:28241838449:web:53cc3cc885f6fd713ef6d0"
};

// Initialize Firebase application and authentication service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get reference to the submit button
const submit = document.getElementById('submit');

// Add event listener for the submit button
submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve user input values for email and password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new user with the provided email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Account creation successful
            const user = userCredential.user; // Access the created user object
            window.location.href = "index.html";

            // Send a verification email
           // sendEmailVerification(user)
               // .then(() => {
                    // Email verification sent successfully
               //     alert("Verification email sent. Please check your inbox.");
                    // Redirect to the login page or home page after successful email sending
                  // window.location.href = "index.html";
               // })
               // .catch((error) => {
                    // Handle errors during email verification
               //     console.error("Email verification error:", error.message);
                //    alert("Failed to send verification email: " + error.message);
                //});
        })
        .catch((error) => {
            // Handle errors during account creation
            const errorCode = error.code; // Retrieve error code
            const errorMessage = error.message; // Retrieve error message
            console.error("Account creation error:", errorCode, errorMessage);
            alert("Account creation failed: " + errorMessage); // Display error message to the user
        });
});
