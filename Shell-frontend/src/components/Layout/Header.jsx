import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="root-app">
        <div className="topnav">
          <Link to="/" className="active">
            Auth Service
          </Link>
          <Link to="/apps">Apps Service</Link>
          <Link to="/maps">Maps Service</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
