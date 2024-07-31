import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const services = [
  "Reliable",
  "Professional",
  "Affordable prices",
  "Prompt service",
  "Attention to detail",
  "Friendly and courteous staff",
];

function Sukkah() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="sukkah" id="sukkah">
      <Link className="back__btn" to="/">
        Back <IoMdArrowRoundBack className="back" />
      </Link>
      <h1 className="sukkah-title">Introducing Sukkah Building Division</h1>
      <figure className="main__img--wrapper">
        <img
          data-aos="fade-up"
          src="https://sukkahman.com/cdn/shop/products/08cf7618b43c3b2a47559fc9261e287479e02dd37b734b34aecb8c2d8e186bfd_1fa841c9-f879-48ec-ba31-59ee20beb135_700x.webp?v=1694010655"
          alt=""
          className="main__img"
        />
      </figure>

      <section class="info">
        <article
          data-aos="fade-up"
          data-aos-duration="3000"
          class="text__wrapper"
        >
          <p className="info__para">
            Experience the best in sukkah building with the Handy Chevra team!
            Our team provides fast, efficient, and reliable services. Trust us
            for a stress-free and satisfying experience!
          </p>
        </article>
      </section>

      <div className="sukkah-contact">
        <p className="sukkah__para">Call or text for a free estimate:</p>
        <a class="contact__number" href="tel:+19293834450">
          {" "}
          <p className="sukkah-phone">+347-588-9207</p>
        </a>
        <p className="sukkah-email">handychevra@gmail.com</p>
      </div>
      <div className="ServiceList" id="services">
        <h2 className="service__header">Who we are</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index} data-aos="fade-down">
              {"~ " + service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sukkah;
