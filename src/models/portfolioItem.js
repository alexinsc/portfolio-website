// src/models/portfolioItem.js

const mongoose = require('mongoose'); // Import the mongoose module

const PortfolioItemSchema = new mongoose.Schema({ // Define a new mongoose schema
  title: { type: String, required: true }, // Define a title field with a required property
  description: { type: String, required: true }, // Define a description field with a required property
  imageUrl: String, // Define an imageUrl field
  projectUrl: String, // Define a projectUrl field
  createdAt: { type: Date, default: Date.now }, // Define a createdAt field with a default value
});

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
