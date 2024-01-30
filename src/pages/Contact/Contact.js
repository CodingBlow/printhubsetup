import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  return (
    <div className="max-w-container mx-auto px-4 pb-10">
      <Breadcrumbs title="Contact" prevLocation="/" />

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
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button className="w-32 bg-primeColor text-white py-2 px-4 rounded-md hover:bg-black transition duration-200">
            Submit
          </button>
          <a
            href="https://tawk.to/chat/65aca3790ff6374032c2f282/1hkl5t5v9"
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
