// src/api.js
import api from './services/api'; // Import the API instance from src/services/api.js

// Example of GET request
export const getProjects = () => {
  return api.get('/projects'); // Sends a GET request to /projects endpoint
};

// Example of POST request
export const createProject = (projectData) => {
  return api.post('/projects', projectData); // Sends a POST request with projectData to /projects endpoint
};

// You can export other functions for different API routes as needed