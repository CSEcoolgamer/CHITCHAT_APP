import firebase from "firebase/app";
import "firebase/auth";

 export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAMW_ZOEMJcolnfnSnEFhRB5S6llfUVZF4",
    authDomain: "chitchat-a3bb8.firebaseapp.com",
    projectId: "chitchat-a3bb8",
    storageBucket: "chitchat-a3bb8.appspot.com",
    messagingSenderId: "1046877512265",
    appId: "1:1046877512265:web:6dfe856961292896519598"
  }).auth();
