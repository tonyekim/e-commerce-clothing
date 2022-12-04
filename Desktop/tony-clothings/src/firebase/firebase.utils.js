import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
    
  apiKey: "AIzaSyDz-1ZPCX7j5GkCwWlPqRe_brXoSQRCU-A",
  authDomain: "e-commerce-pf-b9573.firebaseapp.com",
  projectId: "e-commerce-pf-b9573",
  storageBucket: "e-commerce-pf-b9573.appspot.com",
  messagingSenderId: "833872555530",
  appId: "1:833872555530:web:c5f1e696b7936b2ace79f3",
  measurementId: "G-CHRZKGC9Y4"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
