import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row p-4">
        <div className="lg:w-1/2 pr-4">
          <p className="text-xl lg:text-3xl font-semibold mb-4">
            Conduct Diagnosis and Resolve Issues
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Within this troubleshooting hub, you will discover a collection of
            automated and self-service solutions designed to address prevalent
            computer and printer issues. Simply click on the tabs to switch
            between computer and printer topics, and then choose a specific
            problem to access the available solutions.
          </p>
          <Link
            to="/Setup"
            className="text-white bg-black py-2 px-4 rounded-full inline-block"
          >
            Setup Now
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src={saleImgOne}
            alt="Image"
            className="w-full h-auto lg:max-w-md lg:mx-auto"
          />
        </div>
      </div>

      {/* Left Right image */}

      <div className="flex flex-col lg:flex-row">
        {/* Left Image Div with padding */}
        <div className="lg:w-1/2 p-2">
          <img
            className="w-full h-auto max-w-full mx-auto object-cover"
            src={saleImgTwo}
            alt="Left Image"
          />
        </div>

        <div className="lg:w-1/2 p-2">
          <img
            className="w-full h-auto max-w-full mx-auto object-cover"
            src={saleImgThree}
            alt="Right Image"
          />
        </div>
      </div>

      {/* left image right text */}

      <div className="flex flex-col lg:flex-row p-6">
        <div className="lg:w-1/2">
          <img
            src={saleImgOne}
            alt="Image"
            className="w-full h-auto lg:max-w-md lg:mx-auto"
          />
        </div>
        <div className="lg:w-1/2 pr-4">
          <p className="text-xl lg:text-3xl font-semibold mb-4">
            How to setup your printer
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            To access a comprehensive, step-by-step guide on setting up,
            configuring, and registering your printer, simply click on “Printer
            Setup.”
          </p>
          <Link
            to="/Setup"
            className="text-white bg-black py-2 px-4 rounded-full inline-block"
          >
            Click Here for Printer Setup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
