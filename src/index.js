// src/index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Import portfolio routes
const portfolioRouter = require('./routes/portfolio');
app.use('/portfolio', portfolioRouter);

// Simple route
app.get('/', (req, res) => {
  res.send("Welcome to Alexis's Portfolio Website!");
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
