import React from "react";
import { Link } from "react-router-dom";

const Setup = () => {
  const goToPage = () => {
    window.location.href = "/setup/downloading";
  };

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

        <title>123.hp.com - Printer setup from the HP® Official site</title>
        <link
          rel="stylesheet"
          href="https://digihubsetup.com/setup/resources/assets/css/page/index.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://digihubsetup.com/setup/resources/assets/css/vendor/owlCarousel/owl.carousel.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://digihubsetup.com/setup/resources/assets/css/vendor/owlCarousel/owl.theme.default.css"
          type="text/css"
        />
      </head>
      <body>
        <div class="header-123" id="header-123">
          <div class="header-container">
            <div class="hp-logo">
              <Link
                to="/setup"
                title="123.hp.com - Printer setup from the HP® Official site"
              >
                <img
                  alt="123.hp.com - Printer setup from the HP® Official site"
                  src="https://digihubsetup.com/setup/resources/assets/img/hp-logo.svg"
                />
              </Link>
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
        <div class="grad-back">
          <div>
            <input id="deviceId" type="hidden" value="" />
            <input id="languageDirection" value="ltr" type="hidden" />
            <input
              id="gotoHPUrl"
              value="https://h20180.www2.hp.com/apps/Nav?h_product=known&amp;h_client=S-A-10020-1&amp;h_lang=en&amp;h_cc=gb&amp;h_pagetype=s-002"
              type="hidden"
            />
            <input id="localePath" value="/gb/en" type="hidden" />
            <input
              id="printerSetupUrl"
              value="https://support.hp.com/gb-en/printer-setup"
              type="hidden"
            />
          </div>
          <div id="one23-overlay"></div>
          <div class="page-content">
            <h1 class="page-header">Set up your HP printer</h1>
            <div class="top-content">
              <div class="column content-container">
                <div class="sub-header">
                  Enter your HP product name and model number to get the right
                  HP Smart software and drivers for you
                </div>
                <div id="ljAlertMessage">&nbsp;</div>
                <div id="printerlist-content">
                  <div class="column one">
                    <form action="" id="typeahead-form" name="typeahead-form">
                      <div class="typeahead__container">
                        <div class="typeahead__field">
                          <span class="typeahead__query">
                            <span class="input-cancel"></span>
                            <input
                              autocomplete="off"
                              class="js-typeahead"
                              required="required"
                              spellcheck="false"
                              placeholder='Enter your product name here. For example: "OfficeJet 9010"'
                              title="Please fill in this field."
                              type="search"
                            />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="column two">
                    <button onClick={goToPage} type="submit" class="btn">
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div class="column image-container">
                <img
                  alt="printer"
                  class="welcome-selected-printer"
                  id="printers-image"
                  src="https://digihubsetup.com/setup/resources/assets/img/defaultPrinterSetup.png"
                />
              </div>
            </div>
            <div class="main-copy-1" id="copy1">
              Install HP Smart software and drivers on each mobile device or
              computer that you want to print from. Add the printer on the new
              device.
            </div>
            <div class="main-copy-2" id="copy2">
              Need additional help with set-up? Visit{" "}
              <a href="https://tawk.to/chat/65be18d78d261e1b5f5bf30e/1hln923ec">
                HP Support
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Setup;
