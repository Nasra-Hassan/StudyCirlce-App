import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Groups() {
  const [groups, setGroups] = useState([]);
  const { user } = useAuth();

  // 🔵 FETCH GROUPS
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const snapshot = await getDocs(collection(db, "groups"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGroups(data);
      } catch (error) {
        console.log("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

  // 🟡 JOIN GROUP (basic)
  const handleJoin = (groupId) => {
    if (!user) {
      alert("Please login to join groups");
      return;
    }

    alert("You joined the group!");
  };

  // ⭐ FAVORITE TOGGLE
  const handleFavorite = async (group) => {
    if (!user) {
      alert("Please login to favorite groups");
      return;
    }

    try {
      const groupRef = doc(db, "groups", group.id);

      const isFavorited = group.favorites?.includes(user.email);

      await updateDoc(groupRef, {
        favorites: isFavorited
          ? arrayRemove(user.email)
          : arrayUnion(user.email),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 🗑 DELETE GROUP
  const handleDelete = async (groupId, creatorEmail) => {
    if (!user) {
      alert("Please login");
      return;
    }

    if (user.email !== creatorEmail) {
      alert("You can only delete your own group");
      return;
    }

    try {
      await deleteDoc(doc(db, "groups", groupId));

      setGroups((prev) =>
        prev.filter((group) => group.id !== groupId)
      );

      alert("Group deleted!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Study Groups
      </h1>

      {!user && (
        <p className="text-center text-red-500 mb-4">
          Please log in to interact with groups
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="relative bg-white border rounded-lg shadow-md p-6"
          >
            {/* ⭐ FAVORITE STAR (TOP RIGHT) */}
            <button
              onClick={() => handleFavorite(group)}
              className="absolute top-3 right-3 text-2xl"
            >
              {group.favorites?.includes(user?.email)
                ? "⭐"
                : "☆"}
            </button>

            {/* GROUP CONTENT */}
            <h2 className="text-2xl font-semibold mb-2">
              {group.title}
            </h2>

            <p className="text-gray-700 mb-4">
              {group.description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={() => handleJoin(group.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Join
              </button>

              {user?.email === group.createdBy && (
                <button
                  onClick={() =>
                    handleDelete(group.id, group.createdBy)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;