import { initializeApp } from "firebase/app";
import {getFirestore} from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHMSCIpchCA6Be5bQG-GgtxzWFS_JOPVE",
  authDomain: "userdanta-3fa9b.firebaseapp.com",
  projectId: "userdanta-3fa9b",
  storageBucket: "userdanta-3fa9b.appspot.com",
  messagingSenderId: "924588194998",
  appId: "1:924588194998:web:7c9b63f1dcc36d876c7a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)