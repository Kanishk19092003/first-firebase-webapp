import { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignIn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signinUser = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>console.log("Signin successful"))
        .catch((err)=> console.log(err));
    }

    return (
    <div>
        <h1>Sign In</h1>
        
        <label>email</label>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your Email"/>
        
        <label>password</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password"/>
        
        <button onClick={signinUser}>SignUp</button>
    </div>
  )
}

export default SignIn;