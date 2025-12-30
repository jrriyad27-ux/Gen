import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYIFJRxypqx5_teLusTrem-K4TvYx8BBg",
  authDomain: "social-media-38920.firebaseapp.com",
  projectId: "social-media-38920",
  appId: "1:1078357611512:web:e704b70e1f94e0a7d7fc0d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// গুগল লগইন
document.getElementById('google-signin-btn').onclick = () => {
    signInWithPopup(auth, provider).catch(err => alert(err.message));
};

// ম্যাজিক মেনু অ্যানিমেশন লজিক
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));

// Auth State হ্যান্ডলিং
onAuthStateChanged(auth, (user) => {
    const authWrapper = document.getElementById('auth-wrapper');
    const appContent = document.getElementById('app-content');
    if (user) {
        authWrapper.style.display = 'none';
        appContent.style.display = 'block';
    } else {
        authWrapper.style.display = 'flex';
        appContent.style.display = 'none';
    }
});

document.getElementById('logout-btn').onclick = () => signOut(auth);
