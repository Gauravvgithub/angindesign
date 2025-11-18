import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiBriefcase,
  FiCoffee,
  FiScissors,
  FiGrid,
  FiBookOpen,
  FiLayers,
} from "react-icons/fi";

const services = [
  {
    count: "01",
    title: "Residential",
    link: "/services/residential",
    icon: <FiHome size={50} />,
    description: "We design stylish and functional home interiors...",
  },
  {
    count: "02",
    title: "Commercial",
    link: "/services/commercial",
    icon: <FiShoppingBag size={50} />,
    description: "We create inspiring commercial environments...",
  },
  {
    count: "03",
    title: "Office",
    link: "/services/office",
    icon: <FiBriefcase size={50} />,
    description: "We design stylish office spaces...",
  },
  {
    count: "04",
    title: "Restaurant",
    link: "/services/restaurant",
    icon: <FiCoffee size={50} />,
    description: "Modern and aesthetic restaurant interiors...",
  },
  {
    count: "05",
    title: "Salon",
    link: "/services/salon",
    icon: <FiScissors size={50} />,
    description: "Luxury salon interior designs...",
  },
  {
    count: "06",
    title: "Bar",
    link: "/services/bar",
    icon: <FiGrid size={50} />,
    description: "Stylish bar interiors...",
  },
  {
    count: "07",
    title: "Consultancy",
    link: "/services/consultancy",
    icon: <FiBookOpen size={50} />,
    description: "Professional interior design consultancy...",
  },
  {
    count: "08",
    title: "Modular Wooden Work",
    link: "/services/modular-wooden-work",
    icon: <FiLayers size={50} />,
    description: "Complete modular wooden work solutions...",
  },
];

var bgimg1 = require("./../../images/background/cross-line2.png");

class Services1 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
          <div className="section-content">
            <div className="container">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-left">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                  >
                    <h3 className="sep-line-one ">All Services</h3>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-6 col-sm-12 m-b30" key={index}>
                    <div className="sx-icon-box-wraper icon-count-2-outer h-100">
                      <div className="icon-count-2 bg-white h-100">
                        <span className="icon-count-number">{item.count}</span>
                        <div className="icon-xl inline-icon m-b5 scale-in-center">
                          <span className="icon-cell">{item.icon}</span>
                        </div>
                        <div className="icon-content">
                          <h4 className="sx-tilte">{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="text-left">
                            <NavLink
                              to={item.link}
                              className="site-button-link"
                            >
                              Read More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase">
            <strong>Services</strong>
          </div>
        </div>
      </>
    );
  }
}

export default Services1;
