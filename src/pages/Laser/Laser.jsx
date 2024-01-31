import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bgmain, hplogo, printersetup3 } from "../../assets/images";

function Laser() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Navbar  */}

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
              <Link to="/setup" onClick={toggleMenu}>
                OfficeJet
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/deskjet" onClick={toggleMenu}>
                DeskJet
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/envy" onClick={toggleMenu}>
                ENVY
              </Link>
            </li>
            <li className="text-gray-600 font-bold transition duration-300 hover:text-blue-500">
              <Link to="/laserjet" onClick={toggleMenu}>
                LaserJet
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div
        className="bg-cover bg-center flex flex-col md:flex-row items-center pb-10"
        style={{
          backgroundImage: `url(${bgmain})`,
        }}
      >
        <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-20 py-10">
          <div className="text-black md:w-3/5 mb-4 md:mb-0">
            <h1 className=" text-4xl mb-6">Set up your HP printer</h1>
            <p className="mb-5 text-xl">
              Enter your HP product name and model number to get the right HP
              Smart software and drivers for you.
            </p>
            <div className="mb-4 flex flex-col md:flex-row items-start">
              <input
                type="text"
                id="productName"
                className="border p-2 w-full md:w-11/12 md:mr-2 rounded-lg py-3"
                placeholder="Enter your product name here. Example: “LaserJet 5010”"
              />
              <Link
                to="/setup/downloading"
                className="bg-white text-blue-500 px-5 py-3 p-2 rounded-lg self-end md:self-start"
              >
                Next
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/5" style={{ marginTop: "auto" }}>
            <img
              src={printersetup3}
              alt="HP Printer"
              className="w-full h-auto md:float-right"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mx-4 lg:mx-12">
        <p className="text-base lg:text-xl py-4 lg:py-10 px-2 lg:px-6">
          Install HP Smart software and drivers on each mobile device or
          computer that you want to print from.
          <br /> Add the printer on the new device. <br />
          <p className="py-4 lg:py-10">
            Need additional help with set-up?{" "}
            <a
              href="https://tawk.to/chat/65aca3790ff6374032c2f282/1hkl5t5v9"
              className="text-blue-500"
            >
              Visit HP Support.
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Laser;
