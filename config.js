import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA2p0BzvhdKRG9MwaxNPetoAJVV7A_Hzy0",
  authDomain: "bibliotecaeletronica-c7edd.firebaseapp.com",
  projectId: "bibliotecaeletronica-c7edd",
  storageBucket: "bibliotecaeletronica-c7edd.appspot.com",
  messagingSenderId: "849524788872",
  appId: "1:849524788872:web:7bbdc92aaa7a37e5d2193d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
