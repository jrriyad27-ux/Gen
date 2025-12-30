import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAYIFJRxypqx5_teLusTrem-K4TvYx8BBg",
  authDomain: "social-media-38920.firebaseapp.com",
  databaseURL: "https://social-media-38920-default-rtdb.firebaseio.com",
  projectId: "social-media-38920",
  storageBucket: "social-media-38920.firebasestorage.app",
  messagingSenderId: "1078357611512",
  appId: "1:1078357611512:web:e704b70e1f94e0a7d7fc0d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In Logic
document.getElementById('google-signin-btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => console.log("User:", result.user.displayName))
        .catch((error) => alert("Login Failed: " + error.message));
});

// Auth State Change (Auto Login/Logout UI)
onAuthStateChanged(auth, (user) => {
    const authWrapper = document.getElementById('auth-wrapper');
    const appContent = document.getElementById('app-content');

    if (user) {
        authWrapper.style.display = 'none';
        appContent.style.display = 'block';
        document.body.style.background = "#1a1b1e";
    } else {
        authWrapper.style.display = 'flex';
        appContent.style.display = 'none';
        document.body.style.background = "#f0f2f5";
    }
});

// Logout
document.getElementById('logout-btn').onclick = () => signOut(auth);

// Nav Animation
const list = document.querySelectorAll('.list');
list.forEach((item) => item.addEventListener('click', function() {
    list.forEach((li) => li.classList.remove('active'));
    this.classList.add('active');
}));
