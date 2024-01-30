import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bgmain, hplogo, printersetup } from "../../assets/images";

function Setup() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
        <button onClick={toggleNav} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Conditional rendering of the responsive navbar */}
      {isNavOpen && (
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
        className="bg-cover relative flex flex-col lg:flex-row"
        style={{
          backgroundImage: `url(${bgmain})`,
          minHeight: "300px",
        }}
      >
        <div
          className="bg-cover relative"
          style={{
            backgroundImage: `url(${bgmain})`,
            minHeight: "300px",
          }}
        >
          <div className="text-black p-8 flex">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Set up your HP printer
              </h1>
              <p className="text-lg lg:text-xl mb-4 py-5">
                Enter your HP product name and model number to get the right HP
                Smart
                <br /> software and drivers for you.
              </p>

              {/* Input and Button */}
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="e.g. DeskJet 69478"
                  className="w-full lg:w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <Link
                  to="/setup/downloading"
                  className="block lg:inline-block bg-black text-white p-2 rounded-md ml-2 hover:bg-gray-700 duration-300"
                >
                  Next
                </Link>
              </div>
            </div>
            <div>
              <img
                src={printersetup}
                alt="Printer Setup"
                className="lg:w-3/4 xl:w-4/5"
                style={{ width: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-lg lg:text-xl py-5 px-6">
        Install HP Smart software and drivers on each mobile device or computer
        that you want to print from.
        <br /> Add the printer on the new device. <br />
        <p className="py-10">
          Need additional help with set-up?{" "}
          <a href="#" className="text-blue-500">
            Visit HP Support.
          </a>
        </p>
      </p>
    </div>
  );
}

export default Setup;
