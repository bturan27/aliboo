import {initializeApp} from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}
from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcQOUytgkBSCnmJXGKCXbh37-gEkBfEto",
    authDomain: "aliboo-db.firebaseapp.com",
    projectId: "aliboo-db",
    storageBucket: "aliboo-db.appspot.com",
    messagingSenderId: "1021660285139",
    appId: "1:1021660285139:web:da0fd7ca1af022cdd42c26"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth, googleProvider);

  export const db= getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={fullName:'begum'}
    ) => {
    if(!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid);

    console.log(userDocRef);


  const userSnapshot = await getDoc(userDocRef);


  if(!userSnapshot.exists()) {
    const { fullName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        fullName,
        email,
        createdAt,
        ...additionalInformation
      });
      console.log(userDocRef)
    } catch (error) {
      console.log('error creating  the user', error.message);
    }
  }

  return userDocRef;
};

//asagida yetkili email ve password ile  verilmis bi user yarattik
export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword (auth, email, password)
}