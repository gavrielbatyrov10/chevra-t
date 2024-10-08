import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdCall } from "react-icons/io";

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
      <p>
        <a className="contact__number" href="mailto:handychevra@gmail.com">
          handychevra@gmail.com
        </a>
      </p>

      <p>
        <a className="contact__number" href="tel:+13475889207">
          <IoMdCall className="phone" />
          +347-588-9207
        </a>
      </p>
    </div>
  );
}

export default Contact;
