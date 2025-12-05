// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import Loader from "../Elements/Loader";
// import Header from "../Common/Header";
// import Footer from "../Common/Footer";
// import Banner from "../Elements/Banner";

// const bgimg1 = require("./../../images/background/cross-line.png");
// const bnrimg = require("./../../images/banner/15.jpg");

// const categoryMap = {
//   residential: "cat-1",
//   commercial: "cat-2",
//   office: "cat-3",
//   restaurant: "cat-4",
//   salon: "cat-5",
//   bar: "cat-6",
//   consultancy: "cat-7",
// };

// // const filters = [
// //   { label: "All", value: "*" },
// //   { label: "Residential", value: ".cat-1" },
// //   { label: "Commercial", value: ".cat-2" },
// //   { label: "Office", value: ".cat-3" },
// //   { label: "Restaurant", value: ".cat-4" },
// //   { label: "Salon", value: ".cat-5" },
// //   { label: "Bar", value: ".cat-6" },
// //   { label: "Consultancy", value: ".cat-7" },
// // ];

// const ProjectGrid5 = () => {
//   const [services, setServices] = useState([]);

//   // PAGINATION STATES
//   const [page, setPage] = useState(1);
//   const [limit] = useState(8); // items per page
//   const [totalPages, setTotalPages] = useState(1);

