import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  "Electrical",
  "Plumbing",
  "Dry Wall Patchups",
  "Rubbish Removal",
  "Light Hauling",
  "painting",
  "window screen repair",
  "Appliance repair / Installation",
  "Window Shade Installation/Repair",
  "Furniture Assembly",
  "Post Construction Touch-ups",
  "low voltage Installation such as cameras, speakers, intercoms & more ",
  "All Odds-and-Ends Jobs",
];

function ServiceList() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="ServiceList" id="services">
      <h2 className="service__header">Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} data-aos="fade-down">
            {"~ " + service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
