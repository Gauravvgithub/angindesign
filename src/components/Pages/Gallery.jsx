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
          <title>Interior Design Gallery | ANG Indesign Delhi</title>
<meta name="description" content="Explore ANG Indesign interior design gallery featuring luxury home, office, restaurant and commercial spaces crafted with creativity and precision." />
<meta name="keywords" content="interior gallery delhi, design gallery, interior portfolio" />
<meta name="author" content="ANG Indesign" />
<meta name="copyright" content="ANG Indesign" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://angindesign.com/gallery" />

{/* <!-- Open Graph (OG) Tags --> */}
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="ANG Indesign" />
<meta property="og:url" content="https://angindesign.com/gallery" />
<meta property="og:title" content="Interior Design Gallery | ANG Indesign" />
<meta property="og:description" content="Browse stunning interior designs created for homes and commercial spaces in Delhi." />
<meta property="og:image" content="https://angindesign.com/assets/11-B0Joe8MG.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1920" />
<meta property="og:image:height" content="753" />

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
