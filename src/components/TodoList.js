import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">My Tasks</h2>

          {/* The FORM tag here is what makes the Enter key work! */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
            className="input-group mb-3"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Add a task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>

          <div className="btn-group mb-3 d-flex justify-content-center">
            <button
              className={`btn btn-outline-secondary ${filter === "all" && "active"}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`btn btn-outline-secondary ${filter === "incomplete" && "active"}`}
              onClick={() => setFilter("incomplete")}
            >
              Incomplete
            </button>
            <button
              className={`btn btn-outline-secondary ${filter === "completed" && "active"}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <ul className="list-group">
            {filteredTasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleComplete(tasks.indexOf(task))}
                >
                  {task.text}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(tasks.indexOf(task))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
