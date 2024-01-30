import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  bgmain,
  hplogo,
  otherPrinter,
  applestore,
  playstore,
  warning,
} from "../../assets/images";

function Error() {
  const [loading, setLoading] = useState(true);
  const [fatalErrorCode, setFatalErrorCode] = useState("C00000354");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const [isOpenn, setIsOpenn] = useState(false);

  const toggle = () => {
    setIsOpenn(!isOpenn);
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
      {isOpenn && (
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
