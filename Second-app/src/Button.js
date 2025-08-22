import React from "react";
import { useNavigate } from "react-router";

export default function Button({ buttonName }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    alert(`Button clicked from Second Service Service`);
    navigate("/third");
  };

  return (
    <button type="button" onClick={handleButtonClick} className="auth-button">
      {buttonName}
    </button>
  );
}
