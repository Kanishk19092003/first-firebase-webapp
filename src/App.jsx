import {getDatabase,ref,set} from "firebase/database"; // step 2
import {app} from "./firebase";

const db = getDatabase(app); //step 3

function App() {

  const putData = ()=>{
    set(ref(db,"users/kanishk"),{ //step 4
      id:1,
      name:"kanishk",
      age: 22
    })
  }

  return (
    <>
      <h1>Firebase Project</h1>
      <button onClick={putData}>Put Data</button>
    </>
  )
}

export default App
