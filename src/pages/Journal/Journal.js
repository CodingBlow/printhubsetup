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
          <span className="text-primeColor font-semibold text-lg">
            Printer Setup
          </span>{" "}
          <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-black text-white p-4">
              <h1 className="text-3xl font-semibold">
                The Ultimate Guide to Setting Up Your New Printer
              </h1>
              <p className="text-lg">
                Welcome to the world of hassle-free printing!
              </p>
            </header>

            <main className="container mx-auto p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Unboxing and Initial Setup
                </h2>
                <p className="text-gray-700">
                  Dive into the excitement of unboxing your new printer. We'll
                  guide you through the initial steps to get your printer ready
                  for use, ensuring a smooth start to your printing journey.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Connecting to Wi-Fi
                </h2>
                <p className="text-gray-700">
                  Learn how to connect your printer to Wi-Fi for convenient
                  wireless printing. We'll provide insights into securing your
                  connection and troubleshooting common Wi-Fi setup issues.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Installing Printer Drivers
                </h2>
                <p className="text-gray-700">
                  A detailed guide on installing the necessary drivers for your
                  printer to ensure optimal performance. We'll cover driver
                  installation on various operating systems, making the process
                  seamless for everyone.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Old Printer Setup
                </h2>
                <p className="text-gray-700">
                  If you're dealing with an older printer, fear not! We'll
                  provide tips and tricks for setting up and reviving your
                  trusty old printer, ensuring it continues to meet your needs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Troubleshooting Common Printer Issues
                </h2>
                <p className="text-gray-700">
                  Explore solutions to common printer problems, including paper
                  jams, printing errors, and connectivity issues. Our
                  troubleshooting tips will help you address issues promptly.
                </p>
              </section>
            </main>
          </div>
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
