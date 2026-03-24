// Q11b_sharing_data.jsx – Sharing Data Between Components using Props
// Replace src/App.jsx with this code
// Run: npm run dev

import { useState } from "react";

// Child Component – receives data via props
function Student(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <h3>Course:       {props.course}</h3>
      <h3>Marks:        {props.marks}</h3>
    </div>
  );
}

// Parent Component – passes data to child
function App() {
  return (
    <div>
      <h1>Sharing Data Between Components</h1>
      <Student name="Sriram" course="MERN Stack" marks={90} />
      <Student name="Ravi"   course="ReactJS"    marks={85} />
      <Student name="Priya"  course="TypeScript"  marks={92} />
    </div>
  );
}

export default App;

/*
  Explanation:
  App      → Parent component
  Student  → Child component
  props    → object that holds all values passed from parent
  Data flows one way: Parent → Child
*/
