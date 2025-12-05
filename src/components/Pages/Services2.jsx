import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import Services1 from "./../Elements/Services1";
// import About3 from './../Elements/About3';
import Statistics1 from "./../Elements/Statistics1";
import Testimonials2 from "./../Elements/Testimonials2";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/13.jpg");

class Service2 extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Best Interior Designer Services in Delhi | ANG Indesign</title>
          <meta
            name="description"
            content="Explore all interior design services by ANG Indesign in Delhi, including residential, commercial, office, restaurant, salon, bar and modular kitchen solutions."
          />
          <meta
            name="keywords"
            content="interior design services delhi, residential interior design delhi, commercial interior design delhi, office interior designer delhi, restaurant interior design delhi, salon interior design delhi, bar interior design delhi, modular kitchen delhi, ang indesign"
          />
          <meta name="author" content="ANG Indesign" />
          <meta name="copyright" content="ANG Indesign" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://angindesign.com/services" />

          {/* <!-- Open Graph (OG) Tags --> */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANG Indesign" />
          <meta property="og:url" content="https://angindesign.com/services" />
          <meta
            property="og:title"
            content="Best Interior Designer Services in Delhi | ANG Indesign"
          />
          <meta
            property="og:description"
            content="Explore all interior design services by ANG Indesign in Delhi, including residential, commercial, office, restaurant, salon, bar and modular kitchen solutions."
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
          <Banner
            title="Our Services"
            pagename="Services"
            description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
            bgimage={bnrimg}
          />
          <Services1 />
          {/* <About3 bgcolor="bg-white" /> */}
          <Statistics1 />
          <Testimonials2 separatoralignment="separator-left" />
        </div>

        <Footer />
      </>
    );
  }
}

export default Service2;
