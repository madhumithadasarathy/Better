import React from 'react';
import phoneImage from '/hero.png'; // Replace with the actual path
import GoogleLogo from '/google.png'; // Replace with the actual path of the Google logo
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-green-primary text-white h-screen px-6 md:px-16">
      {/* Title */}
      <h1 className="text-center text-green-secondary font-bold text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-snug lg:leading-none">
        Mortgages <br /> made simple
      </h1>

      {/* Phone Image */}
      <img
        src={phoneImage}
        alt="Phone showing approval message"
        className="absolute bottom-0 transform -translate-y-1/2 w-48 md:w-64 lg:w-72"
      />

      {/* Start Approval Button and Google Reviews */}
      <div className="w-full flex justify-between items-center mt-8 md:mt-16">
        {/* Start Approval Button */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-green-secondary text-black font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition">
            Start my approval
          </button>
          <div className="flex items-center text-sm text-white space-x-1">
            <AccessTimeIcon fontSize="small" />
            <span>3 min | No credit impact</span>
          </div>
        </div>

        {/* Google Reviews */}
        <div className="flex items-center space-x-2">
          <img src={GoogleLogo} alt="Google" className="w-6 h-6" />
          <div className="flex space-x-1 text-yellow-400">
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarHalfIcon fontSize="small" />
          </div>
          <span className="text-sm text-white">4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
