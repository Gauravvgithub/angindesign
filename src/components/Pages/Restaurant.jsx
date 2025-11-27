import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";

var bnrimg = require("./../../images/services/bar/banner.webp");
var bgimg1 = require("./../../images/services/bar/bg1.webp");
var bgimg2 = require("./../../images/services/bar/bg2.webp");

class Restaurant extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Restaurant Interior Design"
            pagename="Restaurant Interior Design"
            description="Crafting dining spaces that tantalize the senses and elevate the culinary experience."
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
                        Restaurant Interior Designer in Delhi
                      </h1>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "18px" }}
                      >
                        <i>
                          Designing restaurants that feel warm, welcoming, and
                          unforgettable — one detail at a time.
                        </i>
                      </h3>
                      <p>
                        When someone walks into a restaurant, they’re not just
                        looking for food.
                        <br />
                        They're looking for comfort... <br />
                        A brief moment of peace... <br />A place where they can
                        sit down, relax, and enjoy being with the people they
                        are with.
                      </p>
                      <p>
                        And the truth is that the interior has a much bigger
                        impact on that experience than we think.
                      </p>
                      <p>
                        A restaurant that is well-designed doesn't just look
                        nice.
                        <br />
                        It feels great. <br />
                        It feels soft in a certain way... <br />
                        A feeling of warmth... <br />
                        A feeling of being part of something. <br />
                        Our simple way of <b>
                          Restaurant Interior Design
                        </b> at <b>Angin Design</b> is as follows:
                        <br />
                        <b>
                          {" "}
                          We make places that guests want to stay longer and
                          come back to.{" "}
                        </b>
                      </p>
                      <p>
                        We don't design to follow trends.
                        <br />
                        We design to make people feel good, remember things, and
                        be comfortable.
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Because a Restaurant Is Not Just a Business, It’s an
                          Experience
                        </h2>
                        <p>
                          Think about the last time you went into a restaurant
                          and felt at ease right away.
                          <br />
                          It could have been the light... <br />
                          The feel of the wood might be... <br />
                          Perhaps the gentle music... <br />
                          Maybe the comfortable seating... <br />
                        </p>

                        <p>
                          {" "}
                          No matter what it was, that feeling stayed with you.{" "}
                        </p>
                        <p>
                          That's what good restaurant design does.
                          <br />
                          It gently changes how people feel, act, and have fun.
                          <br />
                        </p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            A well-designed interior can:
                            <li>
                              <NavLink>Attract more customers</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Make people want to stay longer{" "}
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>Make customers more comfortable</NavLink>
                            </li>
                            <li>
                              <NavLink>Get better reviews</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Give your brand a unique personality
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Make your restaurant stand out in people's minds
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Make your staff work more efficiently
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>Help you get repeat customers</NavLink>
                            </li>
                          </ul>
                          <p>
                            As a <b>Restaurant Interior Designer in Delhi</b>,
                            it's our job to help you make that emotional
                            connection with your guests.
                          </p>
                        </p>
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          We Make Restaurants That Feel Warm, Honest, and
                          Soulful.
                        </h2>
                        <p>
                          There is a story behind every restaurant.
                          <br />
                          Some are warm and inviting. <br />
                          Some are brave. <br />
                          Some are very nice. <br />
                          Some are very small. <br />
                          Some are based on tradition. <br />
                          Some people want a more modern, global look.
                        </p>
                        <p>
                          We don't make you stick to a certain style; we listen
                          to you first.
                        </p>
                        <p>
                          <ul className="list-angle-right anchor-line">
                            We try to figure out:
                            <li>
                              <NavLink>
                                How you want your guests to feel.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>What kind of food do you serve?</NavLink>
                            </li>
                            <li>
                              <NavLink>What your brand means.</NavLink>
                            </li>
                            <li>
                              <NavLink>How your space is set up.</NavLink>
                            </li>
                            <li>
                              <NavLink>
                                How your group gets things done.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                How comfortable are you with colors?
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                The kind of atmosphere you like.
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>
                                Your budget and what you can do.
                              </NavLink>
                            </li>
                          </ul>
                          <p>
                            We start designing only after this.
                            <br />
                            We don't want your restaurant to look fake; we want
                            it to feel real. <br />
                            Not too much, just enough to make you feel better.{" "}
                            <br />
                            War, not loud. <br />A place that feels warm and
                            welcoming.
                          </p>
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          The Services We Offer for Restaurant Interior Design
                        </h2>
                        <p>
                          <i>
                            (Designed to add personality, calmness, and energy
                            to your space.)
                          </i>
                        </p>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            1. The Atmosphere and Lighting in The Restaurant
                          </h3>
                          <p>
                            The lighting sets the mood for the restaurant.
                            <br />
                            It loses its charm when it's too bright. <br />
                            People don't like it when it's too dark.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make lights that feel:
                              <li>
                                <NavLink>Warm</NavLink>
                              </li>
                              <li>
                                <NavLink>Balanced</NavLink>
                              </li>
                              <li>
                                <NavLink>Cozy</NavLink>
                              </li>
                              <li>
                                <NavLink>Natural</NavLink>
                              </li>
                              <li>
                                <NavLink>Driven by emotion</NavLink>
                              </li>
                            </ul>
                          </p>
                          <p>
                            Soft lights on tables...
                            <br />
                            Soft lights on the walls... <br />
                            Only showing what's important... <br />
                            This is how you create an atmosphere.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            2. A Seating Arrangement That Feels Both Big And
                            Cozy
                          </h3>
                          <p>
                            A restaurant shouldn't feel too full or too empty.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We plan seating arrangements that make sure:
                              <li>
                                <NavLink>Space</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfort</NavLink>
                              </li>
                              <li>
                                <NavLink>Movement</NavLink>
                              </li>
                              <li>
                                <NavLink>Conversations</NavLink>
                              </li>
                              <li>
                                <NavLink>Privacy</NavLink>
                              </li>
                              <li>
                                <NavLink>Efficiency</NavLink>
                              </li>
                            </ul>
                            <p>
                              Some corners are warm and inviting.
                              <br />
                              Some areas feel alive. <br />
                              Some tables seem like they would be great for
                              families. <br />
                              Some are great for couples. <br />
                              Happy guests flow when the layout is good.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            3. Comfort And Arrangement of Seats
                          </h3>
                          <p>A bar should never feel small or uncomfortable.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make seating areas like:
                              <li>
                                <NavLink>Counter seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Lounge seating</NavLink>
                              </li>
                              <li>
                                <NavLink>Booth seating</NavLink>
                              </li>
                              <li>
                                <NavLink>High tables</NavLink>
                              </li>
                              <li>
                                <NavLink>Private corner seating</NavLink>
                              </li>
                            </ul>

                            <p>
                              Every seat should be comfortable and have a good
                              view of the bar.
                            </p>
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Sound Control and Music Acoustics
                          </h3>
                          <p>
                            Bars need good sound quality to keep people awake
                            without making them feel too loud.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We use:
                              <li>
                                <NavLink>Acoustic panels</NavLink>
                              </li>
                              <li>
                                <NavLink>Parts that spread sound</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Correct placement of the speaker
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Soft things to make the noise less loud
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Guests are happy when the sound is good
                                </NavLink>
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Decor And Visual Identity That Fit The Theme
                          </h3>
                          <p>Your bar needs to have a personality.</p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We help you come up with your theme:
                              <li>
                                <NavLink>Modern</NavLink>
                              </li>
                              <li>
                                <NavLink>Retro</NavLink>
                              </li>
                              <li>
                                <NavLink>Industrial</NavLink>
                              </li>
                              <li>
                                <NavLink>Rustic</NavLink>
                              </li>
                              <li>
                                <NavLink>Vintage</NavLink>
                              </li>
                              <li>
                                <NavLink>Minimal</NavLink>
                              </li>
                              <li>
                                <NavLink>Luxury</NavLink>
                              </li>
                              <li>
                                <NavLink>Neon</NavLink>
                              </li>
                              <li>
                                <NavLink>Dark</NavLink>
                              </li>
                              <li>
                                <NavLink>Artistic</NavLink>
                              </li>
                            </ul>
                            <p>
                              After we decide on a theme, we create an interior
                              identity around it.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. Design For Outdoor And Rooftop Bars
                          </h3>
                          <p>
                            We design a rooftop:
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Lounges</NavLink>
                              </li>
                              <li>
                                <NavLink>Outdoor bars</NavLink>
                              </li>
                              <li>
                                <NavLink>Café-bar hybrids</NavLink>
                              </li>
                              <li>
                                <NavLink>Open seating areas</NavLink>
                              </li>
                            </ul>
                            <p>
                              These areas make guests' experiences
                              unforgettable.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            7. Design Of The Washroom and Utility Zone
                          </h3>
                          <p>
                            The bathrooms in a pub say a lot about its style and
                            cleanliness. We create clean, stylish, and useful
                            bathrooms that fit your brand.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            8. Turnkey Bar Interior Solutions
                          </h3>
                          <p>
                            We take care of everything:
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Work on the house</NavLink>
                              </li>
                              <li>
                                <NavLink>Carpentry</NavLink>
                              </li>
                              <li>
                                <NavLink>Electrical work</NavLink>
                              </li>
                              <li>
                                <NavLink>Lighting</NavLink>
                              </li>
                              <li>
                                <NavLink>Ceilings</NavLink>
                              </li>
                              <li>
                                <NavLink>Floors</NavLink>
                              </li>
                              <li>
                                <NavLink>Furniture</NavLink>
                              </li>
                              <li>
                                <NavLink>Decor</NavLink>
                              </li>
                              <li>
                                <NavLink>Planning the bar equipment</NavLink>
                              </li>
                              <li>
                                <NavLink>Final styling</NavLink>
                              </li>
                            </ul>
                            <p>
                              You get a bar that is completely ready without any
                              stress.
                            </p>
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Design Process is Human-Centered And Stress-Free
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: Getting to know your vision
                          </h3>
                          <p>
                            We talk to you to learn about your bar idea, the
                            kind of guests you want, and your brand.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: Planning the layout and space
                          </h3>
                          <p>
                            We design layouts that work well for staff and make
                            guests feel comfortable.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: Visualising the 3D Design
                          </h3>
                          <p>You can see your bar before it is built.</p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: Choosing the materials and lighting
                          </h3>
                          <p>
                            We pick out colours, textures, lights, and fixtures
                            that go with your theme.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 5: Full Execution
                          </h3>
                          <p>
                            Our trained staff makes everything exactly as
                            promised.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 6: Final Touches
                          </h3>
                          <p>
                            We add plants, decorations, lighting balance, and
                            finishing touches.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why Bars Choose Us as Their Interior Design Partner
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  More than 20 years of experience in designing
                                  bars.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  A deep understanding of how guests think.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Safe, useful, and long-lasting solutions.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Making a warm, memorable atmosphere.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Design that saves space and makes money.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  Clear pricing and friendly communication.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Execution that is reliable and turnkey.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Interiors that are both stylish and
                                  comfortable.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  A strong focus on who the brand is.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          We don't just make bars; we make places where people
                          feel alive.
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
                              What is the cost of designing the inside of a pub
                              in Delhi?
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
                              Prices vary based on the size, furniture,
                              lighting, decor, and theme. After we know what you
                              need, we give you a full quote.
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
                              Do you make plans for small and medium-sized bars?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we make all kinds of bars, like cafés,
                              lounges, pubs, rooftop bars, and boutique bars.
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
                              How long does it take to finish the inside of a
                              bar?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It usually takes 5 to 10 weeks, but this depends
                              on how hard it is and how much space there is.
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
                              Do you give 3D designs before you start working?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>Yes, we offer full 3D visualisation.</p>
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
                              Are you able to design based on a certain theme?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, for sure. Any theme you need: modern, rustic,
                              minimal, luxury, or industrial.
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
                              Do you take care of the whole project?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes. We offer full-service bar interior design.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are You Ready To Make a Bar That People Will Love?
                  </h2>
                  <p>
                    Great interiors make for nights you'll never forget.
                    <br />
                    Customers who have great nights will come back.
                    <br />
                    Let's make a bar that feels alive, welcoming, and
                    emotionally moving.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink>
                          Get a Free Consultation for Your Bar Interior
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>Get a Custom Quote</NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Talk to Our Bar Interior Design Expert
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

export default Restaurant;
