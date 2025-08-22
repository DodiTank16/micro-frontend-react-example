import React, { use } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="root-app">
        <div className="topnav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            First Service
          </Link>
          <Link
            to="/second"
            className={location.pathname === "/second" ? "active" : ""}>
            Second Service
          </Link>
          <Link
            to="/third"
            className={location.pathname === "/third" ? "active" : ""}>
            Third Service
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
