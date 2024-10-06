import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Fetch portfolio items from the API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/portfolio')
      .then((response) => {
        setPortfolioItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <div className="portfolio-list">
        {portfolioItems.map(item => (
          <div key={item._id} className="portfolio-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
            <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
