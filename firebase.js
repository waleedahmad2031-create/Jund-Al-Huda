// =========================
// Firebase
// جنود الهدى
// =========================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// =========================
// إعداد Firebase
// =========================

const firebaseConfig = {

    apiKey:
    "AIzaSyBCnQWX_kKckwncvS9rnfi5YHsDbCWhtoU",

    authDomain:
    "jundalhuda.firebaseapp.com",

    projectId:
    "jundalhuda",

    storageBucket:
    "jundalhuda.firebasestorage.app",

    messagingSenderId:
    "275883570506",

    appId:
    "1:275883570506:web:fb5e72953a3d5a66ef3db3",

    measurementId:
    "G-ZZNZKN73BQ"

};


// =========================
// تشغيل Firebase
// =========================

const app =
    initializeApp(
        firebaseConfig
    );


// =========================
// Authentication
// =========================

const auth =
    getAuth(
        app
    );


// =========================
// Firestore
// =========================

const db =
    getFirestore(
        app
    );


// =========================
// التصدير
// =========================

export {
    app,
    auth,
    db
};


console.log(
    "✅ Firebase جنود الهدى يعمل."
);
