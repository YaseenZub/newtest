import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { useState , useEffect} from 'react';



const firebaseConfig = {
    apiKey: "AIzaSyCMJdiTtXSRcLwiyY4aNAklH2PR9hegivI",
    authDomain: "blood-donor-finder-87abc.firebaseapp.com",
    projectId: "blood-donor-finder-87abc",
    storageBucket: "blood-donor-finder-87abc.appspot.com",
    messagingSenderId: "506695094044",
    appId: "1:506695094044:web:d02c420ca0a9e36f58b4d9",
    measurementId: "G-PYJR6MBQV0"
  };
  
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);


export function logout(){
  return signOut(auth)
}
export function authlogin(email, password) {
  return  signInWithEmailAndPassword(auth, email, password);
 
}


export function authsignup(email, password) {
  return  createUserWithEmailAndPassword(auth, email, password);
 
}

export function useAuth() {
    const [currentUser, setCurrentUser]= useState();
    useEffect(()=>{
      const unsub= onAuthStateChanged(auth,user=>{setCurrentUser(user)})
    return unsub;
    },[])
    window.user=currentUser?.email;
    return currentUser;
};

export { app, auth, db};