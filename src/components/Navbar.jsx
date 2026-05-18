import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user } = useAuth();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">

      <Link to="/" className="text-2xl font-bold">
        StudyCircle
      </Link>

      <div className="flex gap-4 items-center">

        

        {user && (
          <>  
           <Link to="/groups">Groups</Link>
           
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/create-group">Create Group</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;