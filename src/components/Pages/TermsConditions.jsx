import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
// import Gallery1 from "../Elements/Gallery";
import TermsConditions1 from "../Elements/TermsConditions1";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/11.jpg");

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | ANG Indesign</title>
        <meta
          name="description"
          content="Review the Terms & Conditions of ANG Indesign outlining service usage, responsibilities, limitations and legal guidelines."
        />
        <meta
          name="keywords"
          content="terms and conditions, ang indesign terms, website terms, usage policy"
        />
        <meta name="author" content="ANG Indesign" />
        <meta name="copyright" content="ANG Indesign" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://angindesign.com/terms-and-conditions"
        />

        {/* Open Graph Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ANG Indesign" />
        <meta
          property="og:url"
          content="https://angindesign.com/terms-and-conditions"
        />
        <meta property="og:title" content="Terms & Conditions | ANG Indesign" />
        <meta
          property="og:description"
          content="Read the Terms & Conditions of ANG Indesign including rules, user responsibilities, and service guidelines."
        />
      </Helmet>
      <Header />
      <div className="page-content">
        <Banner
          title="Terms & Conditions"
          pagename="Terms & Conditions"
          description="Read the official Terms & Conditions outlining service policies, responsibilities, and usage guidelines."
          bgimage={bnrimg}
        />

        <TermsConditions1 />
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
