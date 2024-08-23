
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBG0xAoywUhNmOO2w7QxOnh-iu7Bkfj5m4",

  authDomain: "myfirst-todolist.firebaseapp.com",

  projectId: "myfirst-todolist",

  storageBucket: "myfirst-todolist.appspot.com",

  messagingSenderId: "330796775416",

  appId: "1:330796775416:web:38868a8a353da0e8ee080d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};