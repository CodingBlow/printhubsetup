import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Print Hub
          </span>{" "}
          <div class="container mx-auto  p-6 bg-white rounded-lg shadow-lg">
            <p class="text-gray-700">
              Welcome to <span class="font-semibold">Print Hub LLC</span>! We
              understand the frustration that comes with printer setup issues
              and fatal errors during the installation of printer drivers. We
              are dedicated to providing effective solutions and exceptional
              customer support to ensure a seamless printing experience for our
              users.
            </p>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4 text-black">Our Mission</h2>
              <p class="text-gray-700">
                Our mission is to simplify the printer setup process and
                eliminate the headaches associated with fatal errors in printer
                driver installations. We strive to empower users with reliable
                solutions, making printing tasks hassle-free and efficient.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4 text-black">
                What Sets Us Apart
              </h2>
              <ul class="list-disc pl-6 text-gray-700">
                <li>
                  <span class="font-semibold">Expert Support:</span> Our team of
                  experienced technicians is ready to assist you 24/7.
                </li>
                <li>
                  <span class="font-semibold">User-Friendly Solutions:</span> We
                  prioritize user experience, ensuring that even non-technical
                  users can set up their printers without complications.
                </li>
                <li>
                  <span class="font-semibold">Innovative Technologies:</span>{" "}
                  Stay ahead with our technologies that streamline the printer
                  setup process and enhance overall performance.
                </li>
              </ul>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold mb-4 text-black">Contact Us</h2>
              <p class="text-gray-700">
                Don't let printer issues disrupt your workflow. Reach out to us
                for prompt assistance:
              </p>

              <ul class="list-disc pl-6 text-gray-700">
                <li>
                  <span class="font-semibold">
                    24/7 Toll-Free Support (USA/Canada):
                  </span>{" "}
                  +8379483954785
                </li>
                <li>
                  <span class="font-semibold">Live Chat:</span> Connect with our
                  customer support team via live chat on our website.
                </li>
              </ul>
            </div>

            <p class="mt-8 text-gray-700">
              Join us on this journey to revolutionize the way you approach
              printer setup and driver installations. At{" "}
              <span class="font-semibold">Print Hub LLC</span>, we believe
              in making technology work for you.
            </p>

            <p class="mt-4 text-gray-700">
              <span class="font-semibold">Print Hub LLC</span> - Making
              Printing Simple and Reliable.
            </p>
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

export default About;
