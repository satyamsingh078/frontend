import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>TradeMate Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Find answers or browse help topics to create a support ticket
          </h1>
          <input 
            type="text" 
            placeholder="E.g., How do I activate F&O?" 
            className="form-control mb-3" 
          />
          <div className="mb-2">
            <a href="#" className="me-3">Track Account Opening</a>
            <a href="#" className="me-3">Track Segment Activation</a>
            <a href="#" className="me-3">Intraday Margins</a>
            <a href="#">Kite User Manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured Articles</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday Leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
