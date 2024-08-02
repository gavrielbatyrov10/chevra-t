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
          src="https://w2.chabad.org/media/images/766/ViIN7667176.jpg"
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
        <p className="sukkah__email">
          <a className="contact__number" href="mailto:handychevra@gmail.com">
            handychevra@gmail.com
          </a>
        </p>
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
