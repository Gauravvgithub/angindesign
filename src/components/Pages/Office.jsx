import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";

var bnrimg = require("./../../images/services/office/banner.webp");
var bgimg1 = require("./../../images/services/office/bg1.webp");
var bgimg2 = require("./../../images/services/office/bg2.webp");

class Office extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Office Interior Design"
            pagename="Office Interior Design"
            description="Creating Professional and Functional Workspaces"
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
                        Office Interior Design Services
                      </h1>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "18px" }}
                      >
                        <i>
                          Provided by the Best Office Interior Designer in Delhi
                        </i>
                      </h3>
                      <p>
                        Choosing furniture and wall décor is just one aspect of
                        office design; another is creating a space where teams
                        work together, ideas flourish, and your company really
                        takes off. Your workspace impacts client perceptions,
                        team morale, employee comfort, productivity, and even
                        the calibre of work produced.
                      </p>
                      <p>
                        At Ang InDesign, we recognise that an office is the
                        lifeblood of your company and not just a place.
                      </p>
                      <p>
                        And for that reason, as the top office interior designer
                        in Delhi, we take a very individualised, considerate,
                        and meticulous approach.
                      </p>
                      <p>
                        We create workplaces that are harmonious, motivating,
                        and technologically advanced, making employees delighted
                        to enter each morning.
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          We Create Experiences, Not Just Offices
                        </h2>
                        <p>Every company is unique.</p>
                        <p>Each team operates uniquely.</p>
                        <p>Every business has a unique culture.</p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            <li>
                              <NavLink>
                                We never impose a style or trend on you because
                                of this.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Rather, we take time to comprehend how your team
                                operates.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                What kind of setting are you looking for?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>The personality of your brand.</NavLink>
                            </li>
                            <li>
                              <NavLink>How much room do you have?</NavLink>
                            </li>
                            <li>
                              <NavLink>Your plans for future growth.</NavLink>
                            </li>
                          </ul>
                        </p>
                        <p>Your priorities, comfort level, and budget.</p>
                        <p>
                          We then translate that into a work environment that is
                          comfortable for you.
                        </p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            Our objective is to establish an environment where:
                            <li>
                              <NavLink>
                                Your team feels motivated and inspired.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Clients have faith in your professionalism.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>Meetings are effective.</NavLink>
                            </li>
                            <li>
                              <NavLink>Work feels more seamless.</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Your brand is evident everywhere.
                              </NavLink>
                            </li>
                          </ul>
                        </p>
                        <p>
                          This is how top <b>office interior designers</b> in{" "}
                          <b>Delhi</b> create real value.
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Interior Design Services Are For Offices
                        </h2>
                        <p>
                          Below is a comprehensive list of our products, all
                          designed to enhance the efficiency, comfort, and
                          beauty of your workspace.
                        </p>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            1. Workspace Design & Planning
                          </h3>
                          <p>We begin by figuring out how your team works.</p>
                          <p>Do you run a cooperative business?</p>
                          <p>Or do you require quiet areas?</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We create layouts that enhance:
                              <li>
                                <NavLink>Workflow</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfort of seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Flow of movement</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Collaborations within the team
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Balance of noise</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            More than ornate décor, a well-thought-out office
                            layout boosts productivity.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            2. Modern Seating and Workstations
                          </h3>
                          <p>
                            Comfort is important because your team spends eight
                            to ten hours here.
                          </p>
                          <p>
                            We create ergonomically intelligent workstations
                            that enhance concentration and lessen fatigue.
                          </p>
                          <p>
                            Long workdays are made easier with chic yet
                            functional seating.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            3. Meeting Spaces and Conference Rooms
                          </h3>
                          <p>Meetings shape decisions.</p>
                          <p>Decisions also influence development.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We Design:
                              <li>
                                <NavLink>
                                  We design expert conference spaces.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We design spaces that foster creative
                                  brainstorming.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Areas for private conversation.
                                </NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>Areas that are cosy and motivated.</p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Waiting areas designated for clients and
                            reception staff
                          </h3>
                          <p>
                            The reception you receive shapes your brand's
                            initial impression.
                          </p>
                          <p>
                            It should have a warm, self-assured, and upscale
                            vibe.
                          </p>
                          <p>
                            Even before you speak, we create receptions that
                            highlight your brand.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Director & CEO Cabin Design
                          </h3>
                          <p>
                            Leadership spaces should reflect authority, clarity,
                            and comfort.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We design cabins that balance:
                              <li>
                                <NavLink>Professional look</NavLink>
                              </li>
                              <li>
                                <NavLink>Privacy</NavLink>
                              </li>
                              <li>
                                <NavLink>Focus</NavLink>
                              </li>
                              <li>
                                <NavLink>Storage</NavLink>
                              </li>
                              <li>
                                <NavLink>Personal aesthetics</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Leaders need a peaceful and uninterrupted
                            environment to work effectively.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. Pantry Design & Breakout Zones
                          </h3>
                          <p>A productive team is at ease.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We design:
                              <li>
                                <NavLink>Breakout corners</NavLink>
                              </li>
                              <li>
                                <NavLink>Cozy lounges</NavLink>
                              </li>
                              <li>
                                <NavLink>Pantry spaces</NavLink>
                              </li>
                              <li>
                                <NavLink>Recreational areas</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            These small spaces drastically alter the office
                            culture.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            7. Visual Styling & Brand Identity
                          </h3>
                          <p>You should be able to see your brand.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We draw attention to it by using:
                              <li>
                                <NavLink>Colors</NavLink>
                              </li>
                              <li>
                                <NavLink>Materials</NavLink>
                              </li>
                              <li>
                                <NavLink>Wall art</NavLink>
                              </li>
                              <li>
                                <NavLink>Signs</NavLink>
                              </li>
                              <li>
                                <NavLink>Lighting</NavLink>
                              </li>
                              <li>
                                <NavLink>Styling furniture</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Customers and staff get a great impression of the
                            brand as a result.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            8. Full Turnkey Interior Office Solutions
                          </h3>
                          <p>
                            We take care of everything, from preparation to
                            execution.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              Coordinating with several vendors is not
                              necessary.
                              <li>
                                <NavLink>Civil Work</NavLink>
                              </li>
                              <li>
                                <NavLink>Electrical and Lighting</NavLink>
                              </li>
                              <li>
                                <NavLink>Furniture</NavLink>
                              </li>
                              <li>
                                <NavLink>False Ceilings</NavLink>
                              </li>
                              <li>
                                <NavLink>Flooring</NavLink>
                              </li>
                              <li>
                                <NavLink>Painting</NavLink>
                              </li>
                              <li>
                                <NavLink>Décor</NavLink>
                              </li>
                              <li>
                                <NavLink>Brand Graphics</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Seamless and stress-free experience from start to
                            finish.
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Design Process Is Simple, Clear & Professional.
                        </h2>
                        <p>
                          We follow an intuitive, clear, and expert design
                          process. <br /> Many companies worry that office
                          design work will disrupt their operations.
                        </p>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: Recognising Your Needs
                          </h3>
                          <p>
                            We sit down with you and learn about your workplace
                            culture, team size, preferred style, and growth
                            goals.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: Concept and Space Planning
                          </h3>
                          <p>
                            To help you envision your future space, we produce
                            preliminary layouts, 2D planning, and thematic
                            concepts.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: Visualisation in 3D
                          </h3>
                          <p>
                            Before any work begins, we create 3D designs that
                            accurately depict your office.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: Choosing Materials and Furnishings
                          </h3>
                          <p>
                            We create a long-lasting workspace by fusing design
                            and durability.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 5: Complete Implementation
                          </h3>
                          <p>
                            Every installation, detail, and finishing is
                            completed under supervision and with skill.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 6: Complete Configuration
                          </h3>
                          <p>
                            To finish your office, we add branding, décor,
                            lighting changes, and styling elements.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why Companies Rely on Us as Delhi's Top Office Interior
                        Designer
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  More than 20 years of experience
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Transparent and unambiguous communication
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Strong comprehension of business requirements
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Personalised layout for each office
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  The project is completed on time
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Cost-effective & durable solutions.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Clean workmanship</NavLink>
                              </li>
                              <li>
                                <NavLink>Complete project management</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          We provide more than just designs.
                          <br />
                          We provide a space that fosters the expansion of your
                          company.
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
                              How much does a Delhi office interior design
                              project cost?
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
                              The size of the space, the materials used, the
                              furniture chosen, and the design specifications
                              all affect the cost. After learning about your
                              requirements, we offer a comprehensive quote.
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
                              How long does it take to finish an interior design
                              project for an office?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It might take three to four weeks for a small
                              office and six to ten weeks for a larger one. We
                              always adhere to a strict schedule.
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
                              Do you offer 3D designs before implementation?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we offer full 3D visualisation so you can see
                              the finished product.
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
                              Are you able to design offices for corporations,
                              startups, and IT companies?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Of course. We adapt designs according to business
                              culture and work with all industries.
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
                              Do you provide turnkey solutions?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Indeed. From preparation to completion, we take
                              care of everything.
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
                              Can you create something that fits my budget?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we provide a variety of choices and operate
                              honestly within your financial constraints.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are You Prepared to Change Your Workspace?
                  </h2>
                  <p>There is more to your office than just a place to work.</p>
                  <p>
                    {" "}
                    Your surroundings reflect your brand, culture, and
                    aspirations.
                  </p>
                  <p>
                    Together, we can create a work environment that will
                    motivate your team and contribute to the success of your
                    business.
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

export default Office;
