import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-footerBg w-full'>
      <div className='my-container'>
        <div className='flex justify-center'>
          <div className='w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-125 mr-5 flex items-center justify-center'>
            <FaFacebookF className='text-icon text-2xl' />
          </div>
          <div className='w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-125 mr-5 flex items-center justify-center'>
            <FaLinkedinIn className='text-icon text-2xl' />
          </div>
          <div className='w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-125 mr-5 flex items-center justify-center'>
            <FaGithubSquare className='text-icon text-2xl' />
          </div>
          <div className='w-12 h-12 bg-iconBg transition duration-300 hover:bg-hIconBg transform hover:scale-125 mr-5 flex items-center justify-center'>
            <FaInstagramSquare className='text-icon text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
