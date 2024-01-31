import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  bgmain,
  hplogo,
  otherPrinter,
  applestore,
  playstore,
} from "../../assets/images";

function Downloading() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

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

      {/* Main content */}
      <div
        className="w-full bg-cover flex flex-col lg:flex-row justify-end"
        style={{
          backgroundImage: `url(${bgmain})`,
        }}
      >
        <div className="bg-opacity-90 p-8 text-center lg:text-left flex-grow ml-10 w-full">
          <h1 className=" text-4xl mb-4 text-black">
            Complete setup using HP Smart
          </h1>
          <hr className="border-b-2 border-slate-900 mb-4 mx-auto lg:mx-0 w-3/4" />
          <p className="mb-4 text-black text-2xl">
            1. Make sure that your printer is powered on
          </p>
          <p className="mb-4 text-black text-2xl mb-8">
            2. Install HP Smart to complete setup
          </p>
          <Link
            to="/setup/downloading/form"
            className="bg-black hover:bg-gray-800 text-white p-2 rounded-md
            mb-4"
          >
            {" "}
            Install Printer Driver
          </Link>
        </div>
        <div className="lg:w-3/4 xl:w-4/5 p-4 lg:ml-auto lg:mr-auto">
          <img
            src={otherPrinter}
            alt="Printer Setup"
            className="lg:w-3/4 xl:w-4/5"
            style={{ width: "250px" }}
          />
          <p className=" font-bold">Other Printers</p>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="p-4 md:p-8 bg-white ml-10">
        <p className="text-lg font-semibold mb-2">Also Available on:</p>
        <div className="flex space-x-4 mb-10">
          <img src={applestore} alt="Apple Store" className="h-12" />
          <img src={playstore} alt="Google Play Store" className="h-12" />
        </div>

        <p className="text-3xl font-semibold mb-2 text-sky-500">
          Troubleshooting tips for launching the Microsoft Store
        </p>

        {/* Troubleshooting tips */}
        <details className="mb-4">
          <summary className="text-black font-semibold cursor-pointer">
            Check and Update Your Windows Version
          </summary>
          <p className="ml-2">
            Update your operating system to the latest Windows software, if
            available. HP Smart is compatible with Windows 10 version 1809 or
            higher and Windows 11. To check for updates, select “Start” {">"}
            “Settings” {">"} “Windows Update”. Select “Check for updates”
          </p>
        </details>

        {/* Platform descriptions */}
        <details className="mb-4">
          <summary className="text-black font-semibold cursor-pointer">
            Disconnect from a VPN
          </summary>
          <p className="ml-2">
            Apps from the Microsoft Store might not install when connected to a
            VPN. Consider your location and the security of the Wi-Fi network
            before disconnecting from a VPN.
          </p>
        </details>

        <details className="mb-4">
          <summary className="text-black font-semibold cursor-pointer">
            Skip Microsoft account Creation
          </summary>

          <p className="ml-2">
            If prompted to create or sign in to a Microsoft account, close the
            window. You will be able to open the app store anyway. A Microsoft
            account is not required in order to install or use HP Smart. HP
            Smart is free software for printer set-up and use.
          </p>
        </details>

        <details className="mb-4">
          <summary className="text-black font-semibold cursor-pointer">
            Check your computer time and location settings
          </summary>
          <p className="ml-2">
            If the Microsoft Store won’t open, verify that your time settings
            are correct. Select “Start” {">"} “Settings” {">"} “Time &
            language”. Check the “Date & time” and “Region” to make sure they
            are your current location and time zone.
          </p>
        </details>
      </div>

      <p className=" mb-3 text-2xl ml-16">
        Need additional help with set-up? Visit{" "}
        <a
          href="https://tawk.to/chat/65aca3790ff6374032c2f282/1hkl5t5v9"
          className="text-blue-500 underline"
        >
          HP Support
        </a>
      </p>
    </div>
  );
}

export default Downloading;
