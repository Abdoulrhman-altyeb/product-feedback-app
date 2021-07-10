import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6xtkL2_A3aYwg3Za3xSoXkc9xE5oaekA",
  authDomain: "app-feedbacks-daaf8.firebaseapp.com",
  projectId: "app-feedbacks-daaf8",
  storageBucket: "app-feedbacks-daaf8.appspot.com",
  messagingSenderId: "954085083325",
  appId: "1:954085083325:web:be07a40cf50b3130208fd4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
