import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/services/restaurant/banner.webp");
var bgimg1 = require("./../../images/services/restaurant/bg1.webp");
var bgimg2 = require("./../../images/services/restaurant/bg2.webp");

class Restaurant extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Restaurant Interior Designer in Delhi | ANG InDesign</title>
          <meta
            name="description"
            content="Design a stunning restaurant or café with Delhi’s expert interior designers. Ambience, layout and branding crafted to perfection."
          />
          {/* <link rel="canonical" href="https://angindesign.vercel.app/services/restaurant"> */}
        </Helmet>
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
                            3. Making a Theme and Style
                          </h3>

                          <p>
                            <ul className="list-angle-right anchor-line">
                              If you want:
                              <li>
                                <NavLink>Minimalist modern</NavLink>
                              </li>
                              <li>
                                <NavLink>Wooden rustic</NavLink>
                              </li>
                              <li>
                                <NavLink>Business</NavLink>
                              </li>
                              <li>
                                <NavLink>Old-fashioned</NavLink>
                              </li>
                              <li>
                                <NavLink>Luxury with style</NavLink>
                              </li>
                              <li>
                                <NavLink>Casual like a café</NavLink>
                              </li>
                              <li>
                                <NavLink>Indo-global mix</NavLink>
                              </li>
                              <li>
                                <NavLink>Traditional Indian-style</NavLink>
                              </li>
                            </ul>

                            <p>
                              We don't just make the theme look good; we also
                              give it emotional depth.
                              <br />
                              The goal is to make the restaurant feel alive.
                            </p>
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            4. Decor And Style For The Inside
                          </h3>
                          <p>
                            Decorating is not just about filling space.
                            <br />
                            It's about adding small, personal touches that make
                            the restaurant feel like home.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We use:
                              <li>
                                <NavLink>Warm colors</NavLink>
                              </li>
                              <li>
                                <NavLink>Textures on the walls</NavLink>
                              </li>
                              <li>
                                <NavLink>Plants</NavLink>
                              </li>
                              <li>
                                <NavLink>Art</NavLink>
                              </li>
                              <li>
                                <NavLink>Mirrors</NavLink>
                              </li>
                              <li>
                                <NavLink>Natural materials</NavLink>
                              </li>
                              <li>
                                <NavLink>Soft shapes</NavLink>
                              </li>
                              <li>
                                <NavLink>Subtle accents</NavLink>
                              </li>
                            </ul>
                            <p>Everything is put in place on purpose.</p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            5. Design Of The Bar And Drink Station
                          </h3>
                          <p>
                            If your restaurant has a bar, you should pay extra
                            attention to it.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We make bars that are:
                              <li>
                                <NavLink>Stylish</NavLink>
                              </li>
                              <li>
                                <NavLink>Welcoming</NavLink>
                              </li>
                              <li>
                                <NavLink>Comfortable</NavLink>
                              </li>
                              <li>
                                <NavLink>Easy to use</NavLink>
                              </li>
                            </ul>
                            <p>
                              People should naturally want to look at a bar,
                              like it's a magnet.
                            </p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            6. Planning The Back Of The Kitchen
                          </h3>
                          <p>
                            The back end has to work well for the restaurant to
                            run smoothly.
                          </p>
                          <p>
                            <ul className="list-angle-right anchor-line">
                              We plan the following:
                              <li>
                                <NavLink>Flow of the kitchen</NavLink>
                              </li>
                              <li>
                                <NavLink>Area for washing</NavLink>
                              </li>
                              <li>
                                <NavLink>Storage</NavLink>
                              </li>
                              <li>
                                <NavLink>Movement of staff</NavLink>
                              </li>
                              <li>
                                <NavLink>Safety and ventilation</NavLink>
                              </li>
                            </ul>
                            <p>Guests are happy when staff are happy.</p>
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            7. Design for an outdoor or rooftop restaurant
                          </h3>
                          <p>We can make magic happen in an open space.</p>
                          <p>
                            Lighting on the roof...
                            <br />
                            Soft chairs... <br /> A warm breeze...
                          </p>
                          <p>
                            The mood was just right for the evening. <br />{" "}
                            There aren't many more beautiful things.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            8. Turnkey Restaurant Interior Design
                          </h3>
                          <p>
                            You don't have to deal with more than one vendor.
                          </p>
                          <p>
                            We handle everything:
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>3D designs</NavLink>
                              </li>
                              <li>
                                <NavLink>Furniture</NavLink>
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
                                <NavLink>Painting</NavLink>
                              </li>
                              <li>
                                <NavLink>Decor</NavLink>
                              </li>
                              <li>
                                <NavLink>Planning the kitchen</NavLink>
                              </li>
                              <li>
                                <NavLink>Final styling</NavLink>
                              </li>
                            </ul>
                            <p>
                              Everything is done carefully and consistently.
                            </p>
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Process for Designing with People in Mind
                        </h2>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: Getting to Know Your Vision
                          </h3>
                          <p>
                            We sit down with you and learn about your story,
                            your dream, and what makes your restaurant unique.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: Making Plans and Ideas
                          </h3>
                          <p>
                            We come up with ideas for layouts, themes, and
                            moods.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: Make 3D Designs
                          </h3>
                          <p>
                            You can see the whole look before we start working.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: Do it
                          </h3>
                          <p>Everything is made with care and love.</p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 5: The Last Setup
                          </h3>
                          <p>
                            Balance of decor and lighting, warm touches.
                            Everything looks great.
                          </p>
                        </div>
                      </div>
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "28px" }}
                      >
                        Why Do Restaurants Believe Us
                      </h2>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We care about how you feel, not just how you
                                  look.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We care about how our guests feel.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We don't just design for looks; we also design
                                  for comfort.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We build a strong brand image.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Talking to each other in a friendly way.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>Doing things on time.</NavLink>
                              </li>
                              <li>
                                <NavLink>Service from start to finish.</NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  Designs that make you feel at home.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We don't just make the inside of a restaurant.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>We make a space that people will remember.</p>
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
                              restaurant in Delhi?
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
                              It depends on how big, what the theme is, what
                              materials are used, and how hard it is. After we
                              understand what you need, we send you a clear
                              quote.
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
                              How long does it take to work on the inside of a
                              restaurant?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It usually takes 5 to 12 weeks, but it depends on
                              the size.
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
                              Do you make cloud kitchens and small cafés?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, we design cafés, small restaurants, fine
                              dining rooms, and restaurants with more than one
                              floor.
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
                              Will you help me pick out furniture?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, of course. We choose everything, from the
                              chairs and tables to the lighting and decor.
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
                              Do you take care of the whole project?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes. We offer full-service restaurant interior
                              design.
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
                              Are you able to design with a certain theme in
                              mind?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, of course. We can make any theme you can
                              think of come to life.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are You Ready To Open a Restaurant That People Will Love?
                  </h2>
                  <p>
                    A restaurant is more than just a place to eat.
                    <br />
                    People make memories, celebrate events, and find comfort
                    there.
                  </p>
                  <p>
                    <ul className="list-angle-right anchor-line">
                      Let's make a space that is warm, soulful, and
                      unforgettable.
                      <li>
                        <NavLink>Set up a friendly meeting</NavLink>
                      </li>
                      <li>
                        <NavLink> ask for a custom quote, and</NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Call our restaurant interior expert today
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
