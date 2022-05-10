import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3_5drgIas4kvY6JmLypD7HA6uD1qqRN4",
  authDomain: "pepper-48dd5.firebaseapp.com",
  projectId: "pepper-48dd5",
  storageBucket: "pepper-48dd5.appspot.com",
  messagingSenderId: "923912847939",
  appId: "1:923912847939:web:b8b0ae9e0feb71e65d0af6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}