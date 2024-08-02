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
        href="https://booking.setmore.com/scheduleappointment/df4b630b-13b8-4696-a29a-86d3f9284da2"
      >
        <img
          className="booking"
          border="none"
          src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
          alt="Book an appointment with Handychevra using Setmore"
        />
      </a>
    </div>
  );
};

export default Booking;
