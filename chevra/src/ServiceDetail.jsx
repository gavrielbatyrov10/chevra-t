import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";
function ServiceDetail() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="ServiceDetail">
      <h2 className="details__header">Service Details</h2>
      <p className="service__para">
        We offer a variety of handyman services to meet your needs, including:
      </p>
      <h1 className="arrow__down">
        <FaArrowDown />
      </h1>
      <ul>
        <li className="service__details" data-aos="fade-up">
          <strong>Electrical:</strong> Wiring, outlet installation, lighting
          fixtures, and more.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Plumbing:</strong> Leak repairs, pipe installation, and
          maintenance.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Dry Wall Patchups:</strong> Minor and major drywall repairs.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Rubbish Removal:</strong> Junk removal and disposal services.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Light Hauling:</strong> Transportation of small to medium
          items.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Mice Proofing:</strong> Sealing entry points and preventive
          measures.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Appliance Installation:</strong> Setup and installation of
          household appliances.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Window Shade Installation/Repair:</strong> Installation and
          repair of window treatments.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Furniture Assembly:</strong> Assembly of flat-pack and custom
          furniture.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>Post Construction Touch-ups:</strong> Finishing touches after
          construction or renovation.
        </li>
        <li className="service__details" data-aos="fade-up">
          <strong>All Odds-and-Ends Jobs:</strong> Various small / big tasks and
          repairs around the house.
        </li>
      </ul>
    </div>
  );
}

export default ServiceDetail;
