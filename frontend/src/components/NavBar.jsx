import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-between gap-10 text-2xl">
          <Link
            to={`/`}
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md font-semibold"
          >
            Fullstack Project
          </Link>
          <Link
            to={`/tutorials`}
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Tutorials
          </Link>

          <Link
            to={`/tutorials/add`}
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Add
          </Link>
        </div>
        <div className="flex justify-between text-2xl">
          <Link
            to={`https://github.com/quang08/react_mysql`}
            className="text-white cursor-pointer hover:bg-slate-800 transition duration-300 py-1 px-2 rounded-md  font-semibold"
          >
            Github Source Code
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
