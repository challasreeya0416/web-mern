// Q10 – ReactJS: Conditional Rendering, Lists, Routing
// Setup: npm create vite@latest react-app → React → JavaScript
//        cd react-app → npm install react-router-dom → npm run dev
// Replace src/App.jsx with each section below one at a time


// ══════════════════════════════════════════════════════════════
// Q10a – Conditional Rendering
// ══════════════════════════════════════════════════════════════
// Replace src/App.jsx with:

/*
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      {isLoggedIn ? (
        <h2>Welcome, Manikanta!</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default App;
*/


// ══════════════════════════════════════════════════════════════
// Q10b – Rendering Lists
// ══════════════════════════════════════════════════════════════
// Replace src/App.jsx with:

/*
function App() {
  const students = ["Manikanta", "Ravi", "Kiran", "Suresh"];

  return (
    <div>
      <h1>Rendering List Example</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/


// ══════════════════════════════════════════════════════════════
// Q10c – Routing using React Router
// ══════════════════════════════════════════════════════════════
// Install: npm install react-router-dom
//
// Create these 3 files in src/:
//
// src/Home.jsx
//   function Home()    { return <h2>Home Page</h2>;    }
//   export default Home;
//
// src/About.jsx
//   function About()   { return <h2>About Page</h2>;   }
//   export default About;
//
// src/Contact.jsx
//   function Contact() { return <h2>Contact Page</h2>; }
//   export default Contact;
//
// Replace src/App.jsx with:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home    from "./Home";
import About   from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about"> About</Link> |
          <Link to="/contact"> Contact</Link>
        </nav>
        <Routes>
          <Route path="/"        element={<Home    />} />
          <Route path="/about"   element={<About   />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
