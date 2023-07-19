import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCH49R0HWbAhtXr3Y-u-pTvQuLk7tY3ksk",
  authDomain: "sky-store-db.firebaseapp.com",
  projectId: "sky-store-db",
  storageBucket: "sky-store-db.appspot.com",
  messagingSenderId: "969295535023",
  appId: "1:969295535023:web:469717d6aab2438d056d5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:"select_account"
})

const db = getFirestore()

export const createUserDocFromAuth = async (auth) => {
  const userDocRef = doc(db,"users",auth.uid) 
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const {displayName,email} = auth
    const created = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        created
      })
    } catch (e) {
      console.log(e);
    }

    return userDocRef
  } 

}

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
