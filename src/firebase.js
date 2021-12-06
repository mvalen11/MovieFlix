import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiuib2EtrboCLhpUVVZh13BMUAbpP07e4",
    authDomain: "movieflix-63f29.firebaseapp.com",
    projectId: "movieflix-63f29",
    storageBucket: "movieflix-63f29.appspot.com",
    messagingSenderId: "129349189210",
    appId: "1:129349189210:web:d24594edf1ae3cc057e263",
    measurementId: "G-HTMM4JMWF5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
  