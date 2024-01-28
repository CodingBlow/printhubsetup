import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Orebi</span>
          {" "}
         <h2 className=" text-4xl">The Ultimate Guide to Setting Up Your New Printer :</h2> 
          <p className="py-5">
          Welcome to the world of hassle-free printing! In this
          comprehensive guide, we'll walk you through the step-by-step process
          of setting up your new printer for the first time and offer tips on
          dealing with older printer setups.
          </p>
          Unboxing and Initial Setup: Dive into the excitement of unboxing your
          new printer. We'll guide you through the initial steps to get your
          printer ready for use, ensuring a smooth start to your printing
          journey.
          <p className="py-5">
          Connecting to Wi-Fi: Learn how to connect your printer to Wi-Fi for
          convenient wireless printing. We'll provide insights into securing
          your connection and troubleshooting common Wi-Fi setup issues.
          </p>
          Installing Printer Drivers: A detailed guide on installing the
          necessary drivers for your printer to ensure optimal performance.
          We'll cover driver installation on various operating systems, making
          the process seamless for everyone.
          <p className="py-5">
          Old Printer Setup: If you're dealing with an older printer, fear not!
          We'll provide tips and tricks for setting up and reviving your trusty
          old printer, ensuring it continues to meet your needs. Troubleshooting
          Common Printer Issues: Explore solutions to common printer problems,
          including paper jams, printing errors, and connectivity issues. Our
          troubleshooting tips will help you address issues promptly.
        </p>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
