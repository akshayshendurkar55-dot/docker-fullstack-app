
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend request failed");
        }
        return res.text();
      })
      .then((data) => setMessage(data))
      .catch(() => {
        setError("Could not connect to backend. Please check Docker services.");
      });
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Docker Full Stack App</h1>
      {error ? <p>{error}</p> : <h2>{message}</h2>}
    </main>
  );
}

export default App;
