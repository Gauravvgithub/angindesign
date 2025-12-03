import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Slider1 from "./../Elements/Slider1";
import About1 from "./../Elements/About1";
import WhatWeDo1 from "./../Elements/WhatWeDo1";
import Testimonials1 from "./../Elements/Testimonials1";
import Services1 from "./../Elements/Services1";
import Projects1 from "./../Elements/Projects1";
import { Helmet } from "react-helmet-async";

class Home1 extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Best Interior Designer in Delhi | ANG InDesign</title>
          <meta
            name="description"
            content="Looking for the best interior designer in Delhi? ANG InDesign creates luxury, modern and fully customized interiors for homes, offices and commercial spaces."
          />
          <meta
            name="keywords"
            content="interior designer delhi, best interior designer, interior design company delhi, home interior designer delhi"
          />

          {/* <link rel="canonical" href="https://angindesign.vercel.app/" /> */}

          <meta
            property="og:title"
            content="Best Interior Designer in Delhi | ANG InDesign"
          />
          <meta
            property="og:description"
            content="Premium interior design services in Delhi for homes, offices and commercial spaces. Modern, elegant and custom-designed solutions."
          />
          {/*  <meta property="og:url" content="https://angindesign.vercel.app/" /> */}
          <meta property="og:type" content="website" />

          <meta
            name="twitter:title"
            content="Best Interior Designer in Delhi | ANG InDesign"
          />
          <meta
            name="twitter:description"
            content="Modern, luxury and fully customized interior design solutions in Delhi. Designed for your lifestyle."
          />
        </Helmet>
        <Header />
        <div className="page-content">
          <Slider1 />
          <About1 />
          <WhatWeDo1 />
          <Testimonials1 />
          <Services1 />
          <Projects1 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home1;
