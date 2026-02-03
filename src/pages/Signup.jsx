import { useState } from "react";
import { useFirebase } from "../Context/Firebase";

const Signup = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      const result = await firebase.signupUserWithEmailAndPassword(email, password);

      await firebase.putData(`users/${result.user.uid}`, {
        email: result.user.email,
        uid: result.user.uid,
      });

      alert("Signup Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = () => {
   firebase.signupWithGoogle();

  };

  return (
    <div>
      <h1>SignUp Page</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

      <button onClick={createUser}>Sign Up</button>
      <br />
      <button onClick={handleGoogleSignup}>Sign up With Google</button>
    </div>
  );
};

export default Signup;
