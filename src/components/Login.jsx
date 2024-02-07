import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token); // stock le token
        console.log("Login success", data);
        setRegistrationSuccess(true); // change la valeur du state
      } else {
        const errorData = await response.json();
        console.error("Login failded", errorData);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      window.location.href = "/"; // renvoie à la page d'accueil si connexion réussi
    }
  }, [registrationSuccess]); // on surveille le changement de la valeur du state

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-[#161618]">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto"></div>
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>
        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>
        <form onSubmit={handleLogin}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-[#161618] dark:border-white dark:placeholder-gray-400 focus:border-indigo-800 dark:focus:border-indigo-800 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Forget Password?
            </a>
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>
        <Link
          to={"/register"}
          href="#"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-indigo-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;