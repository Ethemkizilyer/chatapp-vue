import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZTOyX8-oFwPBWwH72raVfD2y3K6XfQLE",
  authDomain: "vue3-293e6.firebaseapp.com",
  projectId: "vue3-293e6",
  storageBucket: "vue3-293e6.appspot.com",
  messagingSenderId: "261076791900",
  appId: "1:261076791900:web:10dd156e3aadee06912c99",
};

firebase.initializeApp(firebaseConfig)

const projectFirestore=firebase.firestore()
const timestamp= firebase.firestore.FieldValue.serverTimestamp

export{projectFirestore,timestamp}