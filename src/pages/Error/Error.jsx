import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgmain, hplogo, warning } from "../../assets/images";

function Error() {
  const [loading, setLoading] = useState(true);
  const [fatalErrorCode, setFatalErrorCode] = useState("C00000354");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-white p-4 flex flex-col md:flex-row items-center md:pl-20">
        {/* Company Logo */}
        <div className="flex items-center">
          <img src={hplogo} alt="Company Logo" className="h-14 mr-5 p-1" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } flex-col md:flex-row mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/setup/downloading" onClick={toggleMenu}>
                OfficeJet
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/setup/downloading" onClick={toggleMenu}>
                DeskJet
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/setup/downloading" onClick={toggleMenu}>
                ENVY
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/setup/downloading" onClick={toggleMenu}>
                LaserJet
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Loader */}

      <div className="flex items-center justify-center ">
        {loading ? (
          <div className="text-center">
            <div className="w-32 h-32 border-t-4 border-blue-500 border-solid mx-auto mb-4 animate-spin rounded-full"></div>
            <h1 className="text-4xl font-bold mb-4">Please wait,</h1>
            <p className="text-xl mb-4">Installation in Progress!</p>
            <p className="mt-4 text-xl">Download Printer Setup/Drivers</p>
            <p className=" text-red-800 text-xl font-bold my-6">
              Server Connected
            </p>
          </div>
        ) : (
          <div>
            {/* Your content goes here */}
            <div
              className=" p-20 flex flex-col items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgmain})`,
              }}
            >
              <img
                src={warning}
                alt="Company Logo"
                className="mb-4"
                width="80px"
              />

              <div className="text-center text-black">
                <h1 className="text-5xl font-bold mb-6">Fatal Error!</h1>
                <p className="text-lg mb-6 font-bold">
                  Printer Driver installation has failed due to a fatal error:
                  <span className="font-bold text-red-500">
                    {" "}
                    {fatalErrorCode}
                  </span>
                  <p>Preventing product driver installation.</p>
                </p>

                <p className="text-xl font bold">
                  Please contact Customer Support or Chat with us:
                </p>
                <p className="text-blue-500 font-bold mb-6 ">
                  24/7 Toll Free (USA/Canada): +8379483954785
                </p>
              </div>

              <div className="flex flex-col items-center mt-8">
                <p className="text-black text-xl font-bold">
                  Chat Live Customer Support
                </p>
                {/* Add your live chat component or link here */}
              </div>

              {/* Black Button */}
              <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 mt-8 transition duration-300">
                <a href="https://tawk.to/chat/65aca3790ff6374032c2f282/1hkl5t5v9">
                  Chat Now
                </a>
              </button>
            </div>

            {/*Ends  */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Error;
