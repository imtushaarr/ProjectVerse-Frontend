import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Ensure this is the correct URL
});

export const getProjects = () => api.get('/projects'); // This is the correct endpoint for GET
export const createProject = (projectData) => api.post('/projects', projectData); // POST endpoint for creating a project