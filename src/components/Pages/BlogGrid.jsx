// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Header from "./../Common/Header";
// import Footer from "./../Common/Footer";
// import Banner from "./../Elements/Banner";
// import Loader from "../Elements/Loader";

// var bnrimg = require("./../../images/banner/12.jpg");

// const BlogGrid = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const limit = 6; // 6 blogs per page

//   // 🔹 Fetch blogs from backend with pagination
//   const fetchBlogs = async (pageNum) => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         `${import.meta.env.VITE_API_URL}/blogs?page=${pageNum}&limit=${limit}`
//       );
//       const data = await res.json();

//       // Handle both possible response shapes
//       const fetchedBlogs = Array.isArray(data)
//         ? data
//         : Array.isArray(data.blogs)
//         ? data.blogs
//         : [];

//       setBlogs(fetchedBlogs);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//     }
//     finally{
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs(page);
//   }, [page]);

//   // 🔹 Helper to format date
//   const formatDate = (isoDate) => {
//     const date = new Date(isoDate);
//     const day = date.getDate();
//     const month = date
//       .toLocaleString("en-US", { month: "short" })
//       .toUpperCase();
//     return { day, month };
//   };

//   // 🔹 Render page buttons dynamically
//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <li key={i} className={i === page ? "active" : ""}>
//           <NavLink to="#" onClick={() => setPage(i)}>
//             {i}
//           </NavLink>
//         </li>
//       );
//     }
//     return pages;
//   };

//   return (
//     <>
//      {
//       loading ? (
//         <Loader />
//       ) : (
//         <>
//          <Header />
//       <div className="page-content">
//         <Banner
//           title="Blogs"
//           pagename="Blogs"
//           description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
//           bgimage={bnrimg}
//         />

//         <div className="section-full p-tb80 bg-white inner-page-padding">
//           <div className="container">
//             {/* 🔹 Blog List */}
//             <div className="masonry-outer mfp-gallery news-grid clearfix row">
//               {blogs.length > 0 ? (
//                 blogs.map((item, index) => {
//                   const { day, month } = item.createdAt
//                     ? formatDate(item.createdAt)
//                     : { day: "--", month: "--" };
//                   return (
//                     <div
//                       className="masonry-item col-lg-4 col-md-6 col-sm-12"
//                       key={index}
//                     >
//                       <div className="blog-post blog-grid date-style-2">
//                         <div className="sx-post-media sx-img-effect img-reflection">
//                           <NavLink to={`/blogs/${item.blog_title_url}`}>
//                             <img
//                               src={item.large_image}
//                               alt={item.blog_title}
//                             />
//                           </NavLink>
//                         </div>
//                         <div className="sx-post-info p-t30">
//                           <div className="sx-post-meta">
//                             <ul>
//                               <li className="post-date">
//                                 <strong>{day}</strong> <span>{month}</span>
//                               </li>
//                               <li className="post-author">
//                                 <NavLink to={`/blogs/${item.blog_title_url}`}>
//                                   By <span>Admin</span>
//                                 </NavLink>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="sx-post-title">
//                             <h4 className="post-title">
//                               <NavLink to={`/blogs/${item.blog_title_url}`}>
//                                 {item.blog_title}
//                               </NavLink>
//                             </h4>
//                           </div>
//                           <div className="sx-post-readmore">
//                             <NavLink
//                               to={`/blogs/${item.blog_title_url}`}
//                               title="READ MORE"
//                               rel="bookmark"
//                               className="site-button-link"
//                             >
//                               View More
//                             </NavLink>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p className="text-center w-100">No blogs found.</p>
//               )}
//             </div>

//             {/* 🔹 Pagination (same UI, but dynamic now) */}
//             <ul className="pagination m-t30 m-b0 justify-content-center">
//               <li>
//                 <NavLink
//                   to="#"
//                   onClick={() => page > 1 && setPage(page - 1)}
//                   className={page === 1 ? "disabled" : ""}
//                 >
//                   «
//                 </NavLink>
//               </li>

//               {renderPagination()}

