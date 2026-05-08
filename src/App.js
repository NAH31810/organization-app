import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
// The functional component with the Logic
const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Tasks</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task (e.g. Tend the roses)"
        style={{ padding: "10px", width: "250px" }}
      />
      <button onClick={addTask} style={{ padding: "10px", marginLeft: "10px" }}>
        Add Task
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "15px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
