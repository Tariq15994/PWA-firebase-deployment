importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyArHBork8IdP8A-0QqdET9ukVyKhPfw9Cc",
    authDomain: "eternal-nucleus-307113.firebaseapp.com",
    projectId: "eternal-nucleus-307113",
    storageBucket: "eternal-nucleus-307113.appspot.com",
    messagingSenderId: "770926949957",
    appId: "1:770926949957:web:0ae09911a26755872a952c"
  };



  firebase.initializeApp(firebaseConfig);
  firebase.messaging();