import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Logout from "../utils/Logout";

const NavBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-white fixed w-full shadow dark:bg-[#161618]">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          to={"/"}
          className="text-gray-800 transition-colors font-semibold duration-300 transform dark:text-gray-200 hover:text-indigo-500  mx-1.5 sm:mx-6"
        >
          Home
        </Link>

        {isAuthenticated && (
          <>
            <Link
              to={"/reservations"}
              className="border-b-2 border-transparent font-semibold hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-indigo-500  mx-1.5 sm:mx-6"
            >
              Reservations
            </Link>
            <Link
              to={"/favorites"}
              className="border-b-2 border-transparent font-semibold hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-indigo-500  mx-1.5 sm:mx-6"
            >
              Favorites
            </Link>
            <Link
              to={"/profile"}
              className="border-b-2 border-transparent font-semibold hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-indigo-500  mx-1.5 sm:mx-6"
            >
              Profile
            </Link>
          </>
        )}
        <Link
          to={"/login"}
          className={`border-b-2 border-transparent font-semibold hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-indigo-500 mx-1.5 sm:mx-6 ${
            isAuthenticated ? "hidden" : ""
          }`}
        >
          Login
        </Link>
        <Logout />
      </div>
    </nav>
  );
};

export default NavBar;