//               <li>
//                 <NavLink
//                   to="#"
//                   onClick={() => page < totalPages && setPage(page + 1)}
//                   className={page === totalPages ? "disabled" : ""}
//                 >
//                   »
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       </>
//       )
//      }
//     </>
//   );
// };

// export default BlogGrid;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Header from "./../Common/Header";
// import Footer from "./../Common/Footer";
// import Banner from "./../Elements/Banner";
// import Loader from "../Elements/Loader";
// import { Helmet } from "react-helmet-async";

// import { useGetBlogsQuery } from "../../store/servicesApi";

// const bnrimg = require("./../../images/banner/12.jpg");

// const BlogGrid = () => {
//   const [page, setPage] = useState(1);
//   const limit = 6;

//   const { data, isLoading, isFetching } = useGetBlogsQuery({ page, limit });

//   const blogs = data?.blogs || [];
//   const totalPages = data?.totalPages || 1;

//   // 🔹 Helper to format date
//   const formatDate = (isoDate) => {
//     const date = new Date(isoDate);
//     const day = date.getDate();
//     const month = date
//       .toLocaleString("en-US", { month: "short" })
//       .toUpperCase();
//     return { day, month };
//   };

//   // 🔹 Render pagination buttons
//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <li key={i} className={i === page ? "active" : ""}>
//           <NavLink to="#" onClick={() => setPage(i)}>
//             {i}
//           </NavLink>
//         </li>
//       );
//     }
//     return pages;
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Interior Design Blogs & Tips | ANG InDesign Delhi</title>
//         <meta
//           name="description"
//           content="Read interior design tips, trends and inspiration from ANG InDesign. Stay updated with modern styles for homes & commercial spaces in Delhi."
//         />
//         <meta
//           name="keywords"
//           content="interior design blog delhi, decor tips, home interior blogs"
//         />

//         {/* <link rel="canonical" href="https://angindesign.vercel.app/blogs"> */}

//         <meta
//           property="og:title"
//           content="Interior Design Blog | ANG InDesign"
//         />
//         <meta
//           property="og:description"
//           content="Explore interior design trends and expert ideas for stylish spaces."
//         />
//         {/* <meta property="og:url" content="https://angindesign.vercel.app/blogs"> */}

//         <meta name="twitter:title" content="Interior Design Blog" />
//         <meta
//           name="twitter:description"
//           content="Latest interior design tips and inspiration from experts."
//         />
//       </Helmet>

//       {isLoading || isFetching ? (
//         <p className="text-center w-100">Loading projects...</p>
//       ) : (
//         <>
//           <Header />
//           <div className="page-content">
//             <Banner
//               title="Blogs"
//               pagename="Blogs"
//               description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
//               bgimage={bnrimg}
//             />

//             <div className="section-full p-tb80 bg-white inner-page-padding">
//               <div className="container">
//                 {/* 🔹 Blog List */}
//                 <div className="masonry-outer mfp-gallery news-grid clearfix row">
//                   {blogs.length > 0 ? (
//                     blogs.map((item, index) => {
//                       const { day, month } = item.createdAt
//                         ? formatDate(item.createdAt)
//                         : { day: "--", month: "--" };
//                       return (
//                         <div
//                           className="masonry-item col-lg-4 col-md-6 col-sm-12"
//                           key={index}
//                         >
//                           <div className="blog-post blog-grid date-style-2">
//                             <div className="sx-post-media sx-img-effect img-reflection">
//                               <NavLink to={`/blogs/${item.blog_title_url}`}>
//                                 <img
//                                   src={item.large_image}
//                                   alt={item.blog_title}
//                                 />
//                               </NavLink>
//                             </div>
//                             <div className="sx-post-info p-t30">
//                               <div className="sx-post-meta">
//                                 <ul>
//                                   <li className="post-date">
//                                     <strong>{day}</strong> <span>{month}</span>
//                                   </li>
//                                   <li className="post-author">
//                                     <NavLink
//                                       to={`/blogs/${item.blog_title_url}`}
//                                     >
//                                       By <span>Admin</span>
//                                     </NavLink>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="sx-post-title">
//                                 <h4 className="post-title">
//                                   <NavLink to={`/blogs/${item.blog_title_url}`}>
//                                     {item.blog_title}
//                                   </NavLink>
//                                 </h4>
//                               </div>
//                               <div className="sx-post-readmore">
//                                 <NavLink
//                                   to={`/blogs/${item.blog_title_url}`}
//                                   title="READ MORE"
//                                   rel="bookmark"
//                                   className="site-button-link"
//                                 >
//                                   View More
//                                 </NavLink>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <p className="text-center w-100">No blogs found.</p>
//                   )}
//                 </div>

