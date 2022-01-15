import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBlu2CVBa9y2sQy4zqEMh39HyRhPiVuup8",
  authDomain: "crwn-db-03.firebaseapp.com",
  projectId: "crwn-db-03",
  storageBucket: "crwn-db-03.appspot.com",
  messagingSenderId: "820481333865",
  appId: "1:820481333865:web:c915fabf95a61d7c8f20f8"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();
  if(!snapshot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      })
    } catch (error) {
      console.log("error creating user ",error.message)
    }
  }
  
  return userRef;
}

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 