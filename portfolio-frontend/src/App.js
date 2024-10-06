import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  // State to manage visibility of Education section
  const [isEducationVisible, setIsEducationVisible] = useState(true);

  // State to manage visibility of Work Experience section
  const [isWorkVisible, setIsWorkVisible] = useState(true);

  // State to manage visibility of Skills section
  const [isSkillsVisible, setIsSkillsVisible] = useState(true);

  return (
    <Router>
      <div className="App">
        <div className="layout">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <div className="profile">
              <img 
                src="./1690457673012.jpg" 
                alt="Profile" 
                className="profile-pic" 
              />
              <h3>Alexis Insalaco</h3>
              <p>alexis.insalaco@email.com</p>
            </div>
            <footer className="footer">
              <p>Powered by YourBrand</p>
            </footer>
          </aside>

          {/* Main Content Area */}
          <main className="main-content">
            {/* Hero Section */}
            <section className="hero">
              <h1>Welcome to My Portfolio</h1>
              <p>
                Discover my work and projects that have shaped my career as a DevOps Engineer.
              </p>
            </section>

            {/* CV Section */}
            <section className="cv-section">
              <h2>My Experience</h2>

              {/* Container for all sections */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                flexWrap: 'wrap' 
              }}>
                
                {/* Education Section */}
                <div 
                  className="education-card1" 
                  onClick={() => setIsEducationVisible(!isEducationVisible)}
                  style={{ 
                    flex: '0 0 23%', 
                    border: '1px solid #ccc', 
                    padding: '20px', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease', 
                    marginBottom: '20px' 
                  }}
                >
                  <h3>
                    {isEducationVisible 
                      ? 'Education Details' 
                      : 'Click to View Education'
                    }
                  </h3>
                  {isEducationVisible ? (
                    <div>
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
                    </div>
                  ) : (
                    <p>
                      I have a background in both Computer Science and DevOps Engineering. Click to learn more!
                    </p>
                  )}
                </div>

                {/* Work Experience Section */}
                <div 
                  className="education-card1" 
                  onClick={() => setIsWorkVisible(!isWorkVisible)}
                  style={{ 
                    flex: '0 0 23%', 
                    border: '1px solid #ccc', 
                    padding: '20px', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease', 
                    marginBottom: '20px' 
                  }}
                >
                  <h3>
                    {isWorkVisible 
                      ? 'v Work Experience' 
                      : '> Work Experience'
                    }
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
                </div>

                {/* Skills Section */}
                <div 
                  className="education-card1" 
                  onClick={() => setIsSkillsVisible(!isSkillsVisible)}
                  style={{ 
                    flex: '0 0 23%', 
                    border: '1px solid #ccc', 
                    padding: '20px', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease', 
                    marginBottom: '20px' 
                  }}
                >
                  <h3>
                    {isSkillsVisible 
                      ? 'v Skills' 
                      : '> Skills'
                    }
                  </h3>
                  {isSkillsVisible && (
                    <ul>
                      <li>Node.js, JavaScript, Python</li>
                      <li>Docker, Kubernetes, Terraform</li>
                      <li>AWS, Azure, Google Cloud</li>
                      <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                    </ul>
                  )}
                </div>

                {/* Future Section */}
                <div 
                  className="education-card1" 
                  style={{ 
                    flex: '0 0 23%', 
                    border: '1px solid #ccc', 
                    padding: '20px', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease', 
                    marginBottom: '20px' 
                  }}
                >
                  <h3>Future Section</h3>
                  <p>Additional content will be added here later.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
