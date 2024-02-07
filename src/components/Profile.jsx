import React, { useState } from "react";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateProfile = async () => {
    try {
      // fetch l'adresse l'api
      const response = await fetch(`http://localhost:3000/api/users/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        console.log("profile updated success");
      } else {
        console.error("failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const deleteProfile = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        localStorage.removeItem("token"); // on enlève le token
        window.location.href = "/register"; // on retourne à la page register
        console.log("profile delete success");
      } else {
        console.error("failed to delete profile");
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col gap-1 max-w-xs  p-5 rounded-lg shadow-md dark:bg-[#161618]">
        <h3 className="text-white text-center font-bold text-xl mt-4">
          Your Profile
        </h3>
        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Change your informations
        </p>
        <div className="flex flex-col gap-2 mt-6">
          <input
            className="px-4 py-2 mt-2 w-full  text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-4 py-2 mt-2 w-full text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-4 py-2 mt-2 w-full text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-2  mt-5">
          <button
            onClick={deleteProfile}
            type="submit"
            className="p-2 w-40 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-900 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 "
          >
            Delete account
          </button>
          <button
            onClick={updateProfile}
            type="submit"
            className="p-2 w-40 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
