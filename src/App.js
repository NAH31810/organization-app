// 1. IMPORTS ALWAYS GO AT THE TOP
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import TodoList from "./components/TodoList";

// 2. THE FUNCTION STARTS HERE
function App() {
  return (
    <Router>
      {/* 3. THE WRAPPER DIV GOES INSIDE THE ROUTER */}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand text-info fw-bold" to="/">
              Organize My Brain
            </Link>
            <div className="navbar-nav ms-auto">
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

        <div className="container pb-5">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-container">
                  <h1 className="home-title">Welcome to Organize My Brain!</h1>
                  <p className="home-subtitle">
                    A little scatter brained? no worries, organize it here! This
                    is a simple React app to help you keep track of your tasks
                    and thoughts. Use the navigation bar to explore the
                    different features. Happy organizing!
                  </p>
                </div>
              }
            />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
