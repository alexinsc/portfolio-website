import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';


function App() {
     // State to manage visibility of Education section
  const [isEducationVisible, setIsEducationVisible] = useState(true);
  // State to manage visibility of Work Experience section
  const [isWorkVisible, setIsWorkVisible] = useState(true);
  const [isSkillsVisible, setIsSkillsVisible] = useState(true);

  return (
    <Router>
      <div className="App">
        <div className="layout">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <div className="profile">
              <img src="./1690457673012.jpg" alt="Profile" className="profile-pic" />
              <h3>Alexis Insalaco</h3>
              <p>alexis.insalaco@email.com</p>
            </div>
            <footer className="footer">
              <p>Powered by YourBrand</p>
            </footer>
          </aside>

          {/* Main Content Area with Routes */}
          <main className="main-content">

          {/* Hero Section */}
          <section className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my work and projects that have shaped my career as a DevOps Engineer.</p>
          </section>

          {/* CV Section */}
          <section className="cv-section">
            <h2>My Experience</h2>

            {/* Education Section */}
            <h3>
              {/* Toggle Education Section Visibility */}
              <button onClick={() => setIsEducationVisible(!isEducationVisible)}>
                {isEducationVisible ? 'v Education' : '> Education'}
              </button>
            </h3>
            {isEducationVisible && (
              <ul>
                <li>
                  <strong>Bachelor's in Computer Science</strong> - XYZ University (2015 - 2019)
                  <p>Specialized in software development, algorithms, and database management.</p>
                </li>
                <li>
                  <strong>Master's in DevOps Engineering</strong> - ABC University (2020 - 2022)
                  <p>Focus on cloud infrastructure, CI/CD pipelines, and automation.</p>
                </li>
              </ul>
            )}

            {/* Work Experience Section */}
            <h3>
              {/* Toggle Work Experience Section Visibility */}
              <button onClick={() => setIsWorkVisible(!isWorkVisible)}>
                {isWorkVisible ? 'v Work Experience' : '> Work Experience'}
              </button>
            </h3>
            {isWorkVisible && (
              <ul>
                <li>
                  <strong>Software Engineer</strong> - Google (2019 - 2021)
                  <p>Worked on scalable cloud-based applications and microservices architecture.</p>
                </li>
                <li>
                  <strong>DevOps Engineer</strong> - Microsoft (2021 - Present)
                  <p>Implemented CI/CD pipelines, automated infrastructure deployment, and managed cloud resources.</p>
                </li>
              </ul>
            )}
          {/* Skills Section */}
            <h3>
              {/* Toggle Education Section Visibility */}
              <button onClick={() => setIsSkillsVisible(!isSkillsVisible)}>
                {isSkillsVisible ? 'v Skills' : '> Skills'}
              </button>
            </h3>
            {isSkillsVisible && (
              <ul>
                <li>Node.js, JavaScript, Python</li>
                <li>Docker, Kubernetes, Terraform</li>
                <li>AWS, Azure, Google Cloud</li>
                <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
              </ul>
            )}
          </section>
        </main>
        </div>
      </div>
    </Router>
  );
}

// Define Home component
function Home() {
  return (
    <section className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my work and projects that have shaped my career as a DevOps Engineer.</p>
    </section>
  );
}

export default App;
