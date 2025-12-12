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
          <title>Best Interior Designer in Delhi | ANG Indesign</title>

          <meta
            name="google-site-verification"
            content="dJT-425IfLD5VCaT_yeUQR7BWTlzsys4uAIa4-C7nrk"
          />

          <meta
            name="description"
            content="Looking for the best interior designer in Delhi? ANG Indesign   creates luxury, modern and fully customized interiors for homes, offices and commercial spaces."
          />
          <meta
            name="keywords"
            content="interior designer delhi, best interior designer, interior design company delhi, home interior designer delhi"
          />
          <meta name="author" content="ANG Indesign" />
          <meta name="copyright" content="ANG Indesign" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://angindesign.com/" />

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANG Indesign" />
          <meta property="og:url" content="https://angindesign.com/" />
          <meta
            property="og:title"
            content="Best Interior Designer in Delhi | ANG Indesign"
          />
          <meta
            property="og:description"
            content="Premium interior design services in Delhi for homes, offices and commercial spaces. Modern, elegant and custom-designed solutions."
          />
          <meta
            property="og:image"
            content="https://angindesign.com/assets/slide1-BZ12ecq5.webp"
          />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:width" content="2000" />
          <meta property="og:image:height" content="1198" />
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
