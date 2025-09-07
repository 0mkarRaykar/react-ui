// Topbar.jsx
import React from "react";
import { FiMenu, FiCalendar } from "react-icons/fi";

export const Topbar = ({ onToggle }) => {
  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggle}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-700 focus:outline-none"
        >
          <FiMenu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Financial Year */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FiCalendar size={16} className="text-gray-500" />
          FY 2024-25
        </div>

        {/* Profile Avatar - Online Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-9 h-9 rounded-full border border-gray-300 shadow-sm object-cover"
        />
      </div>
    </header>
  );
};
