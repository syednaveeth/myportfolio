import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 relative">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
          Syed Naveeth S
        </h1>

        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-4/8 transform -translate-x-1/2 space-x-8 text-lg font-medium bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Certifications
          </Link>
          <Link to="/project" className="hover:text-blue-700">
            Project
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-fadeIn">
          <nav className="flex flex-col items-center py-4 space-y-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              Contact
            </Link>
            <Link
              to="/project"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              Project
            </Link>
          </nav>
        </div>
      )}

      {/* small fade animation for dropdown */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
