import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-between gap-10 text-2xl">
          <div
            href="/"
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md font-semibold"
          >
            Fullstack Project
          </div>
          <a
            href="/"
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Tutorials
          </a>

          <a
            href="/"
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Add
          </a>
        </div>
        <div className="flex justify-between text-2xl">
          <div
            href="/"
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Github Source Code
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
