import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    street: "",
    pin: "",
    name: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    email: "",
    country: "",
    state: "",
    flat: "",
    cashOnDelivery: false,
    comments: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to server
    // For simplicity, we're just setting a flag to show the success message
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order Now</h1>

      {isSubmitted ? (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-bold">
            Your order has been successful. It will be delivered soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* ... other form fields ... */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-600"
            >
              Contact Number
            </label>
            <input
              type="Number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="flatno"
              className="block text-sm font-medium text-gray-600"
            >
              Flat Number
            </label>
            <input
              type="Text"
              id="flatno"
              name="flatno"
              value={formData.flatno}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormPage;
