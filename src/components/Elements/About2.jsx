import React from "react";
import { NavLink } from "react-router-dom";

var bgimg1 = require("./../../images/background/bg5.webp");
var bgimg2 = require("./../../images/background/cross-line2.png");

class About2 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 ">
                  <div
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                  ></div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="about-home-2">
                    <h1 className="m-t0 sx-tilte" style={{ fontSize: "38px" }}>
                      About ANG InDesign
                    </h1>
                    <p>
                      <b>
                        <i>
                          Interiors that are well thought out and designed with
                          honesty, clarity, and real care.
                        </i>
                      </b>
                    </p>
                    <p>
                      We at Angin Design think that a home or office should be
                      simple, warm, and easy to use, not too much. We don't
                      think that interior design is about putting expensive
                      things in rooms. It's about knowing how people live, work,
                      relax, and what makes them feel at ease.
                    </p>
                    <div className="text-left">
                      <NavLink to={"/contact-us"} className="site-button-link">
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-t50">
                <p>
                  Be honest when you deliver We don't believe in long,
                  complicated explanations or big promises. We believe in design
                  that is clear, useful, and comfortable, and that feels natural
                  and lasts a long time.
                </p>
                <p>
                  We have years of experience designing homes and businesses, so
                  our approach is simple:
                  <ul className="list-angle-right anchor-line">
                    <li>
                      <NavLink>First, listen.</NavLink>
                    </li>
                    <li>
                      <NavLink>Get a deep understanding.</NavLink>
                    </li>
                    <li>
                      <NavLink>Think about your design.</NavLink>
                    </li>
                    <li>
                      <NavLink>Do it right.</NavLink>
                    </li>
                  </ul>
                </p>
                <p>
                  We do a lot of different kinds of work, like building homes,
                  offices, salons, restaurants, modular interiors, wooden work,
                  kitchen spaces, hospitality projects, and more. We take our
                  time, pay attention to details, and really want to make the
                  space better for the people who will use it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="service-single-block m-b30">
                    <h2 className="m-t30 sx-tilte" style={{ fontSize: "32px" }}>
                      What We Believe About Design
                    </h2>
                    <div>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        1. Design for People
                      </h3>
                      <p>
                        We don't design based on trends or templates; we design
                        based on how you live.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        2. Useful and Pretty
                      </h3>
                      <p>
                        A good design should look good and work well. We
                        carefully balance both.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        3. Honest Advice
                      </h3>
                      <p>
                        We give clear, honest advice about materials, layouts,
                        and budgets without any pressure.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        4. Clean and Organized Execution
                      </h3>
                      <p>
                        Every little thing is taken care of carefully, so you
                        can have a smooth and stress-free time.
                      </p>
                    </div>
                    <div>
                      <h3
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        5. Thinking About The Long Term
                      </h3>
                      <p>
                        We create spaces that look good and last for years, not
                        just days.
                      </p>
                    </div>

                    <div className="service-single-block m-b30">
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "32px" }}
                      >
                        Why Customers Choose Us
                      </h2>
                      <p>
                        <ul className="list-angle-right anchor-line">
                          <li>
                            <NavLink>
                              Communication that is warm and friendly
                            </NavLink>
                          </li>
                          <li>
                            <NavLink>Clear prices</NavLink>
                          </li>
                          <li>
                            <NavLink>Designs made just for you</NavLink>
                          </li>
                          <li>
                            <NavLink>A good understanding of materials</NavLink>
                          </li>
                          <li>
                            <NavLink>Team with experience</NavLink>
                          </li>
                          <li>
                            <NavLink>Doing things on time</NavLink>
                          </li>
                          <li>
                            <NavLink>Service from start to finish</NavLink>
                          </li>
                          <li>
                            <NavLink>A personal touch in every choice</NavLink>
                          </li>
                        </ul>
                      </p>
                      <p>
                        Angin Design is more than just a design studio. It's a
                        place where <b> design and thoughtfulness </b>come
                        together, and every project is treated with care and
                        respect.
                      </p>
                    </div>

                    <div className="service-single-block m-b30">
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "32px" }}
                      >
                        Our Goal
                      </h2>
                      <p>
                        To make spaces that are balanced, comfortable, and
                        meaningful spaces that make your everyday life better
                        with warmth and simplicity.
                      </p>
                    </div>

                    <div className="service-single-block m-b30">
                      <h2
                        className="m-t30 sx-tilte"
                        style={{ fontSize: "32px" }}
                      >
                        What We Believe
                      </h2>
                      <p>
                        <ul className="list-angle-right anchor-line">
                          <li>
                            <NavLink>Clear</NavLink>
                          </li>
                          <li>
                            <NavLink>Truthfulness</NavLink>
                          </li>
                          <li>
                            <NavLink>Comfort </NavLink>
                          </li>
                          <li>
                            <NavLink>Functionality</NavLink>
                          </li>
                          <li>
                            <NavLink>Respect</NavLink>
                          </li>
                          <li>
                            <NavLink>Dedication</NavLink>
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="service-single-block m-b30">
                      <h2
                        className="m-t10 sx-tilte"
                        style={{ fontSize: "24px" }}
                      >
                        Let's work together to make something beautiful.
                      </h2>
                      <p>
                        We are here to help you every step of the way, whether
                        it's in your home, office, or any other space.
                      </p>
                      <p>
                        - Get in touch with our design team.
                        <br />- Set up a free consultation. Begin Your Interior
                        Journey Today
                      </p>
                    </div>
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

export default About2;
