import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyBCnNQWX_kKckwncvS9rnfi5YHsDbCWhtoU",

    authDomain: "jundalhuda.firebaseapp.com",

    projectId: "jundalhuda",

    storageBucket: "jundalhuda.firebasestorage.app",

    messagingSenderId: "275883570506",

    appId: "1:275883570506:web:fb5e72953a3d5a66ef3db3",

    measurementId: "G-ZZNZKN73BQ"

};


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);


const auth = getAuth(app);


const db = getFirestore(app);


export {
    app,
    analytics,
    auth,
    db
};
