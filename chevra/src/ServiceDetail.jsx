import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceDetail() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="ServiceDetail">
      <h2>Service Details</h2>
      <p>
        We offer a variety of handyman services to meet your needs, including:
      </p>
      <ul>
        <li className="service__details" data-aos="fade-left">
          <strong>Electrical:</strong> Wiring, outlet installation, lighting
          fixtures, and more.
        </li>
        <li className="service__details" data-aos="fade-right">
          <strong>Plumbing:</strong> Leak repairs, pipe installation, and
          maintenance.
        </li>
        <li className="service__details" data-aos="fade-left">
          <strong>Dry Wall Patchups:</strong> Minor and major drywall repairs.
        </li>
        <li className="service__details" data-aos="fade-right">
          <strong>Rubbish Removal:</strong> Junk removal and disposal services.
        </li>
        <li className="service__details" data-aos="fade-left">
          <strong>Light Hauling:</strong> Transportation of small to medium
          items.
        </li>
        <li className="service__details" data-aos="fade-right">
          <strong>Mice Proofing:</strong> Sealing entry points and preventive
          measures.
        </li>
        <li className="service__details" data-aos="fade-left">
          <strong>Appliance Installation:</strong> Setup and installation of
          household appliances.
        </li>
        <li className="service__details" data-aos="fade-right">
          <strong>Window Shade Installation/Repair:</strong> Installation and
          repair of window treatments.
        </li>
        <li className="service__details" data-aos="fade-left">
          <strong>Furniture Assembly:</strong> Assembly of flat-pack and custom
          furniture.
        </li>
        <li className="service__details" data-aos="fade-right">
          <strong>Post Construction Touch-ups:</strong> Finishing touches after
          construction or renovation.
        </li>
        <li className="service__details" data-aos="fade-left">
          <strong>All Odds-and-Ends Jobs:</strong> Various small tasks and
          repairs around the house.
        </li>
      </ul>
    </div>
  );
}

export default ServiceDetail;