//                 {/* 🔹 Pagination */}
//                 <ul className="pagination m-t30 m-b0 justify-content-center">
//                   <li>
//                     <NavLink
//                       to="#"
//                       onClick={() => page > 1 && setPage(page - 1)}
//                       className={page === 1 ? "disabled" : ""}
//                     >
//                       «
//                     </NavLink>
//                   </li>

//                   {renderPagination()}

//                   <li>
//                     <NavLink
//                       to="#"
//                       onClick={() => page < totalPages && setPage(page + 1)}
//                       className={page === totalPages ? "disabled" : ""}
//                     >
//                       »
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default BlogGrid;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import { Helmet } from "react-helmet-async";

import { useGetBlogsQuery } from "../../store/servicesApi";

const bnrimg = require("./../../images/banner/12.jpg");

const BlogGrid = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, isFetching } = useGetBlogsQuery({ page, limit });

  const blogs = data?.blogs || [];
  const totalPages = data?.totalPages || 1;

  // Format date
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    return { day, month };
  };

  // Pagination
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={i === page ? "active" : ""}>
          <NavLink to="#" onClick={() => setPage(i)}>
            {i}
          </NavLink>
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      <Helmet>
        <title>Interior Design Blogs & Tips | ANG InDesign Delhi</title>
        <meta
          name="description"
          content="Read interior design tips, trends and inspiration from ANG InDesign."
        />
      </Helmet>

      <Header />

      <div className="page-content">
        <Banner
          title="Blogs"
          pagename="Blogs"
          description="The essence of interior design will always be about people and how they live."
          bgimage={bnrimg}
        />

        <div className="section-full p-tb80 bg-white inner-page-padding">
          <div className="container">
            {/* 🔹 Blog List Container */}
            <div className="masonry-outer mfp-gallery news-grid clearfix row">
              {isLoading || isFetching ? (
                <p className="text-center w-100">Loading blogs...</p>
              ) : blogs.length > 0 ? (
                blogs.map((item, index) => {
                  const { day, month } = item.createdAt
                    ? formatDate(item.createdAt)
                    : { day: "--", month: "--" };

                  return (
                    <div
                      className="masonry-item col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink to={`/blogs/${item.blog_title_url}`}>
                            <img
                              src={item.large_image}
                              alt={item.blog_title}
                            />
                          </NavLink>
                        </div>

                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta">
                            <ul>
                              <li className="post-date">
                                <strong>{day}</strong> <span>{month}</span>
                              </li>
                              <li className="post-author">
                                <NavLink to={`/blogs/${item.blog_title_url}`}>
                                  By <span>Admin</span>
                                </NavLink>
                              </li>
                            </ul>
                          </div>

                          <div className="sx-post-title">
                            <h4 className="post-title">
                              <NavLink to={`/blogs/${item.blog_title_url}`}>
                                {item.blog_title}
                              </NavLink>
                            </h4>
                          </div>

                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/blogs/${item.blog_title_url}`}
                              className="site-button-link"
                            >
                              View More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center w-100">No blogs found.</p>
              )}
            </div>

            {/* 🔹 Pagination */}
            <ul className="pagination m-t30 m-b0 justify-content-center">
              <li>
                <NavLink
                  to="#"
                  onClick={() => page > 1 && setPage(page - 1)}
                  className={page === 1 ? "disabled" : ""}
                >
                  «
                </NavLink>
              </li>

              {renderPagination()}

              <li>
                <NavLink
                  to="#"
                  onClick={() => page < totalPages && setPage(page + 1)}
                  className={page === totalPages ? "disabled" : ""}
                >
                  »
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogGrid;
