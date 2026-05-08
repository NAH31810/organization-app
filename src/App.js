import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import TodoList from "./components/TodoList";

// The Main App with Navigation
function App() {
  return (
    <Router>
      {/* Bootstrap Navbar instead of custom flexbox */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand text-info fw-bold" to="/">
            Organize My Brain
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/todos">
              Todos
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-center mt-5">
                Welcome to Organize My Brain!
              </h1>
            }
          />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
