import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/services/consultancy/banner.webp");
var bgimg1 = require("./../../images/services/consultancy/bg1.webp");
var bgimg2 = require("./../../images/services/consultancy/bg2.webp");

class Consultancy extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Interior Design Consultancy in Delhi | ANG InDesign</title>
          <meta
            name="description"
            content="Professional interior design consultancy for planning, concepts, materials and complete project guidance. Expert help for all design needs."
          />
          {/* <link rel="canonical" href="https://angindesign.vercel.app/services/consultancy"> */}
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Consultancy Interior Design"
            pagename="Consultancy Interior Design"
            description="Creating inspiring consultancy interiors that foster innovation and collaboration."
            bgimage={bnrimg}
          />
          {/* SECTION CONTENT START */}
          <div className="section-full p-t80 p-b50 mobile-page-padding">
            <div className="container">
              {/* GALLERY CONTENT START */}
              <div className="row">
                <div
                  className="col-lg-4 col-md-12"
                  style={{
                    position: "sticky",
                    top: "120px",
                    alignSelf: "flex-start",
                    height: "fit-content",
                    zIndex: 5,
                  }}
                >
                  <div className="about4-section m-b20 bg-gray p-a20">
                    <div className="widget widget_services">
                      <h4 className="widget-title">More Services</h4>
                      <ul className="bg-white">
                        <li>
                          <NavLink to={"/services/residential"}>
                            Residential
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/commercial"}>
                            Commercial
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/bar"}>Bar</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/office"}>Office</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/salon"}>Salon</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/restaurant"}>
                            Restaurant
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/modular-wooden-work"}>
                            Modular Wooden Work
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                      <NavLink to={"/services-1"} className="btn-block">
                        <span className="text-black m-r10">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                        <strong className="text-uppercase text-black">
                          Download .PDF
                        </strong>
                      </NavLink>
                    </div>
                    <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                      <NavLink to={"/services-1"} className="btn-block">
                        <span className="text-black m-r10">
                          <i className="fa fa-file-word-o" />
                        </span>
                        <strong className="text-uppercase text-black">
                          {" "}
                          Download .DOC
                        </strong>
                      </NavLink>
                    </div>
                    <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                      <NavLink to={"/services-1"} className="btn-block">
                        <span className="text-black m-r10">
                          <i className="fa fa-file-powerpoint-o" />
                        </span>
                        <strong className="text-uppercase text-black">
                          Download .PPT
                        </strong>
                      </NavLink>
                    </div> 
                    <div className="about4-content m-t30">
                      <h4>GET 10% OFF TODAY</h4>
                      <p>
                        A Completely Safe and Advanced Cleaning Solution for
                        both Petrol and Diesel Engines
                      </p>
                      <NavLink to={"/services-1"} className="site-button-link">
                        Read More
                      </NavLink>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="section-content">
                    <div className="service-single-block m-b30">
                      <div className="sx-media">
                        <img src={bgimg2} alt="" />
                      </div>
                      <h1
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "38px" }}
                      >
                        Free Interior Design Consultancy
                      </h1>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "18px" }}
                      >
                        <i>
                          Simple, clear guidance from a designer who genuinely
                          wants to help.
                        </i>
                      </h3>
                      <p>
                        Designing a home can feel confusing so many ideas,
                        styles, materials, and decisions. And most people don’t
                        know where to begin. Our{" "}
                        <b> Free Interior Design Consultancy </b> is created to
                        make your first step easy, clear, and stress-free.
                      </p>
                      <p>
                        It’s not a sales meeting.
                        <br />
                        It’s a conversation.
                        <br />A calm, helpful discussion where we understand
                        your space, your lifestyle, and what kind of home you
                        want to build, and then guide you in the simplest way
                        possible.
                      </p>
                      <p>
                        As one of the <b> Best Interior Designers in Delhi </b>,
                        our goal is to make sure you feel confident and informed
                        before you make any big decisions.
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          What You’ll Get in the Consultation
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            1. A Clear Understanding of What You Need
                          </h3>
                          <p>
                            We start by listening to how you live, what you
                            like, what bothers you about your current space, and
                            what you want your home to feel like.
                            <br />
                            This helps us suggest ideas that actually fit your
                            life, not just the floor plan.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            2. Style Direction That Feels Natural to You
                          </h3>
                          <p>
                            If you’re unsure about your style, don’t worry.
                            <br />
                            We help you identify what suits you warm, modern,
                            minimal, soft, luxury, or a blend.
                            <br />
                            The idea is to make your home feel comfortable, not
                            confusing.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            3. Realistic Budget Guidance
                          </h3>

                          <p>
                            Interior design becomes easier when you know where
                            to invest and where to avoid overspending.
                            <br />
                            We break it down clearly so you can plan with
                            confidence.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Practical Tips to Make Rooms Look & Work Better
                          </h3>
                          <p>
                            Small layout changes can make a huge difference.
                            <br />
                            We guide you on space planning, furniture
                            positioning, and storage ideas that make your home
                            feel more open and organized.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Simple Material Advice
                          </h3>
                          <p>
                            We explain materials like plywood, laminates,
                            veneers, and finishes in easy language so you know
                            exactly what you’re choosing and why.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. A Step-by-Step Roadmap For Your Home
                          </h3>
                          <p>
                            Before the call ends, you’ll know the right sequence
                            to follow, what to start with, what to avoid, and
                            how to approach your project smoothly.
                          </p>
                        </div>
                      </div>

                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why People Prefer Our Consultancy
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We speak in simple, clear language.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We don’t rush or push decisions.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We offer honest advice based on lifestyle.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We help you avoid expensive mistakes.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We understand how real homes actually
                                  function.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We design for comfort, not just aesthetics.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We genuinely care about what will work for
                                  you.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          People choose us as one of the{" "}
                          <b> Best Interior Designers in Delhi</b> because our
                          guidance feels real and relatable, not complicated or
                          sales-driven.
                        </p>
                      </div>
                      <div className="sx-media sx-img-effect zoom-slow">
                        <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                          <img src={bgimg1} alt="" />
                          {/* <NavLink
                            to={"#"}
                            className="play-now"
                            data-toggle="modal"
                            data-target="#myModal6"
                          >
                            <i className="icon fa fa-play" />
                            <span className="ripple" />
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="sx-accordion acc-bg-gray m-b30"
                      id="accordion5"
                    >
                      <div className="panel sx-panel">
                        <div className="acod-head acc-actives">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseOne5"
                              data-parent="#accordion5"
                            >
                              Is the consultancy completely free?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseOne5"
                          className="acod-body collapse show"
                        >
                          <div className="acod-content p-a15">
                            <p>
                              {" "}
                              Yes, there is no charge and no obligation to start
                              a project.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel sx-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseTwo5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              What do I need for the consultation?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Nothing specific. A floor plan helps, but it’s not
                              required.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel sx-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseThree5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              Will you help me understand the budget clearly?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we guide you on realistic costing and smart
                              planning.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel sx-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseFour5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              How long is the session?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Usually 25–40 minutes, depending on the number of
                              questions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel sx-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseFive5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              Do I get a proper plan after the call?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we share a clear direction, so you know
                              exactly how to move forward.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Ready for Simple, Helpful Guidance?
                  </h2>
                  <p>
                    If you want to start your interior journey confidently,
                    we’re here to guide you — calmly, clearly, and with genuine
                    care.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink>Book Your Free Consultation</NavLink>
                      </li>
                      <li>
                        <NavLink>Share Your Requirements</NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Talk to a Designer Who Understands You
                        </NavLink>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              {/* GALLERY CONTENT END */}
            </div>
          </div>
          {/* SECTION CONTENT END  */}
        </div>
        <div className="modal fade" id="myModal6" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <ReactPlayer url="https://www.youtube.com/watch?v=Oy2QIiSQT2U" />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Consultancy;
