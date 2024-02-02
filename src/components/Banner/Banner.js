import React, { useState } from "react";
import { Link } from "react-router-dom";
import { printer, bgmain } from "../../assets/images";

function Banner() {
  return (
    <div
      className="relative bg-cover"
      style={{ backgroundImage: `url(${bgmain})` }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-lightBlue p-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            ALL IN ONE PRINTER
          </h2>
          <p className="py-2 lg:py-5 text-lg lg:text-xl font-bold mb-4">
            How To Setup Wireless Printer <br /> 123 Setup And Printer Setup
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
          <a href="https://setup-seven.vercel.app/"
            className="inline-block bg-black p-4 border border-white rounded-lg text-white hover:bg-gray-800 w-max"
          >
            CLICK HERE FOR PRINTER SETUP
          </a>
        </div>

        {/* Right Div */}
        <div className="flex-1 bg-lightGreen relative">
          <div className="flex items-center justify-center">
            <img
              src={printer}
              alt="Right Image"
              className="lg:w-3/4 xl:w-4/5"
              style={{ width: "500px" }}
            />
          </div>
          <br />
          <p className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
            {/* Contact Number */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
