import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a TradeMate account</h1>
        <p>
         Start investing with zero capital, enjoy simple platforms, and pay just ₹10 for intraday and F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
