// src/routes/portfolio.js

const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/portfolioItem');

// Create a new portfolio item
router.post('/', async (req, res) => {
  try {
    const newItem = new PortfolioItem(req.body); // Create a new item with the request body
    const savedItem = await newItem.save();// Save the item to the database
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single portfolio item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a portfolio item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await PortfolioItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a portfolio item
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await PortfolioItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
