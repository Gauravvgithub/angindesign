import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import Gallery1 from "../Elements/Gallery";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/11.jpg");

class Gallery extends React.Component {
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
          <title>Interior Design Gallery | ANG InDesign Delhi</title>
          <meta
            name="description"
            content="Explore ANG InDesign’s interior design gallery featuring luxury home, office, restaurant and commercial spaces crafted with creativity and precision."
          />
          <meta
            name="keywords"
            content="interior gallery delhi, design gallery, interior portfolio"
          />

          {/* <link rel="canonical" href="https://angindesign.vercel.app/gallery" /> */}

          <meta
            property="og:title"
            content="Interior Design Gallery | ANG InDesign"
          />
          <meta
            property="og:description"
            content="Browse stunning interior designs created for homes and commercial spaces in Delhi."
          />
          {/* <meta
            property="og:url"
            content="https://angindesign.vercel.app/gallery"
          /> */}

          <meta name="twitter:title" content="Interior Design Gallery" />
          <meta
            name="twitter:description"
            content="Luxury interiors designed by ANG InDesign for homes and commercial spaces."
          />
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Gallery"
            pagename="Gallery"
            description="Discover our blend of creativity, precision, and timeless design."
            bgimage={bnrimg}
          />
          <Gallery1 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Gallery;
