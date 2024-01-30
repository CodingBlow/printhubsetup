import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <FaHeadset />
          </span>
          <p className="text-lightText text-base">24/7 Hours SUPPORT</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <FaTruck />
          </span>
          <p className="text-lightText text-base">Free delivery</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <FiRefreshCw />
          </span>
          <p className="text-lightText text-base">Easy Returns</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <IoMdLock />
          </span>
          <p className="text-lightText text-base">Secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
