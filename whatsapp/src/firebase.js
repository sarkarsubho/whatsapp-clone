// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore,collection,getDocs} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyB4cNTDCZoopU7Syz9iEyuvkUeKDUz15lM",
  authDomain: "whatsapp579-cf3e0.firebaseapp.com",
  projectId: "whatsapp579-cf3e0",
  storageBucket: "whatsapp579-cf3e0.appspot.com",
  messagingSenderId: "471634997995",
  appId: "1:471634997995:web:c593279203580f3c3e44ae",
  measurementId: "G-FCEY624S1M"
};


// Initialize Firebase
const firebaseApp =initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth =getAuth(firebaseApp);
const db=getFirestore(firebaseApp);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'rooms');
  const citySnapshot = await getDocs(citiesCol);
  const cityList =  citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

let data= getCities(db);
export{auth ,data};
export default db;