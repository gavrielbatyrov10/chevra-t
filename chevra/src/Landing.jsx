import React from "react";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <figure className="img__wrapper">
          <img
            className="landing__img"
            src="./src/assets/handyChevraPerson.png"
            alt="Handy Chevra Person"
          />
        </figure>
        <div className="wrapper">
          <p className="landing__header">ONE CALL FIX ALL!</p>
          <p className="landing__para">Handy Chevra</p>
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
