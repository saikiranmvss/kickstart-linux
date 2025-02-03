import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO2wrCT33ukHW_hhfoSOMAdsS2QcZA0NI",
  authDomain: "kickstarter-ee8e9.firebaseapp.com",
  projectId: "kickstarter-ee8e9",
  storageBucket: "kickstarter-ee8e9.firebasestorage.app",
  messagingSenderId: "853403634322",
  appId: "1:853403634322:web:03f163ca05babcfca7b44b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { auth, signInWithGoogle };
