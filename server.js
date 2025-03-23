import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());

// Mock projects data
const projects = [
    {
      "title": "E-Commerce Site",
      "author": "John Doe",
      "languages": ["React", "Bootstrap", "Node.js"],
      "description": "A React-based e-commerce site with a shopping cart and payment integration."
    },
    {
      "title": "JavaScript Game",
      "author": "Jane Smith",
      "languages": ["JavaScript", "HTML5", "CSS"],
      "description": "A simple game built using vanilla JavaScript and HTML5 Canvas."
    },
    {
      "title": "Portfolio Website",
      "author": "Alice Johnson",
      "languages": ["React", "Bootstrap", "CSS"],
      "description": "A personal portfolio website built with React and Bootstrap."
    }
  ]

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Projects API!');
});

// API endpoint
app.get('/api/projects', (req, res) => {
  res.json(projects); // Return a proper JSON array
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});