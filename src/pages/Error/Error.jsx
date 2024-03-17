import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bigimage, hplogo } from "../../assets/images";

const Error = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    // Function to handle "Esc" key press event
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        // "Esc" key is pressed
        setShowNavigation(!showNavigation); // Toggle navigation visibility
      }
    };

    // Add event listener for "Esc" key press
    document.addEventListener("keydown", handleEscKeyPress);

    // Clean up function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [showNavigation]); // Re-run effect whenever showNavigation state changes

  useEffect(() => {
    // Enter fullscreen mode when component mounts
    const enterFullscreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    };

    enterFullscreen();

    // Exit fullscreen mode when component unmounts
    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, []);

  return (
    <html country="GB" lang="en" dir="ltr">
      <head>
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta content="hpi" name="company_code" />
        <meta content="IPG" name="bu" />
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        <meta
          name="description"
          content="Welcome to the HP® Official website to setup your printer. Get started with your new printer by downloading the software. You will be able to connect the printer to a network and print across devices."
        />
        <meta content="hpexpnontridion" name="hp_design_version" />
        <meta
          content="hp drivers, hp driver, hp downloads, hp download drivers, hp printer drivers, hp printers drivers, hp scanner drivers, hp printer driver, hp print drivers, hp printer drivers download"
          name="keywords"
        />
        <meta content="support.drivers" name="lifecycle" />
        <meta content="Solutions" name="page_content" />
        <meta content="follow, index" name="robots" />
        <meta content="Segment Neutral" name="segment" />
        <meta name="target_country" content="gb" />
        <meta content=" R11849 " name="web_section_id" />
        <meta content="True" name="HandheldFriendly" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <div
          className={`header-123 ${showNavigation ? "" : "hide-navigation"}`}
          id="header-123"
        >
          <div className="header-container">
            <div className="hp-logo">
              <a
                href=".//"
                title="123.hp.com - Printer setup from the HP® Official site"
              >
                <img
                  alt="123.hp.com - Printer setup from the HP® Official site"
                  src="https://digihubsetup.com/setup/resources/assets/img/hp-logo.svg"
                />
              </a>
            </div>
            <ul className="header-menu">
              <li>
                <Link to="/setup/officejet">OfficeJet</Link>
              </li>
              <li>
                <Link to="/setup/officejet">DeskJet</Link>
              </li>
              <li>
                <Link to="/setup/envy">ENVY</Link>
              </li>
              <li>
                <Link to="/setup/laserjet">LaserJet</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="one23-overlay"></div>

        <main className="vertical">
          <center>
            <br />
            <br />
            <img src={bigimage} style={{ maxWidth: "55%" }} />

            <a
              href="https://tawk.to/chat/65be18d78d261e1b5f5bf30e/1hln923ec"
              className="font-bold text-2xl bg-yellow-300 py-1 px-5 rounded-lg"
            >
              Live Chat Now
            </a>
          </center>
        </main>
      </body>
    </html>
  );
};

export default Error;
