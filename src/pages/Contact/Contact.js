import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    message: "",
  });

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const getdata = async () => {
    const { name, phone, message } = user;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        message,
      }),
    };

    try {
      const res = await fetch(
        "https://client-details-280cb-default-rtdb.firebaseio.com/Contact.json",
        options
      );

      if (res.ok) {
        alert("Message Sent");
      } else {
        alert("Form Not Submitted");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Form Not Submitted");
    }
  };
  return (
    <div className="max-w-container mx-auto px-4 pb-10">
      <form className="mt-8 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={user.name}
            autoComplete="off"
            required
            onChange={data}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={user.phone}
            autoComplete="off"
            required
            onChange={data}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={user.message}
            autoComplete="off"
            required
            onChange={data}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
            type="button"
            onClick={getdata}
          >
            Submit
          </button>
          <a
            href="https://tawk.to/chat/65be18d78d261e1b5f5bf30e/1hln923ec"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Live Chat
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
