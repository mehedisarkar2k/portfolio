import React from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-footerBg w-full">
      <div className="my-container">
        <div className="flex justify-center">
          <Link
            to={{ pathname: "https://www.facebook.com/MehediSarkar2k/" }}
            target="_blank"
          >
            <div className="w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-110 cursor-pointer mr-5 flex items-center justify-center">
              <FaFacebookF className="text-icon text-2xl" />
            </div>
          </Link>

          <Link
            to={{ pathname: "https://www.linkedin.com/in/mehedisarkar2k/" }}
            target="_blank"
          >
            <div className="w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-110 cursor-pointer mr-5 flex items-center justify-center">
              <FaLinkedinIn className="text-icon text-2xl" />
            </div>
          </Link>

          <Link
            to={{ pathname: "https://github.com/mehedisarkar2k/" }}
            target="_blank"
          >
            <div className="w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-110 cursor-pointer mr-5 flex items-center justify-center">
              <FaGithubSquare className="text-icon text-2xl" />
            </div>
          </Link>

          <Link
            to={{ pathname: "https://www.instagram.com/mehedisarkar2k/" }}
            target="_blank"
          >
            <div className="w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-110 cursor-pointer mr-5 flex items-center justify-center">
              <FaInstagramSquare className="text-icon text-2xl" />
            </div>
          </Link>
        </div>

        <p className="text-white text-center mt-5 tracking-wider">
          &copy; 2021-{new Date().getFullYear()} | Mehedi Hasan Sarkar
        </p>
      </div>
    </div>
  );
};

export default Footer;
