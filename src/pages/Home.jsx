import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">

      <h1 className="text-6xl font-bold mb-6">
        StudyCircle
      </h1>

      <p className="text-xl max-w-xl mb-8">
        Connect with students, create study groups,
        and collaborate effectively.
      </p>

      <div className="flex gap-4">

        <Link
          to="/groups"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Explore Groups
        </Link>

        <Link
          to="/login"
          className="border border-black px-6 py-3 rounded-lg"
        >
          Login
        </Link>

      </div>

    </div>
  );
}

export default Home;