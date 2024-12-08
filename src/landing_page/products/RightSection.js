import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none", color: "#007bff" }}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;