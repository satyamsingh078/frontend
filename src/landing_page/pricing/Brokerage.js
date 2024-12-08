import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade services incur an additional charge of ₹50 + GST per order.
            </li>
            <li>Receive digital contract notes via email for convenience.</li>
            <li>
              Physical contract notes are available upon request for ₹20 each, plus courier charges.
            </li>
            <li>
              NRI accounts (non-PIS) are charged 0.5% or ₹100 per executed order for equity trades (whichever is lower).
            </li>
            <li>
              NRI accounts (PIS) incur a fee of 0.5% or ₹200 per executed order for equity trades (whichever is lower).
            </li>
            <li>
              Orders placed while the account has a debit balance will incur a fee of ₹40 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>Equity Delivery: ₹0 brokerage</li>
            <li>Intraday Trades: ₹10 or 0.03% (whichever is lower)</li>
            <li>Direct Mutual Funds: ₹0 commissions</li>
            <li>Call & Trade: ₹50 + GST per order</li>
            <li>NRI Equity Order (Non-PIS): 0.5% or ₹100 (whichever is lower)</li>
            <li>NRI Equity Order (PIS): 0.5% or ₹200 (whichever is lower)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
