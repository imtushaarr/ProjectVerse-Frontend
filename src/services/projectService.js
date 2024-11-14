import axios from 'axios';

const handleCreateProject = async (projectData, file) => {
  const formData = new FormData();
  formData.append('name', projectData.name);
  formData.append('description', projectData.description);
  formData.append('image', file); // Assuming 'file' is the image selected by the user

  console.log('File name:', file.name); // Log the file name to the console

  try {
    const response = await axios.post('http://localhost:5001/api/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data); // Log the response from the server
  } catch (error) {
    console.error('Error creating project:', error);
  }
};