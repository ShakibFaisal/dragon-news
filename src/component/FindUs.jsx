import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="bg-base-100 mt-5 shadow-md rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Find Us On</h2>

      <div className="space-y-3">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-blue-50 transition"
        >
          <FaFacebookF className="text-blue-600 text-xl" />
          <span className="font-medium text-gray-700">Facebook</span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-sky-50 transition"
        >
          <FaTwitter className="text-sky-500 text-xl" />
          <span className="font-medium text-gray-700">Twitter</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-pink-50 transition"
        >
          <FaInstagram className="text-pink-500 text-xl" />
          <span className="font-medium text-gray-700">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;
