import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

function Login() {

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);

      alert("Login successful");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <button
        onClick={handleGoogleLogin}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Sign in with Google
      </button>

    </div>
  );
}

export default Login;