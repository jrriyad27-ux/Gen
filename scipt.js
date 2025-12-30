import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
 লজিক
do.ument.getElementById('signup-.orm').addEventListener('s, mit => e
    {.    e.preventDef;
    ;
    const = ail = do.ument.getElementById('signup-e.ail');
    ;
    cons = ass = do.ument.getElementById('signup-.ass');
    
     
    createUserWithEmailAndPasswor, auth,, mail,
        .     .t => () => alert("Account Creat
        .     .catch => or => alert.error.mes;
ge;


});

// ৬. লগই
 লজিক
do.ument.getElementById('login-.orm').addEventListener('s, mit => e
    {.    e.preventDef;
    ;
    const = ail = do.ument.getElementById('login-e.ail');
    ;
    cons = ass = do.ument.getElementById('login-.ass');
    
     
    signInWithEmailAndPasswor, auth,, mail,
        .     .catch => or => alert("Login Er + : " +.error.mes;
ge;


});

// ৭. লগআউ
 লজিক
do.ument.getElementById('logout.btn').addEventListener(', ic => (
    {
    signOut;
ut;


});

// ৮. Auth State (লগইন থাকলে অ্যাপ দেখাবে, না থাকলে লগই
 পেজ)
onAuthStateChange, auth,  => r
    {
    if  u
              authW.apper.style.d = lay = ;
              appC.ntent.style.d = lay = ';
              c.nsole.log("Logged i, as:". user.;
    ;       
              authW.apper.style.d = lay = ;
              appC.ntent.style.d = lay = ;
    ;
  ;


});

// ৯. নেভিগেশন মেনু এনিমেশন (আপনার সেই ম্যাজিক
মেনু) cons = ist = do.ument.querySelectorAll('.;
st');
fu ction active i
    {
  . list.forEach( => m) =. item.cla.sList.remove('act;
    ;
  . this.cla.sList.add('ac;
v
');
.
list.forEach( => m) =. item.addEventListener(', ick', active;
