import React from "react";
import { NavLink } from "react-router-dom";

const Thankyou1 = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container text-center p-4">
        {/* Heading Section */}
        <h1 className="display-5 fw-bold text-dark mb-3">
          Thank You for Reaching Out!
        </h1>

        <p className="lead text-secondary mb-4">
          We have received your message. Our team will get back to you shortly.
        </p>

        {/* Back to Home */}

        <div className="text-center">
          <button type="button" className="site-button btn-half">
            <span>
              {" "}
              <NavLink to="/">
                Go Back to Home
              </NavLink>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou1;
