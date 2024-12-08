import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">TradeMate</h4>
          <h6>Founders</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            TradeMate was founded by a passionate team of two, committed to solving the frustrations faced by new investors complicated tools, hidden fees, and overwhelming information. Together, we set out to create a platform that focuses on simplicity, transparency, and putting users first.
          </p>
          <p>
            When we’re not building TradeMate, we’re both deeply passionate about technology, finance, and developing products that truly make a difference in people’s lives.
          </p>
          <p>
            Connect with us on <a href="">LinkedIn</a> / <a href="">Instagram</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
