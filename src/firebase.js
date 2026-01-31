
//step 1
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeHZAiDDxm00tkHjIW6P783_VV3c8uatQ",
  authDomain: "app-4ee66.firebaseapp.com",
  projectId: "app-4ee66",
  storageBucket: "app-4ee66.firebasestorage.app",
  messagingSenderId: "685075580224",
  appId: "1:685075580224:web:339d9448d1b6ac3259e6a5",
  databaseURL:"https://app-4ee66-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);