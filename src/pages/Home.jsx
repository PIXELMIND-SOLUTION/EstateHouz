import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome
        </h1>

        <div className="space-y-4">
          {/* Privacy Policy */}
          <button
            onClick={() => navigate("/privacy-policy")}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
          >
            Privacy Policy
          </button>

          {/* Terms & Conditions */}
          <button
            onClick={() => navigate("/terms-and-conditions")}
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200"
          >
            Terms & Conditions
          </button>

          {/* Contact */}
          <button
            onClick={() => navigate("/contact")}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
