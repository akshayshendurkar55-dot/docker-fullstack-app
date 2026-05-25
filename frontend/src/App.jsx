import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Docker Full Stack App 🚀</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;