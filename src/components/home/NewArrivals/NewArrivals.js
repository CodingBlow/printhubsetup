import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
  newArrSix,
  newArrSeven,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="HP Laserjet Pro M102w Monochrome Wireless Single-Function Laser Printer"
            price="360.00"
            color="White Laserjet Printers"
            badge={true}
            des="The HP LaserJet Pro M102w is a reliable monochrome laser printer designed to simplify your printing setup. With its compact size and wireless connectivity, it allows for rapid printing of sharp documents, making it an ideal choice for small offices and home use.
            Efficient and Rapid Printing: With print speeds of up to 23 pages per minute, the LaserJet Pro M102w ensures fast and efficient printing. The first print out speed is as quick as 7.3 seconds, allowing you to get your documents in hand promptly. This printer delivers sharp and professional-looking prints with a resolution of up to 1200 dpi, thanks to the FastRes technology."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="HP OfficeJet Pro 6978 All-in-One Wireless Printer, Copier"
            price="350.00"
            color="Black, InkJet Printers, OfficeJet Printers"
            badge={true}
            des="The HP OfficeJet Pro 6978 is a feature-packed color inkjet photo printer designed to meet the demands of your home office or small workgroup. With its versatile functionality, including copy, scan, fax, wireless printing, two-sided duplex printing and scanning, and a color touchscreen, this printer delivers professional-quality results with exceptional convenience.
            Seamless Mobile Printing: Print from your smartphone, tablet, or notebook PC with ease using the HP OfficeJet Pro 6978. Enjoy the flexibility of convenient mobile printing options and a mobile setup that allows you to easily connect and print wherever and whenever you need to. With Ethernet and wireless networking capabilities, you can choose the connection method that suits your preferences."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="HP LaserJet Pro M501dn Monochrome Printer with built-in Ethernet"
            price="660.00"
            color="White Laserjet Printers"
            badge={true}
            des="Experience big results in a small footprint with the HP LaserJet Pro M501dn, a monochrome laser printer designed to deliver exceptional speed and performance. This compact printer consistently produces high-quality documents, ensuring professional-looking results every time.
            With ultra-fast 2-sided printing capabilities and a generous 650-sheet capacity, this LaserJet Pro printer helps eliminate waiting times and efficiently handles high-volume print jobs. You can easily tackle large print tasks without frequent paper replenishment, allowing you to focus on your work."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="HP Color Laserjet Pro M454dn Wired Ethernet Laser Printer"
            price="700.00"
            color="White Laserjet Printers"
            badge={false}
            des="The HP Color LaserJet Pro M454dn is a high-performance printer designed to help you work smarter and achieve success in your business endeavors. With its single-function capability, it focuses solely on providing exceptional print quality, allowing you to dedicate your time to the tasks that matter most.
            Efficiency and Speed: Featuring automatic duplex printing, the HP Color LaserJet Pro M454dn enables effortless double-sided printing, saving you time and reducing paper consumption. With a fast color print speed of 28 pages per minute for letter-size documents, you can handle large printing tasks with ease. The printer’s 600 x 600 dpi print resolution ensures sharp text and documents, making a professional impression every time"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Compact, Wired, Color Inkjet Printer for Home Office: HP Deskjet 1255"
            price="99.00"
            color="White DeskJet Printers, HP Printer, InkJet Printers"
            badge={false}
            des="Experience the world of limitless possibilities with the Android device, an advanced operating system designed to bring power and versatility to your fingertips. With its user-friendly interface and extensive range of features, this device is your gateway to a seamless and immersive digital experience.
            Operating System Designed for You: Powered by Android, this device offers a robust and intuitive operating system that caters to your needs. With a sleek interface and seamless navigation, you can easily access your favorite apps, customize your device, and stay connected to the digital world."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100006"
            img={newArrSix}
            productName="HP LaserJet Enterprise P3015DN Printer (CE528A)"
            price="200.00"
            color="White Laserjet Printers"
            badge={false}
            des="This Certified Refurbished product has undergone a rigorous refurbishing process to ensure it looks and works like new. Each printer has been tested for functionality, undergone basic cleaning, inspection, and repackaging. It comes with all relevant accessories and a minimum 90-day warranty for your peace of mind.
            At HP, we take pride in refurbishing our products to meet the highest quality standards. We replace all parts and consumables to ensure optimal performance and eliminate any potential issues such as paper jams. Our technicians thoroughly test each machine and replace necessary components such as pickup rollers, separation rollers, MP pickup rollers, separation pads, transfer rollers, fuser film, and pressure rollers. We then field test all the mechanics and electronics to ensure reliable operation."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100007"
            img={newArrSeven}
            productName="HP Laserjet Pro M402n Wired Single-Function Monochrome Laser Printer"
            price="560.00"
            color="White Laserjet Printer"
            badge={false}
            des="The HP LaserJet Pro M402n is a single-function, monochrome laser printer designed to provide secure and fast printing of documents. With its impressive print speed of 40 pages per minute and a resolution of 600 x 600 dpi, it delivers sharp prints quickly. The first print out time of 5.6 seconds ensures minimal waiting time for your printing tasks.
            Efficient and Secure Printing: With the LaserJet Pro M402n, you can securely and rapidly produce high-quality documents. Its fast printing speed and sharp resolution ensure efficient document production, allowing you to keep up with demanding workloads."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
