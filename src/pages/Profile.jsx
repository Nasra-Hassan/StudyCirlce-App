import { useAuth } from "../context/AuthContext";

function Profile() {

  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      {user && (
        <div className="mt-4">

          <img
            src={user.photoURL}
            alt="profile"
            className="w-24 rounded-full"
          />

          <h2 className="text-xl mt-4">
            {user.displayName}
          </h2>

          <p>{user.email}</p>

        </div>
      )}

    </div>
  );
}

export default Profile;