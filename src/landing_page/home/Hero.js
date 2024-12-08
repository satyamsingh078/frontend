import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <img
          src="media/images/homepage.webp"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in a world of opportunities</h1>
        <p>
         An all-in-one platform to grow your wealth with equities, bonds, ETFs, cryptocurrencies, and beyond.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
