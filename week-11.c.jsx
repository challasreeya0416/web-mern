// Q11c_todo.jsx – To-Do List Application using React
// Replace src/App.jsx with this code
// Run: npm run dev

import { useState } from "react";

function App() {
  const [task,  setTask]  = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;   // don't add empty tasks
    setTasks([...tasks, task]);
    setTask("");                       // clear input after adding
  }

  function deleteTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} &nbsp;
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default App;

/*
  Explanation:
  useState("")   → tracks the current input text
  useState([])   → stores the list of tasks
  ...tasks       → spread operator: adds new task without mutating array
  .filter()      → removes task at given index on delete
*/
