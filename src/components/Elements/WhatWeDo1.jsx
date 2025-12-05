import React from "react";
import { NavLink } from "react-router-dom";

var bgimg1 = require("./../../images/background/bg-5.png");
var bgimg2 = require("./../../images/background/bg-2.webp");
var bgimg3 = require("./../../images/background/cross-line2.png");

class WhatWeDo1 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide"
          style={{ backgroundImage: "url(" + bgimg1 + ")" }}
        >
          <div className="container right-half-bg-image-outer">
            <div
              className="right-half-bg-image bg-parallax bg-fixed bg-top-right"
              data-stellar-background-ratio={0}
              style={{ backgroundImage: "url(" + bgimg2 + ")" }}
            />
            {/* TITLE START */}
            <div className="section-head">
              <div className="sx-separator-outer separator-left">
                <div
                  className="sx-separator bg-white bg-moving bg-repeat-x"
                  style={{ backgroundImage: "url(" + bgimg3 + ")" }}
                >
                  <h3 className="sep-line-one">Whats We do</h3>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="section-content">
              <div className="row number-block-one-outer justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="number-block-one animate-in-to-top">
                    <img
                      src={require("./../../images/pic1.webp")}
                      alt="Modern reception layout by ANG Indesign with desk, seating and plants."
                      style={{ borderRadius: "20px" }}
                    />
                    <div
                      className="figcaption bg-white text-center p-a20"
                      style={{ borderRadius: "20px" }}
                    >
                      <h4 className="m-a0">Floor Plan</h4>
                    </div>
                    <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                      <span>01</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="number-block-one animate-in-to-top">
                    <img
                      src={require("./../../images/pic2.webp")}
                      alt="Warm, modern living room sketch with cozy seating and natural light."
                      style={{ borderRadius: "20px" }}
                    />
                    <div
                      className="figcaption bg-white text-center p-a20"
                      style={{ borderRadius: "20px" }}
                    >
                      <h4 className="m-a0">Architecture</h4>
                    </div>
                    <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                      <span>02</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="number-block-one animate-in-to-top">
                    <img
                      src={require("./../../images/pic3.webp")}
                      alt="Modern cozy living room with warm lighting, wooden decor and an L-shaped sofa."
                      style={{ borderRadius: "20px" }}
                    />
                    <div
                      className="figcaption bg-white text-center p-a20"
                      style={{ borderRadius: "20px" }}
                    >
                      <h4 className="m-a0">Interior Design</h4>
                    </div>
                    <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="large-title-block full-content bg-gray">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="large-title">
                      <h3 className="m-tb0">
                        <p> Free Consultancy</p>
                        <span style={{ fontSize: "32px" }}>
                          Plan and Come Up With Ideas
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12	col-sm-12">
                    <div className="large-title-info">
                      <p>
                        A short, helpful talk in which we help you with style,
                        budget, and planning.
                      </p>
                      <div className="text-left">
                        <NavLink
                          to={"/contact-us"}
                          className="site-button-link"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sx-accordion acc-bg-gray" id="accordion5">
              <div className="panel sx-panel">
                <div className="acod-head acc-actives">
                  <h4 className="acod-title">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne5"
                      data-parent="#accordion5"
                    >
                      Do you make 3D designs?
                      <span className="indicator">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div id="collapseOne5" className="acod-body collapse show">
                  <div className="acod-content p-a15">
                    <p>Yes, we can show you everything in 3D.</p>
                  </div>
                </div>
              </div>
              <div className="panel sx-panel">
                <div className="acod-head">
                  <h4 className="acod-title">
                    <a
                      data-toggle="collapse"
                      href="#collapseTwo5"
                      className="collapsed"
                      data-parent="#accordion5"
                    >
                      Can you work within my budget?
                      <span className="indicator">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo5" className="acod-body collapse">
                  <div className="acod-content p-a15">
                    <p>
                      Of course, we suggest materials and solutions based on
                      your budget.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel sx-panel">
                <div className="acod-head">
                  <h4 className="acod-title">
                    <a
                      data-toggle="collapse"
                      href="#collapseThree5"
                      className="collapsed"
                      data-parent="#accordion5"
                    >
                      Do you take care of whole projects from start to finish?
                      <span className="indicator">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div id="collapseThree5" className="acod-body collapse">
                  <div className="acod-content p-a15">
                    <p>
                      Yes, we take care of everything, from design to the last
                      touch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel sx-panel">
                <div className="acod-head">
                  <h4 className="acod-title">
                    <a
                      data-toggle="collapse"
                      href="#collapseFour5"
                      className="collapsed"
                      data-parent="#accordion5"
                    >
                      What kinds of interiors do you work on?
                      <span className="indicator">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div id="collapseFour5" className="acod-body collapse">
                  <div className="acod-content p-a15">
                    <p>
                      There are many places, such as homes, offices, cafes,
                      salons, restaurants, hotels, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel sx-panel">
                <div className="acod-head">
                  <h4 className="acod-title">
                    <a
                      data-toggle="collapse"
                      href="#collapseFive5"
                      className="collapsed"
                      data-parent="#accordion5"
                    >
                      When can we start?
                      <span className="indicator">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                  </h4>
                </div>
                <div id="collapseFive5" className="acod-body collapse">
                  <div className="acod-content p-a15">
                    <p>Right after the first meeting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WhatWeDo1;
