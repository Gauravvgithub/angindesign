import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      {props.children}

      <a
        href="https://wa.me/919910249463"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #25D366;
          border-radius: 50%;
          z-index: 1000;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .whatsapp-icon {
          width: 35px;
          height: 35px;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
