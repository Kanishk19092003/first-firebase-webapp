// app using usecontext 

import { useState } from "react";
import { useFirebase } from "./Context/Firebase";
import Signup from "./pages/Signup";

function App() {

  const firebase = useFirebase();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return( 
  <>
    <h1>Firebase</h1>
    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email"/>
    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password"/>
    <button onClick={()=>{firebase.signupUserWithEmailAndPassword(email,password)}}>Submit</button>

    <Signup/>
  </>);
}

export default App;


//app using only firebass without contex

// // import {getDatabase,ref,set} from "firebase/database"; // step 2
// import {app} from "./firebase";
// import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"; //For authorization
// import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn";


// //For realtime database
// // const db = getDatabase(app); //step 3

// //For authorization
// const auth = getAuth(app);

// function App() {

//   //For realtime database
//   // const putData = ()=>{
//   //   set(ref(db,"users/kanishk"),{ //step 4
//   //     id:1,
//   //     name:"kanishk",
//   //     age: 22
//   //   })
//   // }

//   //For Authentication
//   const signupUser = ()=>{
//     createUserWithEmailAndPassword(
//       auth,
//       "kanishk123@gmail.com",
//       "kanishk123"
//     ).then(value => console.log(value))
//   };

//   return (
//     <>
//       <h1>Firebase Project</h1>
//       {/* <button onClick={putData}>Put Data</button> */}
//       <button onClick={signupUser}>Create user</button>
//       {/* <Signup/> */}
//       <SignIn/>
      
//     </>
//   )
// }

// export default App

