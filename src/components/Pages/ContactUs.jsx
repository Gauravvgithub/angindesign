import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import toast from "react-hot-toast";

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
