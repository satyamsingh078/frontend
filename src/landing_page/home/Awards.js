import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 p-5">
          <img src="media/images/badge.jpg" alt="Award Badge" />
        </div>
        <div className="col-2"></div> {/* Added a gap similar to Pricing and Stats */}
        <div className="col-6 p-4 mt-4">
          <h1>Leading Investment Platform</h1>
          <p className="mb-5">
            TradeMate empowers millions of users to take control of their financial future by investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Equities & ETFs</p>
                </li>
                <li>
                  <p>Cryptocurrencies</p>
                </li>
                <li>
                  <p>Bonds & Fixed Income</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Mutual Funds</p>
                </li>
                <li>
                  <p>Commodities</p>
                </li>
                <li>
                  <p>Real Estate Investments</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} alt="Press Logos" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
