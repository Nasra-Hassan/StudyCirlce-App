import { signInWithPopup } from "firebase/auth";

import {
  auth,
  googleProvider
} from "../firebase";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  async function handleGoogleLogin() {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded"
        >
          Sign In With Google
        </button>

        <p className="text-center mt-6">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-600 font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;