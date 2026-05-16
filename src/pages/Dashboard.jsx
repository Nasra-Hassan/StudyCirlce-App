import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4">
        Welcome, {user?.displayName}
      </p>

      <img
        src={user?.photoURL}
        alt="profile"
        className="w-20 rounded-full mt-4"
      />

    </div>
  );
}

export default Dashboard;