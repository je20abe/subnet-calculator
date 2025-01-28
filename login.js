import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhbByXlK57jzRW9GwCbTdX5wi3QmyWupY",
    authDomain: "subnet-calculator-a0fe9.firebaseapp.com",
    projectId: "subnet-calculator-a0fe9",
    storageBucket: "subnet-calculator-a0fe9.appspot.com",
    messagingSenderId: "28241838449",
    appId: "1:28241838449:web:53cc3cc885f6fd713ef6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    // Forgot Password functionality
    document.getElementById('forgot-password').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("A password reset link has been sent to your email.");
            })
            .catch((error) => {
                console.error(error.code, error.message);
                alert(`Error: ${error.message}`);
            });
    });

    // Login functionality
    const submit = document.getElementById('submit');
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const passwordField = document.getElementById('password');
        const password = passwordField.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Check if the email is verified
                //if (user.emailVerified) {
                    // Email is verified, grant access
                   localStorage.setItem('welcomeMessage', `Welcome, ${user.email}!`);
                   window.location.href = "subnet.html"; // Redirect to the desired page
               // } else {
                    // Email is not verified
                   // alert("Your email is not verified. Please verify your email before logging in.");

                    // Clear the password field
                    passwordField.value = "";
                    
                })
            
            .catch((error) => {
                console.error("Error Code:", error.code); // Log the error code for debugging
            
                const messages = {
                   // "auth/user-not-found": "Account not found.",
                    //"auth/wrong-password": "Wrong password.",
                   // "auth/invalid-email": "Invalid email format.",
                   // "auth/too-many-requests": "Too many attempts. Try later.",
                    "auth/invalid-credential": "Wrong email or password.",
                };
            
                // Use the error code to fetch a message, or fallback to the generic message
                const errorMessage = messages[error.code] || "Login failed. Please try again.";
                alert(errorMessage);
            });
                                            
    });
});
