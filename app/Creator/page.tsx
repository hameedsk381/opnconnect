import { CreatorApplication } from "@/app/types/creator";
import { useState } from "react";


export default function ApplyCreator() {
  const [formData, setFormData] = useState<CreatorApplication>({
    name: "",
    email: "",
    bio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/creators", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Application submitted!");
    } else {
      alert("Error submitting application.");
    }
  };

  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Apply to be a Content Creator</h1>
      <label className="block mt-4">
        Name:
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </label>
      <label className="block mt-4">
        Email:
        <input
          type="email"
          className="border rounded p-2 w-full"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </label>
      <label className="block mt-4">
        Bio:
        <textarea
          className="border rounded p-2 w-full"
          value={formData.bio}
          onChange={(e) =>
            setFormData({ ...formData, bio: e.target.value })
          }
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Submit Application
      </button>
    </form>
  );
}
