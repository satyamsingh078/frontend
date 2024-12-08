import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Transparent pricing for your trading journey.
        </h3>
      </div>
      <div className="row p-4 mb-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/zeroval.jpeg" alt="Free Equity Delivery" />
          <h1 className="fs-3">Zero Brokerage on Equity Delivery</h1>
          <p className="text-muted">
            Enjoy commission-free equity delivery investments — ₹0 brokerage on NSE and BSE trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/tenval.jpeg" alt="Intraday and F&O Trades" />
          <h1 className="fs-3">Affordable Intraday and F&O Trades</h1>
          <p className="text-muted">
            Pay a flat fee of ₹10 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodities.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/zeroval.jpeg" alt="Free Direct Mutual Funds" />
          <h1 className="fs-3">No Commissions on Direct Mutual Funds</h1>
          <p className="text-muted">
            Invest in direct mutual funds with zero commissions and no DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
