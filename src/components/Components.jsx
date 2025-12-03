import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home1 from "./Pages/Home1";
import About1 from "./Pages/About1";
import Gallery from "./Pages/Gallery";
import Services1 from "./Pages/Services1";
import Services2 from "./Pages/Services2";
import ServiceDetail from "./Pages/ServiceDetail";
import Team1 from "./Pages/Team1";
import OurHistory from "./Pages/OurHistory";
import Error from "./Pages/Error";
import ProjectGrid5 from "./Pages/ProjectGrid5";
import BlogGrid from "./Pages/BlogGrid";
import BlogSingle from "./Pages/BlogSingle";
import Faq from "./Pages/Faq";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "./Common/ScrollToTop";
import Residential from "./Pages/Residential";
import Commercial from "./Pages/Commercial";
import Office from "./Pages/Office";
import Salon from "./Pages/Salon";
import Bar from "./Pages/Bar";
import Consultancy from "./Pages/Consultancy";
import Restaurant from "./Pages/Restaurant";
import ModularWoodenWork from "./Pages/Modular-wooden-work";

class Components extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <ScrollToTop />
        <div className="page-wraper">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services-1" element={<Services1 />} />
            <Route path="/services" element={<Services2 />} />
            <Route path="/services-detail" element={<ServiceDetail />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/office" element={<Office />} />
            <Route path="/services/salon" element={<Salon />} />
            <Route path="/services/bar" element={<Bar />} />
            <Route path="/services/restaurant" element={<Restaurant />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route
              path="/services/modular-wooden-work"
              element={<ModularWoodenWork />}
            />
            <Route path="/team-1" element={<Team1 />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/error-404" element={<Error />} />
            <Route path="/projects" element={<ProjectGrid5 />} />
            <Route path="/blogs" element={<BlogGrid />} />
            <Route path="/blogs/:slug" element={<BlogSingle />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
           <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Components;
