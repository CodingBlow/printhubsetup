import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="HP LaserJet Enterprise P3015DN Printer (CE528A)"
          price="200.00"
          color="White LaserJet Printer"
          badge={true}
          des="This Certified Refurbished product has undergone a rigorous refurbishing process to ensure it looks and works like new. Each printer has been tested for functionality, undergone basic cleaning, inspection, and repackaging. It comes with all relevant accessories and a minimum 90-day warranty for your peace of mind.
          At HP, we take pride in refurbishing our products to meet the highest quality standards. We replace all parts and consumables to ensure optimal performance and eliminate any potential issues such as paper jams. Our technicians thoroughly test each machine and replace necessary components such as pickup rollers, separation rollers, MP pickup rollers, separation pads, transfer rollers, fuser film, and pressure rollers. We then field test all the mechanics and electronics to ensure reliable operation."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="HP OfficeJet Pro 6978 All-in-One Wireless Printer, Copier"
          price="340.00"
          color="black OfficeJet Printer"
          badge={true}
          des="The HP OfficeJet Pro 6978 is a feature-packed color inkjet photo printer designed to meet the demands of your business. With its versatile functions and advanced capabilities, it delivers fast, high-quality prints to enhance productivity and efficiency.
          Multifunctional Performance: Experience the convenience of multiple functions in one device with the OfficeJet Pro 6978. This printer allows you to copy, scan, fax, and perform wireless printing. It also supports two-sided duplex printing and scanning, reducing paper waste and saving time."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="HP Wireless Color All in one Inkjet Printer – NeeGo Printer Cable"
          price="260.00"
          color="Black and White InkJet Printer"
          badge={true}
          des="Experience effortless printing, scanning, and copying with the HP Smart Printer. With its easy setup process guided by the HP Smart app, you’ll be up and running in no time. Print, scan, and copy your everyday documents directly from your phone, regardless of your location. Plus, with the HP+ system and the Smart app, you gain access to advanced features such as mobile fax and multi-item recognition for the next two years.
          Stay Ahead with the HP Smart Printing System: By opting for the optional HP+ system, your printer becomes smarter and more secure. With an HP account, internet connection, and the use of only Original HP Ink, your printer can think ahead, ensuring maximum productivity and readiness whenever you need it. Activate HP+ during printer setup to enjoy these benefits."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="HP DeskJet Wireless Color Inkjet Printer All-in-One with LCD Display"
          price="180.00"
          color="Blue and White DeskJet Printer"
          badge={true}
          des="The HP Tiny All-in-One Printer is the perfect solution for those who need both power and space-saving convenience. As the world’s smallest all-in-one printer for home use, it delivers impressive performance while fitting seamlessly into any room. With HP Scroll Scan technology, you can easily handle a variety of scan jobs, from plain paper to stiff media, making it incredibly versatile.
          Designed to Fit Anywhere: This ultracompact all-in-one printer is designed to fit wherever you need it. Whether it’s on a desk, shelf, or even in a tight corner, its small footprint ensures that it won’t take up valuable space. With its sleek design and head-turning hues, you can showcase your style while enjoying the functionality it offers."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
