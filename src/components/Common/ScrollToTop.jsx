import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {props.children}

      {/* ✅ WhatsApp Floating Button */}
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

      {/* ✅ Add styling inline or in your CSS */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          left: 20px; /* left side */
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          text-align: center;
          font-size: 24px;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          z-index: 1000;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
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
