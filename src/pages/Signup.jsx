import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";

const auth = getAuth(app);

const Signup = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then(()=> alert("sucess"));
    }

  return (
    <div>
        <label>email</label>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your Email"/>
         <label>password</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password"/>
        <button onClick={createUser}>SignUp</button>
    </div>
  )
}

export default Signup;