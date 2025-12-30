import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ১. আপনার দেওয়া Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAYIFJRxypqx5_teLusTrem-K4TvYx8BBg",
  authDomain: "social-media-38920.firebaseapp.com",
  databaseURL: "https://social-media-38920-default-rtdb.firebaseio.com",
  projectId: "social-media-38920",
  storageBucket: "social-media-38920.firebasestorage.app",
  messagingSenderId: "1078357611512",
  appId: "1:1078357611512:web:e704b70e1f94e0a7d7fc0d",
  measurementId: "G-QMFZJZ8PP5"
};

// ২. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ৩. UI Elements সিলেক্ট করা
const container = document.getElementById('container');
const authWrapper = document.getElementById('auth-wrapper');
const appContent = document.getElementById('app-content');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// ৪. স্লাইড এনিমেশন (লগইন থেকে সাইন-আপে যাওয়ার জন্য)
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// ৫. সাইন আপ (Create Account) লজিক
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const pass = document.getElementById('signup-pass').value;
    
    createUserWithEmailAndPassword(auth, email, pass)
        .then(() => alert("Account Created!"))
        .catch(error => alert(error.message));
});

// ৬. লগইন লজিক
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    
    signInWithEmailAndPassword(auth, email, pass)
        .catch(error => alert("Login Error: " + error.message));
});

// ৭. লগআউট লজিক
document.getElementById('logout-btn').addEventListener('click', () => {
    signOut(auth);
});

// ৮. Auth State (লগইন থাকলে অ্যাপ দেখাবে, না থাকলে লগইন পেজ)
onAuthStateChanged(auth, (user) => {
    if (user) {
        authWrapper.style.display = 'none';
        appContent.style.display = 'block';
        console.log("Logged in as:", user.email);
    } else {
        authWrapper.style.display = 'flex';
        appContent.style.display = 'none';
    }
});

// ৯. নেভিগেশন মেনু এনিমেশন (আপনার সেই ম্যাজিক মেনু)
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));
