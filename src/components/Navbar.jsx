import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-300 via-blue-300 to-blue-700 bg-clip-text text-transparent"
        >
          MTA
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? (
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform rotate-45 translate-y-2"></span>
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform -rotate-45 -translate-y-2"></span>
            </div>
          ) : (
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
            </div>
          )}
        </button>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/products"
            className="hover:text-blue-500 transition font-medium"
          >
            Products
          </Link>
          <Link
            to="/todos"
            className="hover:text-blue-500 transition font-medium"
          >
            Todos
          </Link>
          <Link
            to="/recipes"
            className="hover:text-blue-500 transition font-medium"
          >
            Recipes
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col  space-y-4 mt-4">
          <Link
            to="/products"
            className="hover:text-blue-500 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/todos"
            className="hover:text-blue-500 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            Todos
          </Link>
          <Link
            to="/recipes"
            className="hover:text-blue-500 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </Link>
          <Link
            to="/signin"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
