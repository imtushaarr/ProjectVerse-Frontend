import { useState } from 'react';
import imageSrc from '../assets/images/3.png';
import { Link } from 'react-router-dom';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 lg:pb-0 mt-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <img className="w-auto h-10 lg:h-12" src={imageSrc} alt="Logo" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
            >
              Projects
            </Link>
            <Link
              to="/about-us"
              className="text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
            >
              Contact Us
            </Link>
          </div>
        </nav>

            {/* Mobile View */}

        {mobileMenuOpen && (
          <nav className="pt-4 pb-6 bg-black border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  to="/"
                  className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
                >
                  Projects
                </Link>
                <Link
                  to="/about-us"
                  className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-[#f3ce18] focus:text-[#f3ce18]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}