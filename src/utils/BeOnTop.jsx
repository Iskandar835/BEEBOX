//** This component is used to go back on the top of the window when we change the page **

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function BeOnTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default BeOnTop;
