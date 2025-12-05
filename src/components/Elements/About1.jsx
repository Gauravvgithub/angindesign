import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img1 from "../../images/about-slider/1.webp";
import img2 from "../../images/about-slider/2.webp";
import img3 from "../../images/about-slider/3.webp";
import img4 from "../../images/about-slider/4.webp";
import img5 from "../../images/about-slider/5.webp";
import img6 from "../../images/about-slider/6.webp";

import bgimg1 from "../../images/background/bg-4.png";
import bgimg2 from "../../images/background/cross-line2.png";
import aboutAb from "../../images/about-slider/1-ab.webp"; // for bottom image

const images = [
  { src: img1, alt: "Modern luxury salon interior with pink chairs and mirrors." },
  { src: img2, alt: "Modern luxury bar interior with warm lighting and stylish seating." },
  { src: img3, alt: "Modern restaurant interior with wooden furniture and indoor plants." },
  { src: img4, alt: "Modern open office with clean desks, computers and bright ceiling lights." },
  { src: img5, alt: "Modern office lounge with red chairs, grey sofa and stylish décor." },
  { src: img6, alt: "Modern dining room with round table, yellow chairs and warm ceiling lights." },
];

class About1 extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      margin: 30,
      nav: true,
      dots: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
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
                    The Best Interior Designer in Delhi Thoughtful interiors for
                    modern life
                  </h3>
                  <p>
                    At <b>Angin Design</b>, we design interiors that are
                    comfortable, useful, and well-balanced. As a reliable
                    interior designer in Delhi, we focus on clean planning,
                    smart layouts, and simple, timeless designs that fit in with
                    your daily life.
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
                            <img src={item.src} alt={item.alt} />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>

                  <div className="about-home-before">
                    <img src={aboutAb} alt="Stylish living room interior with sofa, décor pieces and soft lighting." />
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
