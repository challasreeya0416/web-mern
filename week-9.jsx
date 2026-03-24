// Q9 – ReactJS: Render HTML, JSX, Props and States
// Setup: npm create vite@latest react-app → React → JavaScript
//        cd react-app → npm install → npm run dev
// Replace src/App.jsx with each section below one at a time

// ══════════════════════════════════════════════════════════════
// Q9a – Render HTML
// ══════════════════════════════════════════════════════════════
// src/App.jsx

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This HTML is rendered using React.</p>
    </div>
  );
}

export default App;


// ══════════════════════════════════════════════════════════════
// Q9b – JSX Markup
// ══════════════════════════════════════════════════════════════
// Replace src/App.jsx with:

/*
function App() {
  const name  = "Manikanta";
  const marks = 85;

  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>Your Marks: {marks}</h2>
      <h3>{marks > 50 ? "Pass" : "Fail"}</h3>
    </div>
  );
}

export default App;
*/


// ══════════════════════════════════════════════════════════════
// Q9c – Props and State
// ══════════════════════════════════════════════════════════════
// Replace src/App.jsx with:

/*
import { useState } from "react";

function Student(props) {
  return (
    <div>
      <h2>Name:  {props.name}</h2>
      <h3>Marks: {props.marks}</h3>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Props and State Example</h1>
      <Student name="Manikanta" marks={90} />
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
*/
