import React, { useEffect } from "react";
import "./index.css"; // Ensure this imports the CSS with positioning styles

const Booking = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.id = "setmore_script";
    script.type = "text/javascript";
    script.src =
      "https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js";

    // Append script to the document head
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="booking__container">
      <a
        className="booking"
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/97158175-a97a-4b04-8f7d-7fc7d25e6948"
      >
        <img
          className="booking"
          border="none"
          src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
          alt="Book an appointment with gavriel batyrov using Setmore"
        />
      </a>
    </div>
  );
};

export default Booking;
