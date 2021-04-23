import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
        apiKey: "AIzaSyDLkP1Zk0f5Y-A9Vti1qULtEhrY3LzuCck",
        authDomain: "portfolio-aaf68.firebaseapp.com",
        projectId: "portfolio-aaf68",
        storageBucket: "portfolio-aaf68.appspot.com",
        messagingSenderId: "360032927649",
        appId: "1:360032927649:web:04525dfc185efcd664d5e0",
        measurementId: "G-1ZBKY4KSXQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;