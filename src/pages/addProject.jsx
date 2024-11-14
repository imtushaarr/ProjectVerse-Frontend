import { useState } from 'react';
import { createProject } from '../services/api'; // Ensure this is the correct path

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null, // Change to file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For the description, we limit it to 50 words
    if (name === 'description') {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount <= 50) {
        setFormData({ ...formData, [name]: value });
      } else {
        // Limit description to 50 words
        const words = value.trim().split(/\s+/).slice(0, 50).join(' ');
        setFormData({ ...formData, [name]: words });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      await createProject(formDataToSend);
      alert('Project added successfully!');
      setFormData({ name: '', description: '', price: '', image: null });
    } catch (error) {
      alert('Error adding project.');
      console.error(error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setFormData({ name: '', description: '', price: '', image: null });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow mt-12 mb-12">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="name">
          Project Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter project name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="description">
          Description (max 50 words)
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter project description"
          required
        />
        <p className="text-sm text-gray-600 mt-1">
          {formData.description.trim().split(/\s+/).length} / 50 words
        </p>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter project price"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="image">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
          accept="image/*"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="w-full bg-[#052349] text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Add Project
        </button>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-[#052349] text-white py-2 px-4 rounded hover:bg-gray-600 ml-2"
        >
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default AddProject;