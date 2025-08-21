import React from "react";
import { useNavigate } from "react-router";

export default function Button({ buttonName }) {
  // const navigate = useNavigate();

  const handleButtonClick = () => {
    alert(`Button clicked from Auth Service`);
    // navigate("/apps"); // ✅ will now work
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      {buttonName}
    </button>
  );
}
