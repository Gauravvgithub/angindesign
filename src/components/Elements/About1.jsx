import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img1 from "../../images/about-slider/1.jpg";
import img2 from "../../images/about-slider/2.jpg";
import img3 from "../../images/about-slider/3.jpg";
import img4 from "../../images/about-slider/4.jpg";
import img5 from "../../images/about-slider/5.jpg";
import img6 from "../../images/about-slider/6.jpg";

import bgimg1 from "../../images/background/bg-4.png";
import bgimg2 from "../../images/background/cross-line2.png";
import aboutAb from "../../images/about-slider/1-ab.jpg"; // for bottom image

const images = [img1, img2, img3, img4, img5, img6];

class About1 extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      margin: 30,
      nav: true,
      dots: true,
      navText: [
        `
  <svg width="30" height="30" viewBox="0 0 40 40" 
       style="display:flex;align-items:center;justify-content:center;"
       xmlns="http://www.w3.org/2000/svg">

    <!-- Left Arrow (Bold + Centered) -->
    <path d="M22 10 L12 20 L22 30"
          stroke="black"
          stroke-width="3.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round" />
  </svg>
  `,

        `
  <svg width="30" height="30" viewBox="0 0 40 40" 
       style="display:flex;align-items:center;justify-content:center;"
       xmlns="http://www.w3.org/2000/svg">

    <!-- Right Arrow (Bold + Centered) -->
    <path d="M18 10 L28 20 L18 30"
          stroke="black"
          stroke-width="3.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round" />
  </svg>
  `,
      ],
      responsive: {
        0: { items: 1 },
        991: { items: 1 },
      },
    };

    return (
      <div
        className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left"
        style={{ backgroundImage: `url(${bgimg1})` }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="sx-separator-outer separator-left">
              <div
                className="sx-separator bg-white bg-moving bg-repeat-x"
                style={{ backgroundImage: `url(${bgimg2})` }}
              >
                <h3 className="sep-line-one">About us</h3>
              </div>
            </div>
          </div>

          {/* TITLE END */}
          <div className="section-content">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="about-home-left">
                  <h3 className="m-t0 sx-tilte">
                    We Create Inspiring & Functional Interior Design Solutions
                  </h3>
                  <p>
                    At <strong>ANG Interior Design</strong>, we specialize in
                    transforming spaces into elegant and functional
                    environments. Our expertise covers a wide range of projects
                    — from <strong>residential homes</strong> and{" "}
                    <strong>commercial offices</strong>
                    to <strong>restaurants, salons, bars</strong>, and{" "}
                    <strong>consultancy spaces</strong>.
                    <br />
                    <br />
                    We also provide complete{" "}
                    <strong>furniture solutions</strong> including{" "}
                    <strong>
                      modular kitchens, wardrobes, beds, study tables,
                    </strong>
                    and <strong>temples</strong> — all customized to suit your
                    taste, lifestyle, and space requirements.
                  </p>
                  <div className="text-left">
                    <NavLink
                      to="/about"
                      className="site-button-secondry btn-half"
                    >
                      <span>Read More</span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="about-home-right">
                  <OwlCarousel
                    className="owl-carousel about-home number-slider owl-btn-vertical-center"
                    {...options}
                  >
                    {images.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="sx-img-effect zoom-slow">
                          <NavLink to="/about">
                            <img src={item} alt="" />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>

                  <div className="about-home-before">
                    <img src={aboutAb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
