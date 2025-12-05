import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import About2 from "./../Elements/About2";
import Testimonials2 from "../Elements/Testimonials2";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/5.jpg");

class About1 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }
  render() {
    return (
      <>
        <Helmet>
          <title>About ANG Indesign | Best Interior Designers in Delhi</title>
          <meta
            name="description"
            content="Discover the story behind ANG Indesign, one of Delhi’s most trusted interior design studios delivering modern, functional and elegant spaces."
          />
          <meta
            name="keywords"
            content="about ang indesign, interior design studio delhi, interior designer profile"
          />
          <meta name="author" content="ANG Indesign" />
          <meta name="copyright" content="ANG Indesign" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://angindesign.com/about" />

          {/* <!-- Open Graph (OG) Tags --> */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANG Indesign" />
          <meta property="og:url" content="https://angindesign.com/about" />
          <meta
            property="og:title"
            content="About ANG Indesign | Best Interior Designers in Delhi"
          />
          <meta
            property="og:description"
            content="Learn about ANG Indesign commitment to modern, functional and creative interior design solutions in Delhi."
          />
          <meta
            property="og:image"
            content="https://angindesign.com/assets/5-BIyVfrPY.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1080" />
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="About Company"
            pagename="About"
            description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
            bgimage={bnrimg}
          />
          <About2 />
          <Testimonials2 separatoralignment="separator-left" />
        </div>
        <Footer />
      </>
    );
  }
}

export default About1;
