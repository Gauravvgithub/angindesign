import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/services/modularWoodenWork/banner.webp");
var bgimg1 = require("./../../images/services/modularWoodenWork/bg1.webp");
var bgimg2 = require("./../../images/services/modularWoodenWork/bg2.webp");

class modularWoodenWork extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Modular Kitchen & Wooden Work in Delhi | ANG InDesign</title>
          <meta
            name="description"
            content="Premium modular kitchens, wardrobes and wooden interior work designed with perfection. Customised carpentry solutions in Delhi."
          />
          {/* <link rel="canonical" href="https://angindesign.vercel.app/services/modular-wooden-work"> */}
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Modular Wooden Work Interior Design"
            pagename="Modular Wooden Work Interior Design"
            description="Creating warm, functional spaces with expert modular wooden work interior design services."
            bgimage={bnrimg}
          />
          {/* SECTION CONTENT START */}
          <div className="section-full p-t80 p-b50 mobile-page-padding">
            <div className="container">
              {/* GALLERY CONTENT START */}
              <div className="row">
                <div
                  className="col-lg-4 col-md-12 sticky_column"
                  // style={{
                  //   position: "sticky",
                  //   top: "120px",
                  //   alignSelf: "flex-start",
                  //   height: "fit-content",
                  //   zIndex: 5,
                  // }}
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
                          <NavLink to={"/services/consultancy"}>
                            Consultancy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/restaurant"}>
                            Restaurant
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
                        Modular Interior Wooden Work
                      </h1>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "14px" }}
                      >
                        <i>
                          Beautiful wooden interiors that make your home feel
                          warmer, calmer, and like it's really yours.
                          <br />
                          Wood has a very calming effect.
                        </i>
                      </h3>
                      <p>
                        It looks warm.
                        <br />
                        Soft to the touch.
                        <br />
                        Calm to be around.
                        <br />
                        And somehow, it makes a home feel more stable, like the
                        space is safe, grounded, and welcoming.
                      </p>
                      <p>
                        That's why homeowners who want their home to feel warm
                        and lived-in, not cold or mechanical, have always liked
                        wooden interiors.
                      </p>
                      <p>
                        At Angin Design, we offer{" "}
                        <b>Modular Interior Wooden Work</b> with one simple
                        intention:
                        <br />
                        <p>
                          <b>
                            Our goal at Angin Design is to make wooden interiors
                            that make your home feel more comfortable,
                            organized, and "you."
                          </b>
                        </p>
                        <p>
                          This isn't just woodwork.
                          <br />
                          This is about making the places where you relax, work,
                          cook, and make memories every day.
                          <br />
                          We take our time designing everything. <br />
                          Because you can't build a house quickly. <br />
                          Understanding is what makes a home.
                        </p>
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Wooden Interiors Aren't Just Furniture, They're Also
                          Feelings.
                        </h2>
                        <p>
                          <p>
                            When you walk into a room with well-designed wooden
                            things, it feels different.
                          </p>
                          <p>
                            The room feels more peaceful.
                            <br />
                            The lights feel softer.
                            <br />
                            It feels warmer outside.
                            <br />
                            You feel like you can breathe a little better right
                            away.
                          </p>

                          <p>
                            That's what wood does.
                            <br />
                            It has a natural way of making people feel at home.
                            <br />
                            That's why homeowners all over Delhi trust us with
                            their <b>Modular Interior Wooden Work</b> in Delhi.
                            <br />
                            We make interiors that are calm, simple, and warm.
                          </p>
                        </p>
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          We Make Wooden Interiors That Fit Your Life, Not The
                          Other Way Around.
                        </h2>
                        <p>
                          Every family and every house has its own way of life.
                          <br />
                          Some people like to keep everything behind closed
                          doors.
                          <br />
                          Some people like shelves that are open.
                          <br />
                          Some people like simple designs.
                          <br />
                          Some people love rich textures.
                          <br />
                          Some people want things that will last a long time,
                          especially if they have kids.
                          <br />
                          We don't use templates or designs that have already
                          been made.
                        </p>
                        <p>
                          We listen instead.
                          <br />
                          We watch.
                          <br />
                          We know what you do every day, what you like, and what
                          makes you uncomfortable.
                        </p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            Then we make wooden interiors that really make your
                            life easier:
                            <li>
                              <NavLink>Neat Wardrobes</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Kitchens that are free of clutter
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>Comfortable Bedrooms</NavLink>
                            </li>
                            <li>
                              <NavLink>Smart storage</NavLink>
                            </li>
                            <li>
                              <NavLink>Surfaces that are easy to clean</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Materials that are strong and last
                              </NavLink>
                            </li>
                          </ul>
                          <p>
                            Our goal is simple:
                            <br />
                            <b>
                              <i>
                                To make a home that feels soft, works well, and
                                is perfectly balanced.
                              </i>
                            </b>
                          </p>
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Modular Wooden Work Services
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            1. Modular Wardrobes That Make it Easy To Store
                            Things.
                          </h3>
                          <p>
                            You use a wardrobe every day.
                            <br />
                            So it shouldn't be messy or annoying.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make wardrobes that feel:
                              <li>
                                <NavLink>Light </NavLink>
                              </li>
                              <li>
                                <NavLink>Organized </NavLink>
                              </li>
                              <li>
                                <NavLink>Spacious </NavLink>
                              </li>
                              <li>
                                <NavLink>Well-planned</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Your wardrobe is made just for you, with daily-wear
                            shelves, extra storage, sliding doors, and
                            soft-close drawers.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            2. Wooden Modular Kitchens Made for Real Life
                          </h3>
                          <p>
                            When your kitchen is well-planned, cooking is a lot
                            easier.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We design kitchens that:
                              <li>
                                <NavLink>
                                  They are easy to move around in
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Have smart storage</NavLink>
                              </li>
                              <li>
                                <NavLink>Feel clean and fresh</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Use strong, water-resistant wood materials{" "}
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Look warm and inviting</NavLink>
                              </li>
                            </ul>
                            <p>
                              Your kitchen should help you, not stress you out,
                              whether you cook every day or only once in a
                              while.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            3. TV Units That Make Your Living Space More
                            Relaxing
                          </h3>
                          <p>
                            Families relax in the living room.
                            <br />A messy TV area can make the whole room feel
                            out of control.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              So we make TV units that:
                              <li>
                                <NavLink>Hide wires</NavLink>
                              </li>
                              <li>
                                <NavLink>Add clean lines</NavLink>
                              </li>
                              <li>
                                <NavLink>Have beautiful shelves </NavLink>
                              </li>
                              <li>
                                <NavLink>Keep everything in its place</NavLink>
                              </li>
                            </ul>

                            <p>
                              A simple, elegant design can make the whole room
                              feel calm.
                            </p>
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Beds and Wooden Headboards That Make You Feel
                            Warm and Relaxed
                          </h3>
                          <p>
                            Your bedroom should be the softest, safest place you
                            can be.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make:
                              <li>
                                <NavLink>Strong wooden beds</NavLink>
                              </li>
                              <li>
                                <NavLink>Storage beds</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Headboards with or without cushions
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Matching side units</NavLink>
                              </li>
                            </ul>
                            <p>
                              The goal is simple:
                              <br />
                              <b>
                                <i>
                                  To help you sleep well and wake up feeling
                                  good.
                                </i>
                              </b>
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Look For Study Spaces And Workspaces That Are
                            Calm.
                          </h3>

                          <p>
                            <ul className="list-angle-right anchor-line">
                              A well-designed wooden study area can make a big
                              difference for people who work from home.
                              <br />
                              We make workspaces that are:
                              <li>
                                <NavLink>Calm </NavLink>
                              </li>
                              <li>
                                <NavLink>Organized </NavLink>
                              </li>
                              <li>
                                <NavLink>Free of distractions</NavLink>
                              </li>
                            </ul>
                            <p>So that work is easier and not stressful.</p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. Storage For Crockery, Bar Cabinets, And Dining
                            Items
                          </h3>
                          <p>
                            These little wooden pieces finish off your dining
                            room.
                            <br />
                            We make units that not only look good, but also keep
                            everything organized.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            7. Wooden Bathroom Units That Work Well and Don't
                            Get Wet
                          </h3>
                          <p>It's important to plan out bathrooms carefully.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make wooden bathroom units that are:
                              <li>
                                <NavLink>Resistant to moisture</NavLink>
                              </li>
                              <li>
                                <NavLink>Clean</NavLink>
                              </li>
                              <li>
                                <NavLink>Big</NavLink>
                              </li>
                              <li>
                                <NavLink>Useful</NavLink>
                              </li>
                              <li>
                                <NavLink>Easy to keep clean</NavLink>
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            8. Modular Wooden Interiors For The Whole House
                          </h3>

                          <p>
                            <ul className="list-angle-right anchor-line">
                              We take care of everything for homeowners who want
                              a fully wooden look:
                              <li>
                                <NavLink>Bedrooms</NavLink>
                              </li>
                              <li>
                                <NavLink>Living rooms</NavLink>
                              </li>
                              <li>
                                <NavLink>Dining rooms</NavLink>
                              </li>
                              <li>
                                <NavLink>Kitchens </NavLink>
                              </li>
                              <li>
                                <NavLink>Study areas</NavLink>
                              </li>
                              <li>
                                <NavLink>Storage units</NavLink>
                              </li>
                            </ul>
                            <p>
                              A fully coordinated wooden interior that feels
                              warm, natural, and like it has always been there.
                            </p>
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Process is Easy, Human, And Stress-Free.
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: We Sit Down With You.
                          </h3>
                          <p>
                            We know your home, your space, and what makes you
                            comfortable.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: We make things that fit your way of life
                          </h3>
                          <p>
                            You can choose the colors, finishes, layouts, and
                            storage that work best for you.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: We show you 3D pictures of your home.
                          </h3>
                          <p>So you can see exactly how it will look.</p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: We Build With Care
                          </h3>
                          <p>
                            We take our time and make sure that every cut,
                            joint, and finish is perfect.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 5: We put things together neatly.
                          </h3>
                          <p>
                            Your home is respected.
                            <br />
                            Our team is careful and keeps everything clean.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 6: We make sure everything is perfect.
                          </h3>
                          <p>
                            Before handing over, everything is checked,
                            including finishing, polishing, hardware, and
                            alignment.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why People Trust Us
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We listen first, then we design.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We care about how your home feels.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We make wooden interiors that last for a long
                                  time.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We talk to each other clearly.
                                </NavLink>
                              </li>

                              <li>
                                <NavLink>
                                  We take care of everything from start to
                                  finish.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>We don't rush when we design.</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          Your home is a place where you feel things.
                          <br />
                          We treat it with the same care.
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
                              How long does it take to build modular wooden
                              work?
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
                              Most homes take 3 to 6 weeks, but it depends on
                              the size of the project.
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
                              What kind of wood is best for the inside of a
                              house?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Depending on the room, we like high-quality
                              plywood, HDHMR, and materials that don't soak up
                              water.
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
                              Do you make everything to order?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, each unit is made to fit your way of life and
                              how you use it every day.
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
                              Does wooden work last a long time?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Wooden interiors last for a long time if they are
                              made with good materials and finished properly.
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
                              Do you do all kinds of woodwork in the home?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we do offer modular wooden interior solutions
                              for the whole house.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Let's Make A Room That Makes You Feel Calm Every Time You
                    Walk in
                  </h2>
                  <p>
                    Want to make your home feel warm, natural, and beautiful?
                    <br />
                    Wooden interiors change the mood of a home most beautifully
                    and gently.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink>Schedule a Friendly Consultation,</NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Request a Custom Wooden Work Estimate,
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>Call our design expert right now</NavLink>
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

export default modularWoodenWork;
