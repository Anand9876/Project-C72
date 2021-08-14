import firebase from 'firebase';
require("@firebase/firestore");
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDz1gyz8WuStEKexkfi-RAnydJ2smTff40",
  authDomain: "job-protal-24e73.firebaseapp.com",
  projectId: "job-protal-24e73",
  storageBucket: "job-protal-24e73.appspot.com",
  messagingSenderId: "786454394023",
  appId: "1:786454394023:web:fbbb59f5c3e0f0078a5782"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore()

