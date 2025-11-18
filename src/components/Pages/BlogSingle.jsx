import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";

const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`${import.meta.env.VITE_API_URL}/blogs/getBlogById/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="page-content text-center p-t80 p-b80">
          <p>Loading blog...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog || blog.message === "Blog not found") {
    return (
      <>
        <Header />
        <div className="page-content text-center p-t80 p-b80">
          <h3>Blog not found</h3>
        </div>
        <Footer />
      </>
    );
  }

  const seo = blog.blogSeoDetails || {};
  const createdDate = new Date(blog.createdAt);
  const day = createdDate.getDate().toString().padStart(2, "0");
  const month = createdDate.toLocaleString("default", { month: "short" });
  const year = createdDate.getFullYear();

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>{seo.page_title || blog.blog_title}</title>
        <meta name="description" content={seo.metaDes || blog.blog_title} />
        <meta name="keywords" content={seo.metaKeywords || ""} />
        <link rel="canonical" href={seo.cannicalUrl || window.location.href} />

        {/* Robots */}
        {seo.robotsMeta && (
          <meta
            name="robots"
            content={`${seo.robotsMeta.index ? "index" : "noindex"}, ${
              seo.robotsMeta.follow ? "follow" : "nofollow"
            }`}
          />
        )}

        {/* Open Graph / Social Tags */}
        <meta property="og:title" content={seo.ogTitle || blog.blog_title} />
        <meta property="og:description" content={seo.ogDes || seo.metaDes} />
        <meta property="og:type" content={seo.OgType || "website"} />
        <meta property="og:image" content={seo.OgImageUrl || blog.banner} />
        <meta property="og:image:width" content={seo.OgImageWidth || "1200"} />
        <meta
          property="og:image:height"
          content={seo.OgImageHeight || "630"}
        />
        <meta property="og:image:type" content={seo.OgImageType || "image/png"} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content={seo.ampUrl || "summary_large_image"} />
        <meta name="twitter:title" content={seo.ogTitle || blog.blog_title} />
        <meta name="twitter:description" content={seo.ogDes || seo.metaDes} />
        <meta name="twitter:image" content={seo.OgImageUrl || blog.banner} />

        {/* Extra optional tags */}
        {seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={seo.googleSiteVerification}
          />
        )}
      </Helmet>

      <Header />
      <div className="page-content">
        <Banner
          title={blog.blog_title}
          pagename="Blog Single"
          description="The essence of interior design will always be about people and how they live."
          bgimage={blog.banner || require("./../../images/banner/10.jpg")}
        />

        <div className="section-full p-t80 p-b50 inner-page-padding">
          <div className="container">
            <div className="blog-single-space max-w900 ml-auto mr-auto">
              <div className="blog-post blog-detail text-black">
                <div className="sx-post-media">
                  <div className="portfolio-item">
                    <img
                      className="img-responsive"
                      src={
                        blog.large_image ||
                        require("./../../images/blog/default/thum1.jpg")
                      }
                      alt={blog.blog_title}
                    />
                  </div>
                </div>

                <div className="sx-post-meta m-t20">
                  <ul>
                    <li className="post-date">
                      <strong>{day}</strong>{" "}
                      <span>
                        {month} {year}
                      </span>
                    </li>
                    <li className="post-author">
                      <NavLink to="#">
                        By <span>Admin</span>
                      </NavLink>
                    </li>
                    {/* <li className="post-category">
                      <NavLink to="#">Architecture</NavLink>
                    </li> */}
                  </ul>
                </div>

                <div className="sx-post-title">
                  <h3 className="post-title">{blog.blog_title}</h3>
                </div>

                <div
                  className="sx-post-text"
                  dangerouslySetInnerHTML={{ __html: blog.blog_content }}
                />

                <div className="autor-post-tag-share p-a30 bg-gray">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="widget_tag_cloud m-b15">
                        <h5 className="tagcloud">Tags</h5>
                        <div className="tagcloud">
                          {seo.metaKeywords?.split(",").map((tag, index) => (
                            <NavLink key={index} to="#">
                              {tag.trim()}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix single-post-share">
                        <h5>Share this Post:</h5>
                        <div className="widget_social_inks">
                          <ul className="social-icons social-md social-square social-dark m-b0">
                            <li>
                              <a
                                href="https://www.facebook.com/people/ANG-Interior-Design/61583491048812/"
                                target="_blank"
                                rel="noreferrer"
                                className="fa fa-facebook"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="fa fa-linkedin"
                              />
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/ang_indesign"
                                target="_blank"
                                rel="noreferrer"
                                className="fa fa-instagram"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogSingle;
