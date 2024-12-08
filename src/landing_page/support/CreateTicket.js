import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">Create Ticket Select a relevant topic to get started:</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Management
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reset Password
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Track Account Status
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Update Account Details
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> General Support
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            FAQs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Contact Support
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Feedback & Suggestions
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
