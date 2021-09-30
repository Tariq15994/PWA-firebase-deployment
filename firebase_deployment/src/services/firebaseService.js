import firebase from 'firebase';
import {firebaseConfig} from './configure.js';



firebase.initializeApp(firebaseConfig);
// firebase.messagingSenderId();
const messaging = firebase.messaging();



export function initNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission);
        if(permission === 'granted'){
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              // Send the token to your server and update the UI if necessary
              // ...
              console.log("Token " , currentToken)
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });
        }
    })
}
