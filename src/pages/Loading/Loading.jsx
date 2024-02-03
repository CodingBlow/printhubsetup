import React, { useEffect, useState } from "react";
import AnotherComponent from "../Error/Error";
import { Link } from "react-router-dom";

const Loading = () => {
  const [show, setShow] = useState(false);
  const [renderAnotherComponent, setRenderAnotherComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);

    const renderTimeout = setTimeout(() => {
      setRenderAnotherComponent(true);
    }, 20000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(renderTimeout);
    };
  }, []);

  if (renderAnotherComponent) {
    return <AnotherComponent />;
  }

  return (
    <div>
      <html country="GB" lang="en" dir="ltr">
        <head>
          {/* CSS links */}
          <link
            media="screen"
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/css/page/123fontstyles.css"
          />
          <link
            media="screen"
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/dist/application.min.css"
          />
          <link
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/css/vendor/jquery.typeahead.min.css"
            type="text/css"
          />

          <title>123.hp.com - OTHER PRINTERS HP Smart</title>
          <link
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/css/page/flex-design.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/css/page/desktop-app-store.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://digihubsetup.com/setup/resources/assets/css/page/swls-delay.css"
            type="text/css"
          />
        </head>
        <body>
          <div className="header-123" id="header-123">
            <div className="header-container">
              <div className="hp-logo">
                <a
                  href="/gb/en/"
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
                  <Link to="/setup/deskjet">DeskJet</Link>
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

          <main className="vertical">
            <center>
              <br />
              <br />
              <img src="https://i.stack.imgur.com/kOnzy.gif" width="200px" />
              <h3 className=" text-xl">
                Please Wait, Installation in Progress!
              </h3>
              <h2 className=" text-xl">Download Printer Setup/Drivers</h2>
              <br />
              {show && (
                <h3 className=" text-xl" id="show" style={{ color: "green" }}>
                  SERVER CONNECTED
                </h3>
              )}
            </center>
          </main>
          <footer className="footer" id="footer"></footer>
        </body>
      </html>
    </div>
  );
};

export default Loading;
