import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🌿 Welcome to Greenland Tracker</h1>
      <p>Track and celebrate community tree planting efforts — SDG 15: Life on Land.</p>
      
      <Link 
        href="/log-tree" 
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          background: "green",
          color: "white",
          padding: "0.75rem 1.25rem",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Log a Tree 🌱
      </Link>
    </main>
  );
}
