import { Children, createContext, useContext } from "react";
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { getDatabase,set,ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAeHZAiDDxm00tkHjIW6P783_VV3c8uatQ",
  authDomain: "app-4ee66.firebaseapp.com",
  projectId: "app-4ee66",
  storageBucket: "app-4ee66.firebasestorage.app",
  messagingSenderId: "685075580224",
  appId: "1:685075580224:web:339d9448d1b6ac3259e6a5",
  databaseURL:"https://app-4ee66-default-rtdb.firebaseio.com/"
}

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);//for authetication
const database = getDatabase(firebaseApp)//for database

const FirebaseContext = createContext(null);

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useFirebase = ()=> useContext(FirebaseContext);

export const FirebaseProvider = (props)=>{
    
    //sign up
    const signupUserWithEmailAndPassword = (email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    //entering data to ?
    const putData = (key,data) =>set(ref(database,key), data);
    
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}