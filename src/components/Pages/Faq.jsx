import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/17.jpg");

class Faq extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Common Frequently Asked Questions | ANG Indesign</title>
          <meta
            name="description"
            content="Get clear answers to common questions about interior design services in Delhi by ANG Indesign. Learn how we plan, design and upgrade your home or office."
          />
          <meta
            name="keywords"
            content="interior design faqs, common interior design questions, ang indesign faqs, ang indesign services questions"
          />
          <meta name="author" content="ANG Indesign" />
          <meta name="copyright" content="ANG Indesign" />
          <meta name="robots" content="index, follow" />

          {/* <!-- Canonical URL --> */}
          <link rel="canonical" href="https://angindesign.com/faq" />

          {/* <!-- Open Graph (OG) Tags --> */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANG Indesign" />
          <meta property="og:url" content="https://angindesign.com/faq" />
          <meta
            property="og:title"
            content="Common Interior Design FAQs | ANG Indesign"
          />
          <meta
            property="og:description"
            content="Explore frequently asked questions about interior design services with helpful answers for your home or office with ANG Indesign."
          />
          <meta
            property="og:image"
            content="https://angindesign.com/assets/17-CqTj-hl6.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Frequently Asked Questions"
            pagename="Faq"
            description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
            bgimage={bnrimg}
          />
          {/* SECTION CONTENTG START */}
          <div className="section-full p-t80 p-b80 inner-page-padding">
            <div className="container">
              <div className="faq-1">
                {/* TITLE START */}
                <div className="section-head">
                  <div className="sx-separator-outer separator-left">
                    <div
                      className="sx-separator bg-white bg-moving bg-repeat-x"
                      style={{
                        backgroundImage:
                          "url(images/background/cross-line2.png)",
                      }}
                    >
                      <h3 className="sep-line-one">FAQ</h3>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <div className="row">
                  <div className="col-md-6 faq-list">
                    {/* Accordian */}
                    {/* <div>
                      <h4>How do we work?</h4>
                      <p>
                        Progressively generate synergistic total linkage through
                        cross media are intellectual capital. Enthusiastically
                        parallel task team building e-tailers without standards
                        compliant initiatives. Progressively monetize client
                        cent outsourcing with excellent communities..
                      </p>
                    </div> */}
                    <div>
                      <h4>Let's Make Your Space</h4>
                      <p>
                        We're here to help if you need a designer who listens,
                        makes clear plans, and takes care of the work.
                      </p>
                      <p>
                        <ul className="list-angle-right anchor-line">
                          <li>
                            <NavLink to="/contact-us">
                              Schedule a Free Consultation
                            </NavLink>
                          </li>

                          <li>
                            <NavLink> Tell Us What You Need</NavLink>
                          </li>
                          <li>
                            <NavLink> Talk to Our Design Team Today</NavLink>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Accordian */}
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
                        <div
                          id="collapseOne5"
                          className="acod-body collapse show"
                        >
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
                              Of course, we suggest materials and solutions
                              based on your budget.
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
                              Do you take care of whole projects from start to
                              finish?
                              <span className="indicator">
                                <i className="fa fa-plus" />
                              </span>
                            </a>
                          </h4>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we take care of everything, from design to
                              the last touch.
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
                              There are many places, such as homes, offices,
                              cafes, salons, restaurants, hotels, and more.
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
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}
        </div>

        <Footer />
      </>
    );
  }
}

export default Faq;
