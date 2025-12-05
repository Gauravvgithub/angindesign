import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
// import Gallery1 from "../Elements/Gallery";
import Privacy1 from "../Elements/Privacy1";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/11.jpg");

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ANG Indesign</title>
        <meta
          name="description"
          content="Read the Privacy Policy of ANG Indesign to understand how we collect, use, protect and handle your personal information responsibly."
        />
        <meta
          name="keywords"
          content="privacy policy, ang indesign privacy, data protection, user information policy"
        />
        <meta name="author" content="ANG Indesign" />
        <meta name="copyright" content="ANG Indesign" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://angindesign.com/privacy-policy" />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ANG Indesign" />
        <meta
          property="og:url"
          content="https://angindesign.com/privacy-policy"
        />
        <meta property="og:title" content="Privacy Policy | ANG Indesign" />
        <meta
          property="og:description"
          content="Learn how ANG Indesign collects, uses and protects your personal data through our Privacy Policy."
        />
      </Helmet>
      <Header />
      <div className="page-content">
        <Banner
          title="Privacy Policy"
          pagename="Privacy Policy"
          description="Explore ANG Indesign’s Privacy Policy to understand how we collect, use, safeguard, and manage your personal information in compliance with data protection standards."
          bgimage={bnrimg}
        />

        <Privacy1 />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
