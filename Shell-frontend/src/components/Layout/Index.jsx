import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
