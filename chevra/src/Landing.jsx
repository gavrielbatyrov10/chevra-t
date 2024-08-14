import React from "react";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <figure className="main__img--wrapper">
          <img
            data-aos="fade-up"
            // src="./src/assets/handyChevraPerson.png"
            src="https://handychevra.com/assets/handyChevraPerson-xdWqHQgE.png"
            alt=""
            className="landing__img"
          />
        </figure>

        <div className="wrapper">
          <p className="landing__header">ONE CALL FIX ALL!</p>
          <p className="landing__para--mobile">
            Handy Chevra offers expert handyman services for all your household
            needs. From electrical and plumbing repairs to appliance
            installations and rubbish removal, our skilled team has you covered.
            Trust us for professional and careful service.
          </p>
        </div>
      </div>
    </section>
  );
}
