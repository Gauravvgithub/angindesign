import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/services/salon/banner.webp");
var bgimg1 = require("./../../images/services/salon/bg1.webp");
var bgimg2 = require("./../../images/services/salon/bg2.webp");

class Salon extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Salon Interior Designer in Delhi | ANG InDesign</title>
          <meta
            name="description"
            content="Build a stylish, modern and luxurious salon with professional interior designers in Delhi. Smart layouts and premium finishing."
          />
          {/* <link rel="canonical" href="https://angindesign.vercel.app/services/salon"> */}
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Salon Interior Design"
            pagename="Salon Interior Design"
            description="Transform your salon into a stylish and functional space with our expert interior design services."
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
                          <NavLink to={"/services/restaurant"}>
                            Restaurant
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/services/office"}>Office</NavLink>
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
                        Salon Interior Design Services
                      </h1>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "18px" }}
                      >
                        <i>By the Leading Salon Interior Designer in Delhi</i>
                      </h3>
                      <p>
                        When you design a salon, you need to do more than just
                        make it look nice. You need to make it a place where
                        people can relax, feel good about themselves, and be
                        cared for. People go to a salon to relax, get some
                        pampering, and take a break from their busy lives.
                      </p>
                      <p>
                        That's why your interior design should be quiet,
                        elegant, and make every customer feel welcome as soon as
                        they walk in.
                      </p>
                      <p>
                        We at Angin Design really get this feeling. As a trusted
                        <b> salon interior designer in Delhi</b>, we want to
                        make a space that not only looks good but also feels
                        warm, cozy, and welcoming.
                      </p>
                      <p>
                        Your salon is more than just a place to get your hair
                        done; it's an experience. And our job is to make that
                        experience look great.
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Why Salon Interiors Are More Important Than Ever
                        </h2>

                        <p>
                          <ul className="list-angle-right anchor-line">
                            People don't just go to salons for services anymore;
                            they go for the atmosphere, the feel of the space,
                            and the overall experience. A well-designed salon
                            can help your business grow in ways you might not
                            even know about:
                            <li>
                              <NavLink>It brings in more customers</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                It makes clients more comfortable
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>It builds trust and loyalty</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                It increases the value of your brand
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                It makes your staff more productive
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                It makes your social media posts more appealing
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                It gives customers a "premium feel" that they
                                remember
                              </NavLink>
                            </li>
                          </ul>
                          <p>
                            In short, nice interiors make people who come to
                            your business for the first time come back again and
                            again.
                          </p>
                        </p>
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          We Make Salons That Look & Feel Beautiful, Warm, and
                          Safe.
                        </h2>
                        <p>
                          Each salon owner has their own way of doing things.
                          <br />
                          Some people like a clean, simple look. <br />
                          Some people want the best. <br />
                          Some people want a beauty studio with soft, pastel
                          colors. <br />
                          Some people want a salon that is modern, bold, and
                          full of energy.
                        </p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            That's why we never use the same design or template
                            twice. We learn about you instead:
                            <li>
                              <NavLink>Brand identity</NavLink>
                            </li>
                            <li>
                              <NavLink>Vision</NavLink>
                            </li>
                            <li>
                              <NavLink>Type of client</NavLink>
                            </li>
                            <li>
                              <NavLink>Size of the space</NavLink>
                            </li>
                            <li>
                              <NavLink>Needs for comfort</NavLink>
                            </li>
                            <li>
                              <NavLink>Plans for future growth</NavLink>
                            </li>
                            <li>
                              <NavLink>Money</NavLink>
                            </li>
                            <li>
                              <NavLink>Favorite colors</NavLink>
                            </li>
                          </ul>
                          <p>
                            Then we create a salon interior design that feels
                            like “you.”
                          </p>
                          <p>
                            We want your space to feel so natural and cozy that
                            customers want to stay longer and come back again
                            and again.
                          </p>
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Salon Interior Design Services
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            1. Design Of The Reception And Waiting Area
                          </h3>

                          <p>
                            <ul className="list-angle-right anchor-line">
                              The first impression a client gets when they walk
                              into your salon is immediate. We make reception
                              areas that feel:
                              <li>
                                <NavLink>Cozy</NavLink>
                              </li>
                              <li>
                                <NavLink>Welcoming</NavLink>
                              </li>
                              <li>
                                <NavLink>New</NavLink>
                              </li>
                              <li>
                                <NavLink>Stylish</NavLink>
                              </li>
                              <li>
                                <NavLink>Clean and safe</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Everything matters right now: soft lighting, warm
                            colors, and comfortable seating.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            2. Places To Cut And Style Hair
                          </h3>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              This is the most important part of your salon. We
                              make styling stations that are open, roomy, and
                              comfortable. Our designs include:
                              <li>
                                <NavLink>Ergonomic mirror placement</NavLink>
                              </li>
                              <li>
                                <NavLink>Proper lighting for accuracy </NavLink>
                              </li>
                              <li>
                                <NavLink>Easy-access storage</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Elegant workstation designs</NavLink>
                              </li>
                            </ul>
                            <p>
                              These little things make the experience better for
                              both the customer and the stylist.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            3. Areas For Makeup And Beauty Treatments
                          </h3>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We pay a lot of attention to makeup rooms:
                              <li>
                                <NavLink>Balanced lighting</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Colors that are good for your skin
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Storage that makes sense</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Spaces that are clean and free of dust
                                </NavLink>
                              </li>
                            </ul>

                            <p>
                              Your clients should feel at ease and confident
                              during their beauty sessions.
                            </p>
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Lounge For Manicures and Pedicures
                          </h3>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              This area needs to be clean, soft, and quiet.
                              <br />
                              <br />
                              We plan:
                              <li>
                                <NavLink>Soft seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Warm lighting</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable spacing</NavLink>
                              </li>
                              <li>
                                <NavLink>Setups that are easy to clean</NavLink>
                              </li>
                            </ul>
                            <p>
                              Your clients should feel like they are being
                              pampered, not rushed.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Rooms For Spa, Facials, and Therapy
                          </h3>
                          <p>
                            These rooms need the most careful planning because
                            they affect how well people can relax.
                            <ul className="list-angle-right anchor-line">
                              We use:
                              <li>
                                <NavLink>Soft, warm light</NavLink>
                              </li>
                              <li>
                                <NavLink>Textures that calm</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Colors that are neutral and calming
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Soft decor</NavLink>
                              </li>
                              <li>
                                <NavLink>Placement that smells good</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable treatment beds</NavLink>
                              </li>
                            </ul>
                            <p>These rooms should be a calm place to relax.</p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. Planning For Storage, Staff Areas, and the Back
                            End
                          </h3>
                          <p>
                            A professional salon needs to have organized back
                            areas, like:
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Staff room</NavLink>
                              </li>
                              <li>
                                <NavLink>Utility room</NavLink>
                              </li>
                              <li>
                                <NavLink>Laundry section</NavLink>
                              </li>
                              <li>
                                <NavLink>Product storage</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Where to put towels and sheets
                                </NavLink>
                              </li>
                            </ul>
                            <p>
                              We make sure that your salon looks good from the
                              outside and runs well on the inside.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            7. Theme, Branding, and Visual Identity
                          </h3>
                          <p>
                            What sets your salon apart?
                            <br />
                            We want to make it clear that:
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Colors</NavLink>
                              </li>
                              <li>
                                <NavLink>Things</NavLink>
                              </li>
                              <li>
                                <NavLink>Art on the wall</NavLink>
                              </li>
                              <li>
                                <NavLink>Signs</NavLink>
                              </li>
                              <li>
                                <NavLink>Art</NavLink>
                              </li>
                              <li>
                                <NavLink>Style of furniture</NavLink>
                              </li>
                              <li>
                                <NavLink>Tone of light</NavLink>
                              </li>
                            </ul>
                            <p>
                              Every customer will remember a well-designed brand
                              identity.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            8. Turnkey Salon Interior Design Solutions
                          </h3>
                          <p>
                            Our team handles everything from the idea to the
                            execution.
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Making furniture</NavLink>
                              </li>
                              <li>
                                <NavLink>Putting up lights</NavLink>
                              </li>
                              <li>
                                <NavLink>Putting up a false ceiling</NavLink>
                              </li>
                              <li>
                                <NavLink>Doing electrical work</NavLink>
                              </li>
                              <li>
                                <NavLink>Doing plumbing work</NavLink>
                              </li>
                              <li>
                                <NavLink>Painting</NavLink>
                              </li>
                              <li>
                                <NavLink>Styling the decor</NavLink>
                              </li>
                              <li>
                                <NavLink>Finishing the job</NavLink>
                              </li>
                            </ul>
                            <p>
                              You don't have to deal with more than one vendor.
                              <br />
                              We take care of everything from beginning to end.
                            </p>
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Design Process is Clear, Simple, and Easy to
                          Understand
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: Getting to Know Your Vision
                          </h3>
                          <p>
                            We talk to you and learn about your salon dreams.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: Planning and Layout
                          </h3>
                          <p>
                            We make a layout that is safe, beautiful, and useful
                            for your space.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: Making a 3D model
                          </h3>
                          <p>You can see your salon before any work starts.</p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: Do it
                          </h3>
                          <p>
                            Our team builds your salon just like you wanted.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 5: The Last Style
                          </h3>
                          <p>
                            Everything is perfect, from the decorations to the
                            lighting to the last details.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why Companies Trust Us to Be the Best Salon Interior
                        Designer in Delhi
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  Over 20 years of design experience
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Clean, emotional, human-centered designs
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Practical & functional planning
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>Beautiful colour combinations</NavLink>
                              </li>
                              <li>
                                <NavLink>Trendy yet timeless concepts</NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>On-time, organised execution</NavLink>
                              </li>
                              <li>
                                <NavLink>Turnkey solutions</NavLink>
                              </li>
                              <li>
                                <NavLink>Friendly communication</NavLink>
                              </li>
                              <li>
                                <NavLink>Budget-friendly options</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          We don't make salons look good for just one day.
                          <br />
                          <b>We make them look good for years to come.</b>
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
                              How much does it cost to design the inside of a
                              salon in Delhi?
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
                              The price depends on the size of the salon, the
                              materials used, the furniture, and the theme.
                              After we visit the site, we give you a full quote.
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
                              Do you make plans for small salons?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we design salons of all sizes, from small to
                              medium to luxury to premium.
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
                              How long does it take to finish a project for the
                              inside of a salon?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It takes 3 to 5 weeks to build a basic salon.
                              <br />
                              It takes 6 to 10 weeks for a big or fancy salon.
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
                              Do you give 3D images before you start?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes. You get a full 3D design so you can see what
                              it will look like in the end.
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
                              Can you work within my budget?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Of course. We recommend the best materials and
                              methods for your budget.
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
                              Do you take care of the whole project from start
                              to finish?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes. We provide full turnkey solutions for salon
                              interiors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are you ready to build a salon that your clients will love?
                  </h2>
                  <p>
                    People come to your salon to look and feel beautiful. Let's
                    make the inside even more special for them.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink>Set up a free consultation.</NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Get a quote for a custom salon interior.
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>Talk to our interior expert.</NavLink>
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

export default Salon;
