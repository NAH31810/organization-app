import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px",
          background: "#333",
          color: "#fff",
        }}
      >
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>
        <Link to="/todos" style={{ color: "#fff" }}>
          Todos
        </Link>
        <Link to="/contact" style={{ color: "#fff" }}>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <h1 style={{ padding: "20px" }}>Welcome to Organize My Brain!</h1>
          }
        />
        <Route
          path="/todos"
          element={<h1 style={{ padding: "20px" }}>Todo View</h1>}
        />
        <Route
          path="/contact"
          element={<h1 style={{ padding: "20px" }}>Contact View</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
