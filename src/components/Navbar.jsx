import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center shadow-sm shadow-green-200 mx-40 mt-2">
      {/* Left Section: App Name and Description */}
      <div className="flex justify-between items-center space-x-4">
        <h1 className="text-xl font-semibold text-green-200">EF FIX Parser</h1>
        <p className="text-xs text-gray-300 hidden md:block">
          Convert EF standard FIX messages
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
