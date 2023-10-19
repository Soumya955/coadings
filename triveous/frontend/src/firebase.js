
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDnK7n__NDXs7wrz6sisSuKRXrOesqUP_c",
  authDomain: "tvd11-auth.firebaseapp.com",
  projectId: "tvd11-auth",
  storageBucket: "tvd11-auth.appspot.com",
  messagingSenderId: "88327920498",
  appId: "1:88327920498:web:c8938930292b9a44609beb",
  measurementId: "G-YLWTHBB9MN"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};