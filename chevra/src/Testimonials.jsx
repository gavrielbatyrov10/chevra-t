import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Yossi T",
    feedback: "Excellent service! Highly recommend for any handyman needs.",
  },
  {
    name: "Yosef S",
    feedback:
      "Professional and reliable. Did a great job with my plumbing issues.",
  },
  {
    name: "Chana L",
    feedback:
      "Quick and efficient. Will definitely call again for future repairs.",
  },
];

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Testimonials" id="testimonials">
      <h2 className="testimonials__header">Testimonials</h2>
      <ul className="testimonials__list">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="testimonial__item">
            <p data-aos="fade-right">
              <strong>{testimonial.name}</strong>
            </p>
            <p data-aos="fade-right">{testimonial.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;
