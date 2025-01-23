// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    //Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            localStorage.setItem('welcomeMessage', `Welcome, ${user.email}!`); // Store message
            window.location.href="subnet.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });


    }
)

