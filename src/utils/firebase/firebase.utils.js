import {initializeApp} from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch
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

  export const addColletionAndDocuments = (collectionKey, objectsToAdd) => {
    
  }

  export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation={}
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
// we want to create another interface layer through a helper function

export const signInAuthUserWithEmailAndPassword= async (email,password) => {
  if (!email || !password) return;
//if we do have either email or password, we dont want to run our function
  return await signInWithEmailAndPassword (auth, email, password)
}

export const signOutUser= async() => await signOut(auth);

//asagida creating a listener below
// next:callback,error:errorcallback, complete:completedcallback
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}

