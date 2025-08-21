import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="footer-text">
          Copyright &copy; 2025 <Link to="/">Tank's Corporation.</Link> All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
