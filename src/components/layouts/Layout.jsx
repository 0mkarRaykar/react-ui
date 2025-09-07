import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true); // start semi-open

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Quben Infra</span>
            <img
              src="https://via.placeholder.com/32"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};
