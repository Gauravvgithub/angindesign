import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Fix for Vercel — delay scroll reset
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 80);
  }, [location.pathname]);

  return (
    <>
      {children}

      {/* WhatsApp Floating Button (INLINE CSS ONLY) */}
      <a
        href="https://wa.me/919910249463"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "55px",
          height: "55px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.35)",
          cursor: "pointer",
          zIndex: 9999,
          transition: "transform 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{
            width: "32px",
            height: "32px",
          }}
        />
      </a>
    </>
  );
};

export default ScrollToTop;
