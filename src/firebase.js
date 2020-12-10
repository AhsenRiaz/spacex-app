import firebase from "firebase"

 var config = {
    apiKey: "AIzaSyC8PG020LoQMzgWNEl-tXMVYK4tWy0kn-o",
    authDomain: "spacexapp-byahsen.firebaseapp.com",
    projectId: "spacexapp-byahsen",
    storageBucket: "spacexapp-byahsen.appspot.com",
    messagingSenderId: "792813130067",
    appId: "1:792813130067:web:dba313ac9f037fb6d511a6"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase