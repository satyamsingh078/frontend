import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2024, TradeMate Inc. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About Us</a>
            <br />
            <a href="">Our Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Support</a>
            <br />
          </div>
          <div className="col">
            <p>Contact</p>
            <a href="">Help Center</a>
            <br />
            <a href="">TradeMate Blog</a>
            <br />
            <a href="">List of Fees</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Create an Account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">Investment challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
