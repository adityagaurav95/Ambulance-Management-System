import React from 'react';
import { Link } from 'react-router-dom';
import AmbulanceLogo from "../assets/Ambulance.jpg";

const Start = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img className="w-full h-95 object-cover" src={AmbulanceLogo} alt="Ambulance Logo" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Gradient Overlay */}
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center mt-6">
          <h2 className="text-white text-3xl font-semibold mb-4">Get Started with MediSynch</h2>
          <Link to='/login' className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
