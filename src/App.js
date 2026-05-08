import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import TodoList from "./components/TodoList";

// The Main App with Navigation
function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          background: "#222",
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
        <Route path="/todos" element={<TodoList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
