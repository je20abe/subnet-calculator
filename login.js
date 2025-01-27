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
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Check if the email is verified
                if (user.emailVerified) {
                    // Email is verified, grant access
                    localStorage.setItem('welcomeMessage', `Welcome, ${user.email}!`);
                    window.location.href = "subnet.html"; // Redirect to the desired page
                } else {
                    // Email is not verified, log the user out
                    alert("Your email is not verified. Please verify your email before logging in.");
                    signOut(auth)
                        .then(() => {
                            console.log("User signed out due to unverified email.");
                        })
                        .catch((error) => {
                            console.error("Error signing out:", error.message);
                        });
                }
            })
            .catch((error) => {
                // Handle login errors
                console.error(error.code, error.message);
                alert(`Login failed: ${error.message}`);
            });
    });
});
