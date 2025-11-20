import React from "react";
import { NavLink } from "react-router-dom";

class Slider1 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-1.js");
  }
  render() {
    return (
      <>
        <div
          id="rev_slider_26_1_wrapper"
          className="rev_slider_wrapper fullscreen-container home-rev-slider"
          data-alias="mask-showcase"
          data-source="gallery"
        >
          {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
          <div
            id="rev_slider_26_1"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.4.1"
          >
            <ul>
              {/* SLIDE 1 */}
              <li
                data-index="rs-72"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb={require("./../../images/main-slider/slider1/slide3.jpg")}
                data-rotate={0}
                data-saveperformance="off"
                data-title
                data-param1={1}
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide3.jpg")}
                  alt=""
                  data-bgcolor="#f8f8f8"
                  style={{}}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="off"
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYER 1  right image overlay dark*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                  id="slide-75-layer-1"
                  data-x="['right','right','right','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-fontweight="['100','100','400','400']"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                {/* LAYER 3  Thin text title*/}
                <div
                  className="tp-caption   tp-resizeme slider-tag-line"
                  id="slide-72-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['150','150','150','100']"
                  data-fontsize="['22',22','20','16']"
                  data-lineheight="['26','26','26','22']"
                  data-width="['700','600','600','380']"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    fontWeight: 500,
                    letterSpacing: 10,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  Variety
                </div>
                {/* LAYER 4  Bold Title*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-72-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['46','46','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['190','190','190','150']"
                  data-fontsize="['64','54','44','34']"
                  data-lineheight="['80','70','60','50']"
                  data-width="['700','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Flooring for Any Interior site
                </div>
                {/* LAYER 5  Paragraph*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-72-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['30','60','50','70']"
                  data-fontsize="['18','18','18','16']"
                  data-lineheight="['30','30','30','30']"
                  data-width="['600','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Right design and right ideas matter a lot of in interior
                  design business. a style that makes a statement.
                </div>
                {/* LAYER 6  Read More*/}
                <div
                  className="tp-caption rev-btn  tp-resizeme"
                  id="slide-72-layer-6"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['120','140','140','150']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;",
                      "speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 9, lineHeight: 30 }}
                >
                  <NavLink to={"#"} className="site-button btn-half">
                    <span> Read More</span>
                  </NavLink>
                </div>
                {/* Border left Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-72-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','off','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderLeft: "40px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
                {/* Border bottom Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-72-layer-7"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "80px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
              </li>
              {/* SLIDE 2 */}
              <li
                data-index="rs-73"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb={require("./../../images/main-slider/slider1/slide1.jpg")}
                data-rotate={0}
                data-saveperformance="off"
                data-title
                data-param1={1}
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide1.jpg")}
                  alt=""
                  data-bgcolor="#f8f8f8"
                  style={{}}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="off"
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYER 1  right image overlay dark*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                  id="slide-73-layer-1"
                  data-x="['right','right','right','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-fontweight="['100','100','400','400']"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                {/* LAYER 3  Thin text title*/}
                <div
                  className="tp-caption   tp-resizeme slider-tag-line"
                  id="slide-73-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['150','150','150','100']"
                  data-fontsize="['22',22','20','16']"
                  data-lineheight="['26','26','26','22']"
                  data-width="['700','600','600','380']"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    fontWeight: 500,
                    letterSpacing: 10,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  Modish
                </div>
                {/* LAYER 4  Bold Title*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-73-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['46','46','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['190','190','190','150']"
                  data-fontsize="['64','54','44','34']"
                  data-lineheight="['80','70','60','50']"
                  data-width="['700','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Highest Quality Kitchen Solutions
                </div>
                {/* LAYER 5  Paragraph*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-73-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['30','60','50','70']"
                  data-fontsize="['18','18','18','16']"
                  data-lineheight="['30','30','30','30']"
                  data-width="['600','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Right design and right ideas matter a lot of in interior
                  design business. a style that makes a statement.
                </div>
                {/* LAYER 6  Read More*/}
                <div
                  className="tp-caption rev-btn  tp-resizeme"
                  id="slide-73-layer-6"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['120','140','140','150']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;",
                      "speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 9, lineHeight: 30 }}
                >
                  <NavLink to={"#"} className="site-button btn-half">
                    <span> Read More</span>
                  </NavLink>
                </div>
                {/* Border left Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-73-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','off','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderLeft: "40px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
                {/* Border bottom Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-73-layer-7"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "80px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
              </li>
              {/* SLIDE 3 */}
              <li
                data-index="rs-74"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb={require("./../../images/main-slider/slider1/slide2.jpg")}
                data-rotate={0}
                data-saveperformance="off"
                data-title
                data-param1={1}
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide2.jpg")}
                  alt=""
                  data-bgcolor="#f8f8f8"
                  style={{}}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="off"
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYER 1  right image overlay dark*/}
                <div
                  className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                  id="slide-74-layer-1"
                  data-x="['right','right','right','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-fontweight="['100','100','400','400']"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                {/* LAYER 3  Thin text title*/}
                <div
                  className="tp-caption   tp-resizeme slider-tag-line"
                  id="slide-74-layer-3"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['150','150','150','100']"
                  data-fontsize="['22',22','20','16']"
                  data-lineheight="['26','26','26','22']"
                  data-width="['700','600','600','380']"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    fontWeight: 500,
                    letterSpacing: 10,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  Reliable
                </div>
                {/* LAYER 4  Bold Title*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-74-layer-4"
                  data-x="['left','left','center','center']"
                  data-hoffset="['46','46','0','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['190','190','190','150']"
                  data-fontsize="['64','54','44','34']"
                  data-lineheight="['80','70','60','50']"
                  data-width="['700','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Professionals you can rely on
                </div>
                {/* LAYER 5  Paragraph*/}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-74-layer-5"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['30','60','50','70']"
                  data-fontsize="['18','18','18','16']"
                  data-lineheight="['30','30','30','30']"
                  data-width="['600','600','500','380']"
                  data-height="none"
                  data-whitespace="normal"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 10,
                    whiteSpace: "normal",
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Right design and right ideas matter a lot of in interior
                  design business. a style that makes a statement.
                </div>
                {/* LAYER 6  Read More*/}
                <div
                  className="tp-caption rev-btn  tp-resizeme"
                  id="slide-74-layer-6"
                  data-x="['left','left','center','center']"
                  data-hoffset="['50','50','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['120','140','140','150']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;",
                      "speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                      {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 9, lineHeight: 30 }}
                >
                  <NavLink to={"#"} className="site-button btn-half">
                    <span> Read More</span>
                  </NavLink>
                </div>
                {/* Border left Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-74-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','off','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderLeft: "40px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
                {/* Border bottom Part */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-74-layer-7"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 8,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottom: "80px solid #eef1f2",
                  }}
                >
                  {" "}
                </div>
              </li>
            </ul>
            <div className="tp-bannertimer" />
            {/* left side social bar*/}
            <div className="slide-left-social">
              <ul className="clearfix">
                <li>
                  <a
                    href="https://www.linkedin.com/company/angindesign/"
                    target="_blank"
                    className="sx-title-swip"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href=" https://www.instagram.com/ang_indesign"
                    target="_blank"
                    className="sx-title-swip"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61583491048812"
                    target="_blank"
                    className="sx-title-swip"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Slider1;
