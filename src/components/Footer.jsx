import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
     <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-2  ">New E-com</h3>
            <p className="text-[#EB008B]/70 border-dashed font-medium border-b-2 border-gray-500/50   shadow  rounded p-2 mb-4">
              Your one-stop shop for the latest in fashion, electronics, and
              jewelry. Quality products at unbeatable prices.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-lg mb-2 ">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="font-bold text-lg mb-2 ">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                // to="/about"  // Uncomment this line if you have an About page
                className="text-gray-600 hover:text-pink-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                // to="/contact"  // Uncomment this line if you have a Contact page
                className="text-gray-600 hover:text-pink-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                //   to="/privacy-policy" // Uncomment this line if you have a Privacy Policy page
                  className="text-gray-600 hover:text-pink-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-bold text-lg mb-2 ">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
            //  href="#"
              className="text-gray-600 hover:text-pink-500">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a 
            //  href="#"
              className="text-gray-600 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
            //  href="#"
              className="text-gray-600 hover:text-pink-500">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; 2025 New E-com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;