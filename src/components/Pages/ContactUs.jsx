import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

var bnrimg = require("./../../images/banner/18.jpg");

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_URL = `${import.meta.env.VITE_API_URL}`;

class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    const { name, email, phone, message } = this.state;

    if (!name || !email || !phone || !message) {
      toast.error("All fields are required");
      return;
    }

    const enquiryPromise = axios.post(`${API_URL}/inquery`, {
      name,
      email,
      phone,
      message,
    });

    toast.promise(enquiryPromise, {
      loading: "Sending your enquiry...",
      success: "Enquiry sent successfully!",
      error: "Failed to send enquiry. Try again!",
    });

    try {
      const res = await enquiryPromise;

      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const defaultProps = {
      center: { lat: 34.07328, lng: -118.25141 },
      zoom: 12,
    };

    return (
      <>
        <Helmet>
          <title>Contact ANG InDesign | Book Interior Consultation</title>
          <meta
            name="description"
            content="Contact ANG InDesign for expert residential and commercial interior design services in Delhi. Book your design consultation today."
          />
          <meta
            name="keywords"
            content="interior designer contact, ang indesign contact, interior design consultation delhi"
          />

          {/* <link rel="canonical" href="https://angindesign.vercel.app/contact-us"> */}

          <meta property="og:title" content="Contact ANG InDesign" />
          <meta
            property="og:description"
            content="Book a consultation with Delhi’s trusted interior designers."
          />
          {/* <meta property="og:url" content="https://angindesign.vercel.app/contact-us"> */}

          <meta name="twitter:title" content="Contact ANG InDesign" />
          <meta
            name="twitter:description"
            content="Book your interior design meeting with ANG InDesign."
          />
        </Helmet>
        <Header />
        <div className="page-content">
          <Banner
            title="Contact Us"
            pagename="Contact us"
            description="The essence of interior design will always be about people and how they live."
            bgimage={bnrimg}
          />

          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    {/* FORM */}
                    <form
                      className="contact-form cons-contact-form bg-gray p-a30"
                      method="post"
                    >
                      <div className="section-head">
                        <div className="sx-separator-outer separator-left">
                          <div
                            className="sx-separator bg-white bg-moving bg-repeat-x"
                            style={{
                              backgroundImage:
                                "url(images/background/cross-line2.png)",
                            }}
                          >
                            <h3 className="sep-line-one">Form</h3>
                          </div>
                        </div>
                      </div>
                      <div className="contact-one">
                        {/* NAME */}
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                        </div>

                        {/* EMAIL */}
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            required
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </div>

                        {/* PHONE */}
                        <div className="form-group">
                          <input
                            name="phone"
                            type="text"
                            maxLength={10}
                            required
                            className="form-control"
                            placeholder="Phone"
                            value={this.state.phone}
                            onChange={(e) => {
                              const value = e.target.value;

                              // allow only digits
                              if (/^\d*$/.test(value)) {
                                this.setState({ phone: value });
                              }
                            }}
                          />
                        </div>

                        {/* MESSAGE */}
                        <div className="form-group">
                          <textarea
                            name="message"
                            rows={4}
                            required
                            className="form-control"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className="text-right">
                          <button
                            type="button"
                            className="site-button btn-half"
                            onClick={this.handleSubmit}
                          >
                            <span>
                              {this.state.loading ? "Sending..." : "Submit"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="p-b40 m-t50">
                      <h2 className="m-t0">We are here to help you</h2>
                      <p>
                        We are here to help you in a calm, clear, and focused
                        way. Don't worry if you're not sure what to do first
                        when planning your interiors. You can reach out anytime
                        for design help, project guidance, materials, or simply
                        to talk about your space.
                      </p>

                      <p>
                        We answer honestly, clearly, and with a personal
                        touch—exactly how it should be.
                      </p>

                      <p>
                        Our team will contact you soon with clear, practical
                        advice.
                      </p>

                      <h3 className="m-t20">Why People Like Working With Us</h3>
                      <ul className="list-angle-right anchor-line">
                        <li>
                          <NavLink>Polite and friendly communication</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink>No pressure or sales tactics</NavLink>
                        </li>
                        <li>
                          <NavLink>Clear answers to every question</NavLink>
                        </li>
                        <li>
                          <NavLink>Helpful suggestions</NavLink>
                        </li>
                        <li>
                          <NavLink>Personal attention for each client</NavLink>
                        </li>
                        <li>
                          <NavLink>A team that genuinely cares</NavLink>
                        </li>
                      </ul>

                      <h3 className="m-t20">Frequently Asked Questions</h3>
                      <div
                        className="sx-accordion acc-bg-gray m-b30"
                        id="accordion5"
                      >
                        {/* Q1 */}
                        <div className="panel sx-panel">
                          <div className="acod-head acc-actives">
                            <h6 className="acod-title">
                              <a
                                data-toggle="collapse"
                                href="#faqOne"
                                data-parent="#accordion5"
                              >
                                When will I hear back?
                                <span className="indicator">
                                  <i className="fa" />
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id="faqOne" className="acod-body collapse show">
                            <div className="acod-content p-a15">
                              <p>
                                Most of the time, within a few hours — sometimes
                                even sooner.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Q2 */}
                        <div className="panel sx-panel">
                          <div className="acod-head">
                            <h6 className="acod-title">
                              <a
                                data-toggle="collapse"
                                href="#faqTwo"
                                className="collapsed"
                                data-parent="#accordion5"
                              >
                                Is it possible to schedule a free consultation?
                                <span className="indicator">
                                  <i className="fa" />
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id="faqTwo" className="acod-body collapse">
                            <div className="acod-content p-a15">
                              <p>
                                Yes, we do offer a free consultation to help you
                                plan your interiors before any work starts.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Q3 */}
                        <div className="panel sx-panel">
                          <div className="acod-head">
                            <h6 className="acod-title">
                              <a
                                data-toggle="collapse"
                                href="#faqThree"
                                className="collapsed"
                                data-parent="#accordion5"
                              >
                                Do I have to show you a floor plan?
                                <span className="indicator">
                                  <i className="fa" />
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id="faqThree" className="acod-body collapse">
                            <div className="acod-content p-a15">
                              <p>
                                If you have one, that’s great! If not, no
                                worries — we can still help you with your
                                requirements.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Q4 */}
                        <div className="panel sx-panel">
                          <div className="acod-head">
                            <h6 className="acod-title">
                              <a
                                data-toggle="collapse"
                                href="#faqFour"
                                className="collapsed"
                                data-parent="#accordion5"
                              >
                                Is there a minimum size for the project?
                                <span className="indicator">
                                  <i className="fa" />
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id="faqFour" className="acod-body collapse">
                            <div className="acod-content p-a15">
                              <p>
                                No. We work on all kinds of projects — small,
                                medium, or large.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Q5 */}
                        <div className="panel sx-panel">
                          <div className="acod-head">
                            <h6 className="acod-title">
                              <a
                                data-toggle="collapse"
                                href="#faqFive"
                                className="collapsed"
                                data-parent="#accordion5"
                              >
                                Is it possible to set up a site visit?
                                <span className="indicator">
                                  <i className="fa" />
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id="faqFive" className="acod-body collapse">
                            <div className="acod-content p-a15">
                              <p>
                                Yes, site visits can be arranged after the
                                initial discussion.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="m-t20">Let’s Get in Touch</h3>
                      <p>
                        Interior design becomes simple when you have a patient,
                        knowledgeable, and professional guide. We are here to
                        make everything smooth and enjoyable.
                      </p>

                      <ul className="list-angle-right anchor-line">
                        <li>
                          {" "}
                          <NavLink>Send Us a Message</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink>Ask for a Callback</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink>Talk to a Design Expert Today</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div
                      className="contact-info block-shadow bg-white bg-center p-a40"
                      style={{
                        backgroundImage: "url(images/background/bg-map.png)",
                      }}
                    >
                      <div>
                        <div className="section-head">
                          <div className="sx-separator-outer separator-left">
                            <div
                              className="sx-separator bg-white bg-moving bg-repeat-x"
                              style={{
                                backgroundImage:
                                  "url(images/background/cross-line2.png)",
                              }}
                            >
                              <h3 className="sep-line-one">Info</h3>
                            </div>
                          </div>
                        </div>

                        <div className="sx-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-phone" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Phone number</h5>
                            <p>+91 7530919656</p>
                          </div>
                        </div>

                        <div className="sx-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-envelope" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Email address</h5>
                            <p>Info@angindesign.com</p>
                          </div>
                        </div>

                        <div className="sx-icon-box-wraper left">
                          <div className="icon-xs">
                            <i className="fa fa-map-marker" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Address info</h5>
                            <p>
                              09, Martin Street B190 Polo Alto, San Francisco
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gmap-outline">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={34.07328}
                lng={-118.25141}
                text={<i className="fa fa-map-marker" />}
              />
            </GoogleMapReact>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
