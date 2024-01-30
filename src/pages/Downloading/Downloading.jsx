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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar for larger screens */}
      <nav className="hidden lg:flex items-center justify-between p-4 bg-white text-black">
        {/* Circular Company Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white mr-3">
            <img
              src={hplogo}
              alt="Company Logo"
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="text-lg font-bold">Hewlett-Packard</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/laserjet" className="hover:text-gray-500">
              LaserJet
            </Link>
          </li>
          <li>
            <Link to="/officejet" className="hover:text-gray-500">
              OfficeJet
            </Link>
          </li>
          <li>
            <Link to="/inkjet" className="hover:text-gray-500">
              InkJet
            </Link>
          </li>
          <li>
            <Link to="/deskjet" className="hover:text-gray-500">
              DeskJet
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white mr-3">
            <img
              src={hplogo}
              alt="Company Logo"
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="text-lg font-bold">Hewlett-Packard</span>
        </div>
        <button onClick={toggle} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Responsive Navigation Links */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-white">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/laserjet" className="hover:text-gray-500">
                LaserJet
              </Link>
            </li>
            <li>
              <Link to="/officejet" className="hover:text-gray-500">
                OfficeJet
              </Link>
            </li>
            <li>
              <Link to="/inkjet" className="hover:text-gray-500">
                InkJet
              </Link>
            </li>
            <li>
              <Link to="/deskjet" className="hover:text-gray-500">
                DeskJet
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Main content */}
      <div
        className="w-full bg-cover flex flex-col lg:flex-row justify-end"
        style={{
          backgroundImage: `url(${bgmain})`,
        }}
      >
        <div className="bg-opacity-90 p-8 text-center lg:text-left flex-grow">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Complete setup using HP Smart
          </h1>
          <hr className="border-b-2 border-slate-900 mb-4 mx-auto lg:mx-0 w-16" />
          <p className="mb-4 text-black text-lg">
            1. Make sure that your printer is powered on
          </p>
          <p className="mb-4 text-black text-lg">
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
        <div className="lg:w-3/4 xl:w-4/5 p-4 lg:ml-auto">
          <img
            src={otherPrinter}
            alt="Printer Setup"
            className="lg:w-3/4 xl:w-4/5"
            style={{ width: "250px" }}
          />
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="p-4 md:p-8 bg-white">
        <p className="text-lg font-semibold mb-2">Also Available on:</p>
        <div className="flex space-x-4 mb-4">
          <img src={applestore} alt="Apple Store" className="h-12" />
          <img src={playstore} alt="Google Play Store" className="h-12" />
        </div>

        <p className="text-3xl font-semibold mb-2">
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

      <p className="ml-8 mb-3 text-2xl">
        Need additional help with set-up? Visit{" "}
        <Link to="#" className="text-blue-500 underline">
          HP Support
        </Link>
      </p>
    </div>
  );
}

export default Downloading;
