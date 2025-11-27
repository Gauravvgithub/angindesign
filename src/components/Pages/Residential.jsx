import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import ReactPlayer from "react-player";

var bnrimg = require("./../../images/services/residential/banner.webp");
var bgimg1 = require("./../../images/services/residential/bg1.webp");
var bgimg2 = require("./../../images/services/residential/bg2.webp");

class Residential extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner
            title="Residential Interior Design"
            pagename="Residential Interior Design"
            description="We deliver innovative residential interior designs that are tailored to your lifestyle and preferences."
            bgimage={bnrimg}
          />
          {/* SECTION CONTENT START */}
          <div className="section-full p-t80 p-b50 mobile-page-padding">
            <div className="container">
              {/* GALLERY CONTENT START */}
              <div className="row">
                <div className="col-lg-4 col-md-12"
                  style={{
                    position: "sticky",
                    top: "120px",
                    alignSelf: "flex-start",
                    height: "fit-content",
                    zIndex: 5,
                  }}>
                  <div className="about4-section m-b20 bg-gray p-a20">
                    <div className="widget widget_services">
                      <h4 className="widget-title">More Services</h4>
                      <ul className="bg-white">
                        <li>
                          <NavLink to={"/services/commercial"}>
                            Commercial
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
                        Residential Interior Designer in Delhi
                      </h1>
                      <p>
                        Every house has its heartbeat. It's where you unwind
                        after a long day, celebrate small wins, make memories,
                        and be yourself. That's why designing a home isn't just
                        about picking out furniture or colors; it's also about
                        making a space that feels warm, comfortable, and
                        important.
                      </p>
                      <p>
                        At Angin Design, our{" "}
                        <b>
                          {" "}
                          residential interior design services in Delhi, NCR{" "}
                        </b>
                        revolve around one simple idea:{" "}
                        <b>
                          {" "}
                          Your home should make you feel at ease the moment you
                          walk in.{" "}
                        </b>{" "}
                        <br />
                        We hear you, learn about your life, and notice what
                        matters to you. Then we design a home that fits
                        naturally into your daily life. No complications, no
                        fancy jargon, just honest, thoughtful design.
                      </p>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          A Home Designed Around You
                        </h2>
                        <p>
                          Everyone has their style when it comes to the inside
                          of their home. Some people like spaces that are clean
                          and peaceful, while others like spaces that are
                          colorful, patterned, and somewhat dramatic. Some
                          people like luxury, some like simplicity, and some
                          like a mix of the two.
                        </p>
                        <p>
                          It's not our job to make you follow a certain design
                          style; it's our job to figure out what makes you feel
                          good.
                        </p>
                        <p>
                          We talk to you about your daily life, goals, dislikes,
                          and inspirations. Then we slowly create a space that
                          feels like an extension of who you are.
                        </p>
                        <p>
                          <i>
                            "No need to hurry or feel rushed; just work
                            together."
                          </i>
                        </p>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          What We Do for Residential Interior Design
                        </h2>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Designing a Living Room
                          </h3>
                          <p>
                            Most of your memories will happen in your living
                            room. It's where people laugh, guests come, and
                            families get closer.
                          </p>
                          <p>
                            We make living rooms that are warm, welcoming, and
                            perfectly balanced—places where you want to spend
                            time.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Designing a Bedroom
                          </h3>
                          <p>
                            Your bedroom should be a safe place where you can
                            relax and get some sleep.
                          </p>
                          <p>
                            With careful lighting, calming colors, useful
                            storage, and a layout that doesn't feel cluttered or
                            overwhelming, we make bedrooms that help you relax.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Design for a Modular Kitchen
                          </h3>
                          <p>
                            When everything is simple to get to and every inch
                            of space works for you, the kitchen is a lot more
                            fun.
                          </p>
                          <p>
                            We make modular kitchens that are smart,
                            well-organized, long-lasting, and simple to clean.
                            Cooking is easier, faster, and more fun.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Designing the Interior of a Bathroom
                          </h3>
                          <p>
                            Bathrooms may be the smallest rooms in the house,
                            but they have a big effect.
                          </p>
                          <p>
                            A well-designed bathroom can make your mornings feel
                            better and your evenings more relaxing. We make
                            bathrooms look clean, modern, and like a hotel, but
                            they are still useful.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            - Full Home Interiors
                          </h3>
                          <p>
                            We take care of everything from start to finish if
                            you want to entirely change your home.
                          </p>
                          <p>
                            You don't have to worry about anything, from design
                            to materials to carpentry to decor. We take care of
                            everything and give you a home that's ready to move
                            into.
                          </p>
                        </div>
                      </div>

                      <div className="service-single-block m-b30">
                        <h2
                          className="m-t30 sx-tilte"
                          style={{ fontSize: "32px" }}
                        >
                          Our Easy, Stress-Free Design Process
                        </h2>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 1: We pay attention to what you say.
                          </h3>
                          <p>
                            We don't start with a sales pitch; we start with a
                            conversation.
                          </p>
                          <p>
                            We want to know how your home will feel. What do you
                            enjoy? What makes you insane? What gives you ideas?
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 2: We Show You the Vision
                          </h3>
                          <p>
                            We make ideas, themes, mood boards, and visuals once
                            we know what you like.
                          </p>
                          <p>
                            You can see exactly how your home will look, and
                            we'll make changes until it feels right to you.
                          </p>
                        </div>
                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 3: We Take Care of Building It
                          </h3>
                          <p>
                            Our team takes care of everything, from carpentry
                            and painting to electrical work and furniture.
                            Everything is done professionally.
                          </p>
                          <p>
                            We are open and honest, give regular updates, and
                            make sure there are no surprises.
                          </p>
                        </div>

                        <div>
                          <h3
                            className="m-t10 sx-tilte"
                            style={{ fontSize: "24px" }}
                          >
                            Step 4: We Style the Final Look
                          </h3>
                          <p>
                            The last step is when your home really comes to
                            life.
                          </p>
                          <p>
                            We add small details like plants, art, fabrics,
                            lighting, and decor that make your space feel warm
                            and complete.
                          </p>
                        </div>
                      </div>
                      <h4 className="m-t30 sx-tilte">
                        Why People Have Faith in Us
                      </h4>
                      <div className="single-service-list">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We take the time to learn about how you live.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We are honest and clear when we talk to each
                                  other.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We design from the heart, not the head.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We don't just offer quick fixes; we offer real
                                  solutions.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <ul className="list-angle-right anchor-line">
                              <li>
                                <NavLink>
                                  We have more than 20 years of experience on
                                  every project.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  We care about comfort, beauty, and usefulness
                                  over time.
                                </NavLink>
                              </li>
                              <li>
                                <NavLink>
                                  {" "}
                                  We stick to our budgets and deadlines.
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                              What services do you offer for designing the
                              interiors of homes?
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
                              We can help you plan, design, and decorate your
                              home with 3D visuals, furniture design, modular
                              kitchens, wardrobes, lighting, materials, and
                              more. We handle everything so you don't have to
                              deal with many different people.
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
                              Could you please let me know the typical duration
                              for completing a project inside a house?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              It depends on how big your house is. It could take
                              a few weeks for one room and a few months for the
                              whole house. But don't worry, we make a clear plan
                              at the beginning and stick to it.
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
                              Am I able to pick my own materials and finishes?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, of course! You should pick what you love
                              because it's your home. We give you choices,
                              compare the quality of different options, and
                              provide suggestions, but you always make the final
                              choice.
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
                              What if I don't know what my style is?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFour5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Don't worry; most people don't. We help you find
                              your style by showing you examples, themes, and
                              ideas until something "clicks" for you. It's a fun
                              and easy process.
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
                              Do you have designs for people with different
                              budgets?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseFive5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, for sure. We work with a wide range of
                              budgets and give you real choices that don't
                              sacrifice beauty or comfort.
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
                              Do you offer services outside of your country?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseSix5" className="acod-body collapse">
                          <div className="acod-content p-a15">
                            <p>
                              Yes, sir. We assist clients worldwide by
                              facilitating online conversations and providing
                              them with comprehensive design plans that are
                              adaptable to any location.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="m-t10 sx-tilte" style={{ fontSize: "24px" }}>
                    Are you ready to make a home you'll really love?
                  </h2>
                  <p>
                    We're here to help you find a home that feels warm,
                    welcoming, and made just for you.
                  </p>
                  <p>
                    {" "}
                    Don't worry. Don't worry. The design is honest and
                    incorporates a personal touch.
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

export default Residential;
