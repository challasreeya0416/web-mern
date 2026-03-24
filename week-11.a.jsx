// Q11a_hooks.jsx – React Hooks using useState
// Replace src/App.jsx with this code
// Run: npm run dev

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Hooks – useState Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      &nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;

/*
  Explanation:
  useState(0)  → creates state variable 'count' with initial value 0
  setCount()   → updates the state
  React re-renders the UI automatically whenever state changes
*/
