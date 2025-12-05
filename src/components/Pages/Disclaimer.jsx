import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";

import { Helmet } from "react-helmet-async";
import Disclaimer1 from "../Elements/Disclaimer1";

var bnrimg = require("./../../images/banner/11.jpg");

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | ANG Indesign</title>
        <meta
          name="description"
          content="Read the Disclaimer of ANG Indesign detailing limitations of liability, accuracy of information and usage responsibilities."
        />
        <meta
          name="keywords"
          content="disclaimer, legal disclaimer, ang indesign disclaimer, limitation of liability"
        />
        <meta name="author" content="ANG Indesign" />
        <meta name="copyright" content="ANG Indesign" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://angindesign.com/disclaimer" />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ANG Indesign" />
        <meta property="og:url" content="https://angindesign.com/disclaimer" />
        <meta property="og:title" content="Disclaimer | ANG Indesign" />
        <meta
          property="og:description"
          content="View the official Disclaimer of ANG Indesign explaining information accuracy, liability limitations and user obligations."
        />
      </Helmet>
      <Header />
      <div className="page-content">
        <Banner
          title="Disclaimer"
          pagename="Disclaimer"
          description="Read the official Disclaimer for ANG Indesign outlining limitations of liability, website usage guidelines, and important legal information for all visitors and clients."
          bgimage={bnrimg}
        />

        <Disclaimer1 />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
