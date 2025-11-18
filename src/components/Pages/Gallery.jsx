import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import Gallery1 from "../Elements/Gallery";

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
