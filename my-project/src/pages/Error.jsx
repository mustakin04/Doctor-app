import React from "react";
import { Link } from "react-router";


const Error = () => {
  

  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button (no functionality) */}
      <Link to="/login" className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;