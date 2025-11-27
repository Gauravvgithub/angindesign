import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";

var bnrimg = require("./../../images/services/commercial/banner.webp");
var bgimg1 = require("./../../images/services/commercial/bg1.webp");
var bgimg2 = require("./../../images/services/commercial/bg2.webp");

class Commercial extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Commercial Interior Design"
            pagename="Commercial Interior Design"
            description="We provide innovative commercial interior design solutions tailored to your business needs."
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
                          <NavLink to={"/services/office"}>Office</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/restaurant"}>
                            Restaurant
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/salon"}>Salon</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/bar"}>Bar</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/consultancy"}>
                            Consultancy
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
                        Commercial Interior Design Services in Delhi, NCR
                      </h1>
                      <p>
                        It's not easy to run a business. You deal with
                        everything at once: customers, employees, duties, and
                        deadlines. Even though the design of your workspace is
                        very important to how people feel when they walk in, it
                        often gets overlooked in the middle of all this.
                      </p>
                      <p>
                        Our <b> commercial interior design services </b>at{" "}
                        <b>Ang InDesign</b> are all about making your business
                        look Design are all about making your business look
                        professional, trustworthy, and welcoming without being
                        too complicated or overwhelming. We know that a business
                        space needs to look nice, but it also needs to work well
                        every day.
                      </p>
                      <p>
                        We have a simple goal: &nbsp;
                        <b>
                          <i>
                            To create a space that helps your business grow,
                            keeps your customers happy, and keeps your team
                            motivated.
                          </i>
                        </b>
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Design That Understands Your Business, Not Just Your
                          Floor Plan
                        </h2>
                        <p>
                          There is no one-size-fits-all for businesses. Display
                          areas that catch people's attention are important for
                          a store. An office needs to be a calm and productive
                          place. A restaurant needs to have the right mood and
                          flow. A clinic needs to be clean, trustworthy, and
                          comfortable.
                        </p>
                        <p>This is why we don't just follow trends.</p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            We design based on what your business needs:
                            <li>
                              <NavLink>
                                What types of customers do you work with?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                What kind of brand identity do you want to get
                                across?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                How your employees do their jobs?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                How your space works during the day?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                What are your time and money limits?
                              </NavLink>
                            </li>
                          </ul>
                        </p>
                        <p>
                          <i>
                            "It's not enough for a business to look good; it
                            also needs to be easy to run."
                          </i>
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Commercial Interior Design Services Include
                        </h2>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Office Interior Design
                          </h3>
                          <p>
                            An office should feel like a place where ideas come
                            and go easily.
                          </p>
                          <p>
                            We make work environments that lower stress, help
                            people stay focused, and make your team feel
                            important.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  Layouts that are good for your health
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Planning smart spaces</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable workstations</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Meeting rooms that get people thinking
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Quiet areas for breaks</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Branding elements that make you look
                                  professional
                                </NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            A well-designed office not only looks good, but it
                            also helps people get more done.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Retail Store Interior Design
                          </h3>
                          <p>First impressions are very important in retail.</p>
                          <p>
                            When customers walk in, they should feel like they
                            are connected to your brand right away.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We create stores that make shopping fun and hard
                              to resist:
                              <li>
                                <NavLink>
                                  Areas for displaying products that look good
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Smooth flow of customers</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Lighting that makes the best stand out
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Layouts that are clean and modern
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Colours and textures that are consistent with
                                  the brand
                                </NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Good design brings in more customers, makes them
                            more likely to buy, and makes their experience
                            better.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Restaurant & Café Interior Design
                          </h3>
                          <p>
                            The atmosphere is just as important as the food at a
                            restaurant.
                          </p>
                          <p>
                            The right lighting, seating arrangement, and visual
                            story can make people who just stop by become
                            regular customers.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make restaurants and cafes that are cosy,
                              memorable, and great for Instagram:
                              <li>
                                <NavLink>
                                  Comfortable seating arrangements
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Lighting that makes you feel welcome
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Interiors that change with your mood
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Layouts for clean kitchens</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Branding corners that look good
                                </NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            People should want to come back to your space over
                            and over again.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Clinic & Healthcare Interior Design
                          </h3>
                          <p>
                            It should feel safe to go to a clinic. Neat. Simple
                            to get around.
                          </p>
                          <p>
                            Patients often come in feeling anxious, and design
                            can help calm them down.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make healthcare spaces that look professional
                              but also feel cosy:
                              <li>
                                <NavLink>Well-organised layouts</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Colours that make you feel calm
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Clean materials</NavLink>
                              </li>
                              <li>
                                <NavLink>Waiting in comfortable areas</NavLink>
                              </li>
                              <li>
                                <NavLink>Lighting that calms</NavLink>
                              </li>
                              <li>
                                <NavLink>Clean branding</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            A well-designed clinic makes patients feel more at
                            ease and improves their overall experience.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Hotel and Hospitality Interiors
                          </h3>
                          <p>
                            Hotels and other places that serve food and drink
                            need to be both comfortable and luxurious.
                          </p>
                          <p>
                            From the moment guests walk in, our interiors are
                            stylish, welcoming, and long-lasting, and they feel
                            warm and high-end.
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Simple, Honest Design Process
                        </h2>
                        <p>
                          It can be stressful to design a business space. That's
                          why we make it easy.
                        </p>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: Get to know your business
                          </h3>
                          <p>
                            We sit down with you and talk about your business
                            needs, style preferences, customer flow, and brand
                            vision.
                          </p>
                          <p>No tech talk, just knowing what you want.</p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: Idea and Picture
                          </h3>
                          <p>
                            We make mood boards, layout choices, and visual
                            ideas.
                          </p>
                          <p>
                            This helps you get a clear picture of your space
                            before you start working.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: Build and do
                          </h3>
                          <p>
                            Our skilled team takes care of flooring, lighting,
                            carpentry, painting, furniture, MEP, branding, and
                            putting things together.
                          </p>
                          <p>
                            We keep the site neat and make sure everyone can see
                            what's going on.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: Last Touches
                          </h3>
                          <p>
                            This is where everything comes to life: the decor,
                            the placement of the furniture, the lighting
                            changes, the signs, the brand elements, and the
                            final touch.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why Companies Rely on Our Commercial Interior Design
                        Services
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We think about comfort and usefulness when we
                                  design.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We have more than 20 years of experience in
                                  design.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We are honest and clear when we talk to each
                                  other.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>We respect your deadlines.</NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>We know how to brand</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We find a balance between beauty and
                                  usefulness.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  {" "}
                                  We make places that help businesses get
                                  bigger.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          Your business space shouldn't just look nice; it
                          should also be useful.
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
                              What do your commercial interior design services
                              include?
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
                              We do everything, from planning the space and
                              designing the layout to choosing the furniture,
                              lighting, materials, carpentry, MEP, and final
                              decor. We take care of the whole project from
                              start to finish.
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
                              How long does it take to do a commercial interior
                              project?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It depends on how big and complicated your space
                              is.
                            </p>
                            <p>It can take 4 to 10 weeks to get an office.</p>
                            <p>6 to 12 weeks for restaurants.</p>
                            <p>3 to 8 weeks for retail stores.</p>
                            <p>
                              Before we start, we agree on a clear timeline.
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
                              Can you work with my budget?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, sir. We change the materials, furniture, and
                              finishes to fit your budget while still making the
                              design look good and work well.
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
                              Do you take care of signs and branding?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes. We use colours, patterns, signs, and other
                              visual elements that fit your brand personality to
                              help you build your brand identity.
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
                              Do you offer commercial interior design services
                              all over the world?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, sir. We work with clients all over the world
                              by coordinating remotely, making digital plans,
                              and giving them detailed instructions on how to
                              carry them out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel sx-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseSix5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              Will the design get in the way of my current
                              business?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              We plan to work in stages, keep the site clean,
                              and coordinate our schedules to keep things
                              running smoothly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are you ready to make your business space better?
                  </h2>
                  <p>
                    We're here to help you find a commercial space that feels
                    professional, welcoming, and in line with your brand. We'll
                    do it with honesty, clarity, and a friendly, human touch.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink>Book a Free Design Consultation</NavLink>
                      </li>
                      <li>
                        <NavLink> Get a Custom Quotation</NavLink>
                      </li>
                      <li>
                        <NavLink>Talk to Our Commercial Design Experts</NavLink>
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

export default Commercial;
