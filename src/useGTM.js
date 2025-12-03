import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useGTM() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
}
