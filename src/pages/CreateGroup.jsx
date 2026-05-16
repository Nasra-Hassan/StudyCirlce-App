import { useState } from "react";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function CreateGroup() {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      await addDoc(collection(db, "groups"), {
        title,
        description,
        createdAt: new Date()
      });

      alert("Group created");

      setTitle("");
      setDescription("");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Create Study Group
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Group title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded"
        >
          Create Group
        </button>

      </form>

    </div>
  );
}

export default CreateGroup;