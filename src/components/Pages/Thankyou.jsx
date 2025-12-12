import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Thankyou1 from "../Elements/Thankyou1";
import { Helmet } from "react-helmet-async";

const Thankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | ANG Indesign</title>
        <meta
          name="description"
          content="Thank you for contacting ANG Indesign. Our team will get back to you shortly with the best interior design solutions."
        />
        <meta
          name="keywords"
          content="thank you, ang indesign, form submitted"
        />
        <meta name="author" content="ANG Indesign" />
        <meta name="copyright" content="ANG Indesign" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://angindesign.com/thank-you" />
      </Helmet>
      <Header />
      <Thankyou1 />
      <Footer />
    </>
  );
};

export default Thankyou;
