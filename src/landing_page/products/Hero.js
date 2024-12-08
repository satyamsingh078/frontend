import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Welcome to TradeMate</h1>
        <h3 className="text-muted mt-3 fs-4">
          Your gateway to simple and intuitive investing
        </h3>
        <p className="mt-3 mb-5">
          Explore our{" "}
          <a href="/features" style={{ textDecoration: "none" }}>
            cutting-edge features{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
