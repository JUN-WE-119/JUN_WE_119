// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-white font-bold text-2xl">
              MealShare
            </a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-200">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MealShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;