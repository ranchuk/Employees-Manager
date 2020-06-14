import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  // put your firebase credentials here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
