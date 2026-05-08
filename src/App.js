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
        <Route path="/todos" element={<TodoPage />} />
        <Route
          path="/contact"
          element={<h1 style={{ padding: "20px" }}>Contact View</h1>}
        />
      </Routes>
    </Router>
  );
}

const TodoPage = () => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Need to remember...</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
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

export default App;
