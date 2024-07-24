import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="Contact" id="contact">
      <h2 className="contact__header" data-aos="fade-in">
        Contact Us
      </h2>
      <p>Email: info@handymanservices.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Handyman St, Service City, ST 12345</p>
    </div>
  );
}

export default Contact;
