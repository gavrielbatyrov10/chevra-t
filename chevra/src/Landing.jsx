import React from "react";
export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <figure className="img__wrapper">
          <img
            className="landing__img"
            src="./src/assets/handyChevraPerson.png"
            alt=""
          />
        </figure>
        <div className="wrapper">
          <p className="landing__header">ONE CALL FIX ALL!</p>
          <p className="landing__para">
            At Handy Chevra, we offer expert handyman services for all your
            household needs. From electrical and plumbing repairs to dry wall
            patchups and appliance installations, our skilled team has you
            covered. We also handle rubbish removal, light hauling, mice
            proofing, window shade repairs, furniture assembly, and
            post-construction touch-ups. No job is too big or small—trust us to
            get it done with professionalism and care.
          </p>
        </div>
      </div>
    </section>
  );
}
