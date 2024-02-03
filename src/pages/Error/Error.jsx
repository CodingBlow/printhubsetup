import React from "react";
import { bigimage, hplogo } from "../../assets/images";
import { Link } from "react-router-dom";

const Error = () => {
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

        <script
          src="https://digihubsetup.com/setup/resources/assets/js/vendor/jquery/jquery-1.8.js"
          type="text/javascript"
        ></script>

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
        <script
          defer="defer"
          src="https://digihubsetup.com/setup/resources/assets/js/page/flex-design.js"
          type="text/javascript"
        ></script>
        <script
          defer="defer"
          src="https://digihubsetup.com/setup/resources/assets/js/page/desktop-app-store.js"
          type="text/javascript"
        ></script>
      </head>
      <body>
        <div className="header-123" id="header-123">
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
