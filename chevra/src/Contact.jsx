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
      <h2 data-aos="fade-in">Contact Us</h2>
      <p>Email: info@handymanservices.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Handyman St, Service City, ST 12345</p>
      <div data-aos="fade-down">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ut
        dolore tempore quis accusantium soluta dolorum laboriosam laudantium in
        distinctio atque, sequi necessitatibus, saepe magnam! Perferendis iste
        illo eum cum.
      </div>
    </div>
  );
}

export default Contact;
