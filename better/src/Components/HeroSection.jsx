import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-green-primary text-white py-20 px-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Mortgages Made Simple
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Congrats. You’re pre-approved for a loan up to $450,000
      </p>
      <button className="bg-green-secondary hover:bg-green-600 text-white px-8 py-3 rounded-full">
        Start My Approval
      </button>
      <p className="mt-4 text-sm">3 min | No credit impact</p>
    </div>
  );
};

export default HeroSection;
