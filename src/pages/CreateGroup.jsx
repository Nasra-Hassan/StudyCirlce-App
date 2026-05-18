import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function CreateGroup() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "groups"), {
        title,
        description,
        createdAt: new Date(),
      });

      alert("Group created successfully!");

      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
      alert("Failed to create group");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Study Group
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Group Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <textarea
            placeholder="Group Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded"
            rows="5"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;