import React, { useState } from "react";
import { Link } from "react-router-dom";
import { printer } from "../../assets/images";

function Banner() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Div */}
        <div className="flex-1 bg-lightBlue p-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            ALL IN ONE PRINTER
          </h2>
          <p className="py-2 lg:py-5 text-lg lg:text-xl font-bold mb-4">
            How To Setup Wireless Printer <br /> 24 Setup And Printer Setup
            <br /> Printer Scanner Setup
          </p>
          <p className="pt-2 mb-4">
            <span className="text-3xl lg:text-4xl font-bold">
              Having Trouble With Printer?
            </span>
            <br />
            <span className="text-lg lg:text-xl font-bold">
              24X7 Expert Technical support
            </span>
            <br />
            <span className="text-lg lg:text-xl font-bold">
              Chat us to speak with a live support expert
            </span>
          </p>
          <Link
            to="#"
            className="inline-block bg-black p-4 border border-white rounded-lg text-white hover:bg-gray-800 w-max"
          >
            CLICK HERE FOR PRINTER SETUP
          </Link>
        </div>

        {/* Right Div */}
        <div className="flex-1 bg-lightGreen relative">
          <div className="flex items-center justify-center">
            <img
              src={printer}
              alt="Right Image"
              className="w-full max-w-md lg:max-w-full h-auto max-w-300px"
            />
          </div>
          <br />
          <p className="text-xl lg:text-4xl font-bold text-center lg:text-left">
            Call Us: +17050068050
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
