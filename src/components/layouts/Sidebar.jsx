import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const menuItems = [
  { label: "Dashboard", icon: <FiHome size={20} />, path: "/dashboard" },
  { label: "Company", icon: <FiBriefcase size={20} />, path: "/company" },
];

export const Sidebar = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <aside
      className={`h-screen bg-gray-900 text-white shadow flex flex-col transition-[width] duration-300 ease-in-out`}
      style={{ width: collapsed ? "70px" : "220px" }}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="p-2 m-2 text-gray-300 hover:text-sky-400 focus:outline-none self-end"
      >
        {collapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
      </button>

      {/* Logo */}
      <div
        className={`font-bold text-xl px-4 mb-6 transition-opacity duration-300 ${
          collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        FlowState
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2 px-2">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
              location.pathname === item.path
                ? "bg-gray-800 font-semibold"
                : "hover:bg-gray-800"
            }`}
          >
            {/* Icon always visible */}
            <span className="text-gray-300">{item.icon}</span>

            {/* Label hidden when collapsed */}
            <span
              className={`text-sm transition-opacity duration-300 ${
                collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div
        className={`p-4 text-xs text-gray-400 border-t border-gray-700 mt-auto transition-opacity duration-300 ${
          collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        &copy; 2025 FlowState
      </div>
    </aside>
  );
};
