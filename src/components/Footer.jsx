import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-[#161618]">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Join our newsletter and get the latest news <br /> special offers and
          travel tips
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-white bg-white border rounded-md dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-indigo-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <a href="#">StayHub</a>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                About
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Blog
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                News
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
