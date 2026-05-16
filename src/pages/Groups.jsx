import { useEffect, useState } from "react";

import {
  collection,
  getDocs
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function Groups() {

  const [groups, setGroups] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    async function fetchGroups() {

      try {

        const querySnapshot = await getDocs(
          collection(db, "groups")
        );

        const groupsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGroups(groupsData);

      } catch (error) {
        console.log(error);
      }
    }

    fetchGroups();

  }, []);

  const filteredGroups = groups.filter((group) =>
    group.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Study Groups
      </h1>

      <input
        type="text"
        placeholder="Search groups..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded w-full mb-6"
      />

      {filteredGroups.length === 0 ? (

        <p>No groups found.</p>

      ) : (

        <div className="grid md:grid-cols-2 gap-4">

          {filteredGroups.map((group) => (

            <div
              key={group.id}
              className="border p-4 rounded-lg shadow"
            >

              <h2 className="text-2xl font-bold">
                {group.title}
              </h2>

              <p className="mt-2">
                {group.description}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Groups;