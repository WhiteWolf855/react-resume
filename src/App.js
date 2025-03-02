import React from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resume</h1>
      </header>
      <main>
        <section className="personal-info">
          <h2>Personal Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
        <section className="education">
          <h2>Education</h2>
          <p>BS in Computer Science, XYZ University</p>
        </section>
        <section className="experience">
          <h2>Work Experience</h2>
          <p>Software Developer at ABC Corp</p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Thank you for visiting my resume webpage!</p>
      </footer>
    </div>
  );
}

export default App;
