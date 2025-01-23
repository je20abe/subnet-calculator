// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
            alert("Creating Account"); // Notify user of successful account creation
            window.location.href = "index.html"; // Redirect to the home page
        })
        .catch((error) => {
            // Handle errors during account creation
            const errorCode = error.code; // Retrieve error code
            const errorMessage = error.message; // Retrieve error message
            alert(errorMessage); // Display error message to the user
        });
});
