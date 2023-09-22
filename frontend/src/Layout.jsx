import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/NavBar";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-gray-200 rounded-sm p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
