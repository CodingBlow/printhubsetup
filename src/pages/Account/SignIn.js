import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const SignIn = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Sign In" prevLocation="/" />

      <div className="mt-8 md:w-2/3 lg:w-1/2 mx-auto">
        <form>
          <h1 className="text-3xl font-semibold mb-6">Sign In</h1>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
            />
          </div>

          <button
            className="w-full bg-primeColor text-white py-2 px-4 rounded-md hover:bg-black transition duration-200"
            type="submit"
          >
            Sign In
          </button>

          <p className="mt-4 text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primeColor hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
