import React from "react";
import { PiWhatsappLogo } from "react-icons/pi";
import "./index.css"; // Ensure this imports the CSS with positioning styles

export default function Whatsapp() {
  return (
    <div className="whatsapp__container">
      <a
        className="whatsapp"
        href="https://wa.link/jy4yrd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiWhatsappLogo />
      </a>
    </div>
  );
}
