import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="HP DeskJet 4152e Wireless Inkjet Color All-in-One Printer"
          price="450.00"
          badge={true}
          catagory={"HP Printer, Laserjet Printer"}
          color={"White LaserJet Printer"}
          des="The HP LaserJet Pro 4001dw is a single-function, monochrome printer designed to meet the demands of work teams with up to 10 users. With its wireless high-speed capabilities and smart features, this printer is built to thrive in demanding environments. Experience efficiency and productivity without the need for warm-up time, as the printer is always ready to go."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="HP Laserjet Pro M402n Wired Single-Function Monochrome Laser Printer"
          price="540.00"
          color="White LaserJet Printer"
          badge={false}
          des="The HP LaserJet Pro M402n is a single-function, monochrome laser printer designed to provide secure and fast printing of documents. With its impressive print speed of 40 pages per minute and a resolution of 600 x 600 dpi, it delivers sharp prints quickly. The first print out time of 5.6 seconds ensures minimal waiting time for your printing tasks."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Compact, Wired, Color Inkjet Printer for Home Office: HP Deskjet 1255"
          price="100.00"
          color="White InkJet Printer"
          badge={true}
          des="Experience the world of limitless possibilities with the Android device, an advanced operating system designed to bring power and versatility to your fingertips. With its user-friendly interface and extensive range of features, this device is your gateway to a seamless and immersive digital experience.
          Operating System Designed for You: Powered by Android, this device offers a robust and intuitive operating system that caters to your needs. With a sleek interface and seamless navigation, you can easily access your favorite apps, customize your device, and stay connected to the digital world.
          
          "
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="HP LaserJet Enterprise P3015DN Printer (CE528A)"
          price="220.00"
          color="White LaserJet Printer"
          badge={false}
          des="This Certified Refurbished product has undergone a rigorous refurbishing process to ensure it looks and works like new. Each printer has been tested for functionality, undergone basic cleaning, inspection, and repackaging. It comes with all relevant accessories and a minimum 90-day warranty for your peace of mind.
          At HP, we take pride in refurbishing our products to meet the highest quality standards. We replace all parts and consumables to ensure optimal performance and eliminate any potential issues such as paper jams. Our technicians thoroughly test each machine and replace necessary components such as pickup rollers, separation rollers, MP pickup rollers, separation pads, transfer rollers, fuser film, and pressure rollers. We then field test all the mechanics and electronics to ensure reliable operation."
        />
      </div>
    </div>
  );
};

export default BestSellers;