//   // Fetch Services with Pagination
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_API_URL}/service?page=${page}&limit=${limit}`
//         );

//         // console.log("", res.data);

//         if (Array.isArray(res.data.data)) {
//           setServices(res.data.data);
//           setTotalPages(res.data.pagination.totalPages);
//         }
//       } catch (err) {
//         console.error("Error fetching services:", err);
//       }
//     };

//     fetchServices();
//   }, [page]);

//   // Magnific Popup
//   useEffect(() => {
//     if (services.length === 0) return;

//     setTimeout(() => {
//       window.jQuery(".single-gallery").each(function () {
//         window.jQuery(this).magnificPopup({
//           delegate: ".mfp-link",
//           type: "image",
//           gallery: { enabled: true },
//           callbacks: {
//             elementParse: function (item) {
//               const isVideo = /\.(mp4|mov|webm)(\?.*)?$/i.test(item.src);
//               item.type = isVideo ? "iframe" : "image";
//             },
//           },
//         });
//       });
//     }, 500);
//   }, [services]);

//   return (
//     <>
//       <Header />

//       <div className="page-content">
//         <Banner
//           title="Our Projects"
//           pagename="Project Categories"
//           description="Explore our wide range of architectural and design services."
//           bgimage={bnrimg}
//         />
//       </div>

//       <div className="page-content">
//         <div className="section-full p-tb80 column-grid-4 inner-page-padding">
//           <div className="container">
//             <div className="section-head">
//               <div className="sx-separator-outer separator-center">
//                 <div
//                   className="sx-separator bg-white bg-moving bg-repeat-x"
//                   style={{ backgroundImage: "url(" + bgimg1 + ")" }}
//                 >
//                   <h3 className="sep-line-one">Our Projects</h3>
//                 </div>
//               </div>
//             </div>

//             {/* FILTER BUTTONS */}
//             {/* <div className="filter-wrap p-b30 text-center">
//               <ul className="filter-navigation masonry-filter clearfix">
//                 <li className="active">
//                   <NavLink to="#" className="btn from-top" data-filter="*">
//                     All
//                   </NavLink>
//                 </li>

//                 {filters.slice(1).map((item, index) => (
//                   <li key={index}>
//                     <NavLink
//                       to="#"
//                       className="btn from-top"
//                       data-filter={item.value}
//                     >
//                       {item.label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div> */}

//             {/* GRID */}
//             <ul className="masonry-outer row work-grid clearfix list-unstyled grid-5">
//               {services.length > 0 ? (
//                 services.map((item, index) => {
//                   const category = item.category?.toLowerCase();
//                   const filterClass = categoryMap[category] || "cat-1";

//                   const allMedia = Array.isArray(item.large_images)
//                     ? item.large_images
//                     : [];

//                   const imageFiles = allMedia.filter(
//                     (file) => !/\.(mp4|mov|webm)(\?.*)?$/i.test(file)
//                   );
//                   const videoFiles = allMedia.filter((file) =>
//                     /\.(mp4|mov|webm)(\?.*)?$/i.test(file)
//                   );

//                   const mediaFiles = [...videoFiles, ...imageFiles];

//                   const firstMedia =
//                     mediaFiles.length > 0
//                       ? mediaFiles[0]
//                       : require("./../../images/projects/portrait/pic1.jpg");

//                   const isVideo = /\.(mp4|mov|webm)(\?.*)?$/i.test(firstMedia);

//                   return (
//                     <div
//                       key={item._id || index}
//                       className={`${filterClass} masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30`}
//                     >
//                       <div className="sx-box image-hover-block single-gallery">
//                         {/* THUMBNAIL */}
//                         <div className="sx-thum-bx">
//                           {isVideo ? (
//                             <video
//                               src={firstMedia}
//                               autoPlay
//                               muted
//                               loop
//                               playsInline
//                               style={{
//                                 width: "100%",
//                                 height: "300px",
//                                 objectFit: "cover",
//                                 backgroundColor: "#000",
//                               }}
//                             />
//                           ) : (
//                             <img
//                               src={firstMedia}
//                               alt={item.service_title}
//                               onError={(e) => {
//                                 e.target.src = require("./../../images/projects/portrait/pic1.jpg");
//                               }}
//                               style={{
//                                 width: "100%",
//                                 height: "300px",
//                                 objectFit: "cover",
//                               }}
//                             />
//                           )}
//                         </div>

//                         <div className="sx-info p-t20 text-white">
//                           <h4 className="sx-tilte">{item.service_title}</h4>
//                           <p className="m-b0 text-capitalize">
//                             {item.category}
//                           </p>
//                         </div>

//                         {/* POPUPS */}
//                         <a
//                           className="mfp-link"
//                           href={firstMedia}
//                           data-type={isVideo ? "iframe" : "image"}
//                         >
//                           <i className="fa fa-arrows-alt" />
//                         </a>

//                         {mediaFiles.slice(1).map((file, idx) => {
//                           const isVid = /\.(mp4|mov|webm)(\?.*)?$/i.test(file);
//                           return (
//                             <a
//                               key={idx}
//                               className="mfp-link"
//                               href={file}
//                               style={{ display: "none" }}
//                               data-type={isVid ? "iframe" : "image"}
//                             />
//                           );
//                         })}
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p className="text-center w-100">
//                   Loading projects...
//                 </p>
//               )}
//             </ul>

//             {/* PAGINATION */}
//             <div className="text-center p-t30">
//               <div
//                 className="pagination-wrapper"
//                 style={{ backgroundImage: `url(${bgimg1})` }}
//               >
//                 <button
//                   className="site-button-secondry btn-half m-r10"
//                   disabled={page === 1}
//                   onClick={() => setPage(page - 1)}
//                 >
//                   <span>Previous</span>
//                 </button>

//                 <span className="font-weight-bold mx-3">
//                   Page {page} of {totalPages}
//                 </span>

//                 <button
//                   className="site-button-secondry btn-half m-l10"
//                   disabled={page === totalPages}
//                   onClick={() => setPage(page + 1)}
//                 >
//                   <span>Next</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ProjectGrid5;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import { Helmet } from "react-helmet-async";

import { useGetProjectsQuery } from "../../store/servicesApi";

const bgimg1 = require("./../../images/background/cross-line.png");
const bnrimg = require("./../../images/banner/15.jpg");

const categoryMap = {
  residential: "cat-1",
  commercial: "cat-2",
  office: "cat-3",
  restaurant: "cat-4",
  salon: "cat-5",
  bar: "cat-6",
  consultancy: "cat-7",
};

const ProjectGrid5 = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  // RTK Query Hook
  const { data, isLoading, isFetching } = useGetProjectsQuery({ page, limit });

  const services = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  // Magnific Popup
  useEffect(() => {
    if (!services.length) return;

    setTimeout(() => {
      window.jQuery(".single-gallery").each(function () {
        window.jQuery(this).magnificPopup({
          delegate: ".mfp-link",
          type: "image",
          gallery: { enabled: true },
          callbacks: {
            elementParse: function (item) {
              const isVideo = /\.(mp4|mov|webm)(\?.*)?$/i.test(item.src);
              item.type = isVideo ? "iframe" : "image";
            },
          },
        });
      });
    }, 500);
  }, [services]);

  return (
    <>
      <Helmet>
        <title>Interior Projects in Delhi | ANG Indesign</title>
        <meta
          name="description"
          content="View residential, commercial and office interior projects designed by ANG Indesign. Creative layouts, modern themes and premium finishing."
        />
        <meta
          name="keywords"
          content="interior projects delhi, completed interiors, ang indesign projects"
        />
        <meta name="author" content="ANG Indesign" />
        <meta name="copyright" content="ANG Indesign" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angindesign.com/projects" />

        {/* <!-- Open Graph (OG) Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ANG Indesign" />
        <meta property="og:url" content="https://angindesign.com/projects" />
        <meta property="og:title" content="Interior Projects | ANG Indesign" />
        <meta
          property="og:description"
          content="Browse completed home and commercial interior design projects in Delhi."
        />
        <meta
          property="og:image"
          content="https://angindesign.com/assets/15-B_oZL0n2.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Helmet>

      <Header />

      <div className="page-content">
        <Banner
          title="Our Projects"
          pagename="Project Categories"
          description="Explore our wide range of architectural and design services."
          bgimage={bnrimg}
        />
      </div>

      <div className="page-content">
        <div className="section-full p-tb80 column-grid-4 inner-page-padding">
          <div className="container">
            <div className="section-head">
              <div className="sx-separator-outer separator-center">
                <div
                  className="sx-separator bg-white bg-moving bg-repeat-x"
                  style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                >
                  <h3 className="sep-line-one">Our Projects</h3>
                </div>
              </div>
            </div>

            {/* GRID */}
            <ul className="row work-grid clearfix list-unstyled grid-5">
              {isLoading || isFetching ? (
                <p className="text-center w-100">Loading projects...</p>
              ) : services.length > 0 ? (
                services.map((item, index) => {
                  const category = item.category?.toLowerCase();
                  const filterClass = categoryMap[category] || "cat-1";

                  const allMedia = Array.isArray(item.large_images)
                    ? item.large_images
                    : [];

                  const imageFiles = allMedia.filter(
                    (file) => !/\.(mp4|mov|webm)(\?.*)?$/i.test(file)
                  );
                  const videoFiles = allMedia.filter((file) =>
                    /\.(mp4|mov|webm)(\?.*)?$/i.test(file)
                  );

                  const mediaFiles = [...videoFiles, ...imageFiles];

                  const firstMedia =
                    mediaFiles.length > 0
                      ? mediaFiles[0]
                      : require("./../../images/projects/portrait/pic1.jpg");

                  const isVideo = /\.(mp4|mov|webm)(\?.*)?$/i.test(firstMedia);

                  return (
                    <div
                      key={item._id || index}
                      className={`${filterClass} masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30`}
                    >
                      <div className="sx-box image-hover-block single-gallery">
                        {/* THUMBNAIL */}
                        <div className="sx-thum-bx">
                          {isVideo ? (
                            <video
                              src={firstMedia}
                              autoPlay
                              muted
                              loop
                              playsInline
                              style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                backgroundColor: "#000",
                              }}
                            />
                          ) : (
                            <img
                              src={firstMedia}
                              alt={item.service_title}
                              onError={(e) => {
                                e.target.src = require("./../../images/projects/portrait/pic1.jpg");
                              }}
                              style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                              }}
                            />
                          )}
                        </div>

                        <div className="sx-info p-t20 text-white">
                          <h4 className="sx-tilte">{item.service_title}</h4>
                          <p className="m-b0 text-capitalize">
                            {item.category}
                          </p>
                        </div>

                        {/* POPUPS */}
                        <a
                          className="mfp-link"
                          href={firstMedia}
                          data-type={isVideo ? "iframe" : "image"}
                        >
                          <i className="fa fa-arrows-alt" />
                        </a>

                        {mediaFiles.slice(1).map((file, idx) => {
                          const isVid = /\.(mp4|mov|webm)(\?.*)?$/i.test(file);
                          return (
                            <a
                              key={idx}
                              className="mfp-link"
                              href={file}
                              style={{ display: "none" }}
                              data-type={isVid ? "iframe" : "image"}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center w-100">No services found.</p>
              )}
            </ul>

            {/* PAGINATION */}
            <div className="text-center p-t30">
              <div
                className="pagination-wrapper"
                style={{ backgroundImage: `url(${bgimg1})` }}
              >
                <button
                  className="site-button-secondry btn-half m-r10"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  <span>Previous</span>
                </button>

                <span className="font-weight-bold mx-3">
                  Page {page} of {totalPages}
                </span>

                <button
                  className="site-button-secondry btn-half m-l10"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  <span>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectGrid5;
