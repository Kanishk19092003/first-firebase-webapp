// import {getDatabase,ref,set} from "firebase/database"; // step 2
import {app} from "./firebase";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"; //For authorization
import Signup from "./pages/Signup";


//For realtime database
// const db = getDatabase(app); //step 3

//For authorization
const auth = getAuth(app);

function App() {

  //For realtime database
  // const putData = ()=>{
  //   set(ref(db,"users/kanishk"),{ //step 4
  //     id:1,
  //     name:"kanishk",
  //     age: 22
  //   })
  // }

  //For Authentication
  const signupUser = ()=>{
    createUserWithEmailAndPassword(
      auth,
      "kanishk123@gmail.com",
      "kanishk123"
    ).then(value => console.log(value))
  };

  return (
    <>
      <h1>Firebase Project</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      <button onClick={signupUser}>Create user</button>
      <Signup/>
    </>
  )
}

export default App
