import React from "react";
import { Link } from "react-router-dom";

const FormPage = () => {
  const handleSubmit = (event) => {
    // Handle form submission logic here
    // For now, prevent the default form submission behavior
    event.preventDefault();

    // Navigate to another component using Link
    // You can replace '/another-component' with the path of the component you want to navigate to
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold mb-4">Enter your information</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number:
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="tel"
              id="phone"
              name="phone"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="modelNumber"
            >
              Model Number:
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="text"
              id="modelNumber"
              name="modelNumber"
            />
          </div>

          {/* Use Link component for navigation */}
          <Link to="/setup/downloading/form/error">
            <button
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
