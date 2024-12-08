import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h1 className="fs-2 mb-5">Believe wholeheartedly</h1>
          <h2 className="fs-4">Built on Trust, Focused on You</h2>
          <p className="text-muted">
            Our aim is to build your trust and become your preferred investment platform.
          </p>
          <h2 className="fs-4">No Spam, Just Simplicity</h2>
          <p className="text-muted">
            No gimmicks, no spam, no distractions. We’re committed to providing a clean, user-friendly platform.
          </p>
          <h2 className="fs-4">Shaping the Future of Finance</h2>
          <p className="text-muted">
            Our goal is to provide you with innovative financial tools and services to help you reach your financial goals.
          </p>
        </div>
        <div className="col-2"></div> 
        <div className="col-6 mb-5">
          <img src="media/images/19200.jpg" style={{ width: "90%" }} alt="Finance Future" />
          <div className="text-center mt-4">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
