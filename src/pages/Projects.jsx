import { useEffect, useState } from 'react';
import { getProjects } from '../services/api'; // Ensure this is implemented correctly
import { handlePayment } from '../services/paymentService'; // Ensure this is handling the payment correctly
import { FaSearch } from 'react-icons/fa'; // Importing FontAwesome Search icon
import { ToastContainer, toast } from 'react-toastify'; // Correct import for ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for React Toastify

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // To handle errors
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(12); // Number of projects per page
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    getProjects()
      .then(({ data }) => setProjects(data))
      .catch((err) => {
        setError('Failed to load projects. Please try again later.');
        console.error(err); // Log the error for debugging
      });
  }, []);

  const handleBuyNow = (projectId) => {
    handlePayment(projectId)
      .then((response) => {
        // Handle successful payment response
        console.log('Payment successful:', response);
      })
      .catch((err) => {
        // Handle payment failure
        console.error('Payment failed:', err);
      });
  };

  // Function to truncate project description to 40 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 40) {
      return words.slice(0, 40).join(' ') + '...';
    }
    return description;
  };

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const nextPage = () => {
    if (currentProjects.length === projectsPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = () => {
    // You can handle additional search logic here if needed
    console.log("Searching for:", searchQuery);
  };

  // Function to handle "More Details" click
  const handleMoreDetails = (projectId) => {
    // Show a toast message indicating that the feature is under development
    toast.info("More details feature is under development.");
  };

  return (
    <div className="container mx-auto p-4 mt-10 mb-12">
      {error && <p className="text-[#052349] text-center">{error}</p>}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-s font-bold">Home / Projects</h2>

        {/* Search Bar with Icon */}
        <div className="flex items-center border border-gray-300 rounded-full p-2">
          <input
            type="text"
            placeholder="Search Projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none outline-none p-1.5 w-64"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-[#f3ce18] text-white rounded-full ml-2 hover:bg-black"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 mb-12">
        {currentProjects.length === 0 ? (
          <p className="col-span-full text-center">Loading Projects...</p>
        ) : (
          currentProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white p-4 rounded-lg border-[#052349] shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image ? `http://localhost:5001/${project.image}` : '/default-image.jpg'}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                {/* Title with ellipsis and hover effect */}
                <h3 className="text-l font-semibold text-gray-800 truncate hover:overflow-visible hover:whitespace-normal hover:bg-opacity-50 hover:bg-gray-300">
                  {project.name}
                </h3>

                {/* Description with truncation */}
                <p className="text-gray-600 text-sm mt-2 text-justify truncate hover:overflow-visible hover:whitespace-normal hover:bg-opacity-50 hover:bg-gray-300">
                  {truncateDescription(project.description)}
                </p>

                {/* Add price display */}
                <p className="text-lg font-bold text-gray-800 mt-2">Price: ₹{project.price}</p>
                <button
                  onClick={() => handleBuyNow(project._id)}
                  className="mt-4 bg-[#f3ce18] text-black hover:text-white py-2 px-6 rounded-full text-sm hover:bg-black"
                >
                  Buy Now
                </button>
                {/* More Details Button */}
                <button
                  onClick={() => handleMoreDetails(project._id)}
                  className="mt-4 bg-[#f3ce18] text-black hover:text-white py-2 px-6 rounded-full text-sm hover:bg-black ml-6"
                >
                  More Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Next Button */}
      <div className="text-center mt-6">
        {currentProjects.length === projectsPerPage && (
          <button
            onClick={nextPage}
            className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700"
          >
            Next
          </button>
        )}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Projects;