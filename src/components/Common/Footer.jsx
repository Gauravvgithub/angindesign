import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../Elements/Switcher";
import axios from "axios";

class Footer extends React.Component {
  state = {
    recentBlogs: [],
  };

  componentDidMount() {
    this.fetchRecentBlogs();
  }

  async fetchRecentBlogs() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs?page=1&limit=3`);

      // Adjust for paginated response
      const blogsData = res.data.blogs || res.data; // handle both old/new API formats

      if (Array.isArray(blogsData)) {
        // Sort blogs by createdAt (descending) and take top 3
        const sortedBlogs = blogsData
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        this.setState({ recentBlogs: sortedBlogs });
      }
    } catch (err) {
      console.error("Error fetching recent blogs:", err);
    }
  }

  render() {
    const { recentBlogs } = this.state;

    return (
      <>
        <footer className="site-footer footer-large footer-dark footer-wide">
          {/* FOOTER BLOCKS START */}
          <div className="footer-top overlay-wraper">
            <div className="overlay-main" />
            <div className="container">
              <div className="row">
                {/* ABOUT COMPANY */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_about">
                    <div className="logo-footer clearfix p-b15">
                      <NavLink to={"./"}>
                        <img
                          src={require("./../../images/footer-logo.png")}
                          alt="Ang Indesign"
                          style={{
                            borderRadius:"50%"
                          }}
                        />
                      </NavLink>
                    </div>
                    <p>
                      Ang Indesign creates innovative, sustainable interior spaces that elevate modern living.
                    </p>
                    <ul className="social-icons sx-social-links">
                      <li>
                        <a
                          href=" https://www.facebook.com/profile.php?id=61583491048812"
                          className="fa fa-facebook"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/angindesign/"
                          className="fa fa-linkedin"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/ang_indesign"
                          className="fa fa-instagram"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* RECENT POST */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget recent-posts-entry-date">
                    <h5 className="widget-title">Recent Posts</h5>
                    <div className="widget-post-bx">
                      {recentBlogs.length > 0 ? (
                        recentBlogs.map((blog) => {
                          const date = new Date(blog.createdAt);
                          const day = date.getDate();
                          const month = date.toLocaleString("default", {
                            month: "short",
                          });
                          const year = date.getFullYear();

                          return (
                            <div
                              key={blog._id}
                              className="widget-post clearfix"
                            >
                              <div className="sx-post-date text-center text-uppercase text-white">
                                <strong className="p-date">{day}</strong>
                                <span className="p-month">{month}</span>
                                <span className="p-year">{year}</span>
                              </div>
                              <div className="sx-post-info">
                                <div className="sx-post-header">
                                  <h6 className="post-title">
                                    <NavLink
                                      to={`/blogs/${blog.blog_title_url}`}
                                    >
                                      {blog.blog_title}
                                    </NavLink>
                                  </h6>
                                </div>
                                <div className="sx-post-meta">
                                  <ul>
                                    <li className="post-author">
                                      <i className="fa fa-user" /> By Admin
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-white">Loading recent posts...</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* USEFUL LINKS */}
                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                  <div className="widget widget_services inline-links">
                    <h5 className="widget-title">Useful links</h5>
                    <ul>
                      <li>
                        <NavLink to={"/about"}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/services-2"}>Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/projects"}>Projects</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/blogs"}>Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/contact-us"}>Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CONTACT US */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_address_outer">
                    <h5 className="widget-title">Contact Us</h5>
                    <ul className="widget_address">
                      <li>
                        756 Livingston Street, Brooklyn, NY 11201, United State
                      </li>
                      <li>Info@angindesign.com</li>
                      <li>+91 7530919656</li>
                      {/* <li>+91 7530919656</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom overlay-wraper">
            <div className="overlay-main" />
            <div className="container">
              <div className="row">
                <div className="sx-footer-bot-left">
                  <p className="text-sm">
                    <a href="/">
                      <span style={{ color: "#D7B38C" }}>Ang Indesign</span>
                    </a>{" "}
                    - Copyright {new Date().getFullYear()}. All rights reserved.
                    <br />
                    Managed and Developed By{" "}
                    <a
                      href="https://nationalmarketingprojects.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="color-red font-semibold hover:underline color-red"
                    >
                      <span style={{ color: "#D7B38C" }}>
                        National Marketing Projects
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Switcher />
      </>
    );
  }
}

export default Footer;
