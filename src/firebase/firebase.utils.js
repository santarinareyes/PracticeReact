import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCK8CJdklp1DjwVd2ZWW0k8he9dq_udsvg",
  authDomain: "medieinstitutet-auth.firebaseapp.com",
  projectId: "medieinstitutet-auth",
  storageBucket: "medieinstitutet-auth.appspot.com",
  messagingSenderId: "594946870353",
  appId: "1:594946870353:web:8cc7b219eac6189da5bc70",
};

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (err) {
      console.log("User creation error", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
