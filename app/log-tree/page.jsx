"use client";
import { useState } from "react";

export default function LogTree() {
  const [treeData, setTreeData] = useState({
    species: "",
    location: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTreeData({ ...treeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`🌱 Tree logged: ${treeData.species} at ${treeData.location}`);
    setTreeData({ species: "", location: "", date: "" });
  };

  return (
    <main style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h1>🌿 Log a Tree</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="species"
          placeholder="Tree species"
          value={treeData.species}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={treeData.location}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={treeData.date}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>
          Log Tree
        </button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
