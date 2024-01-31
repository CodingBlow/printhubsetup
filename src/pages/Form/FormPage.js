import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormPage = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    model: "",
    email: "",
  });

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const getdata = async () => {
    const { name, phone, model, email } = user;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        model,
        email,
      }),
    };

    try {
      const res = await fetch(
        "https://client-details-280cb-default-rtdb.firebaseio.com/FormData.json",
        options
      );

      if (res.ok) {
        console.log("Form Submitted");
      } else {
        alert("Form Not Submitted");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Form Not Submitted");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold mb-4">Enter Details to Download</h1>

        <form method="POST">
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
              value={user.name}
              autoComplete="off"
              required
              onChange={data}
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
              value={user.phone}
              autoComplete="off"
              required
              onChange={data}
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
              type="text"
              id="email"
              name="email"
              required
              value={user.email}
              autoComplete="off"
              onChange={data}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="model"
            >
              Model Number:
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="text"
              id="model"
              name="model"
              value={user.model}
              autoComplete="off"
              onChange={data}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="osVersion"
            >
              OS Version:
            </label>
            <select
              className="border border-gray-300 p-2 w-full rounded-md"
              id="osVersion"
              name="osVersion"
            >
              <option value="Windows">Windows</option>
              <option value="Linux">Linux</option>
              <option value="Mac">Mac</option>
            </select>
          </div>

          <Link to="/setup/downloading/form/error">
            <button
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
              type="button"
              onClick={getdata}
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
