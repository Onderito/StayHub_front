import React from "react";

const input = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your country"
        className="px-3 py-2.5 mt-2 text-white bg-white border rounded-md dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
      />
    </div>
  );
};

export default input;
