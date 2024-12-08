import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Dashboard"
        productDescription="Our ultra-fast flagship trading platform that offers seamless market data, intuitive charts, and a user-friendly interface. Experience trading at your fingertips."
        tryDemo="#"
        learnMore="#"
      />
      <RightSection
        imageURL="media/images/account.jpg"
        productName="Account Overview"
        productDescription="Get a complete view of your investments and trades. Our dashboard provides you with clear insights and analytics to help you make informed decisions."
        learnMore="#"
      />
      <LeftSection
        imageURL="media/images/tradeoption.jpg"
        productName="Investment Options"
        productDescription="Explore a variety of investment options with our easy-to-use platform. Experience a streamlined investment process with direct mutual funds, tailored to your needs."
        tryDemo="#"
        learnMore="#"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="TradeMate API"
        productDescription="Unlock the potential of our trading APIs to create robust applications. Perfect for startups looking to build innovative investment solutions for their clients."
        learnMore="#"
      />
      <LeftSection
        imageURL="media/images/hubeducation.jpg"
        productName="Education Hub"
        productDescription="Access a comprehensive collection of stock market lessons designed for all levels of investors. Learn at your own pace with bite-sized lessons and interactive content."
        tryDemo="#"
        learnMore="#"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out our blog for updates and insights.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;
