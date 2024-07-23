import React, { useEffect, useState } from "react";
import "./index.css"; // Ensure the CSS file is correctly imported

// Import the image from the src/assets folder
import imagePath from "./assets/handyChevraPerson.png";

function ScrollImage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translation value based on scroll position
  const transformValue = `translateX(${scrollPosition * 0.6}px)`; // Adjust multiplier as needed

  return (
    <div className="image-container2">
      <img
        src={imagePath} // Use the imported image path
        alt="Scroll Animation"
        className="landing__image2"
        style={{ transform: transformValue }}
      />{" "}
      <h1 className="scroll__header">we are on the way</h1>
    </div>
  );
}

export default ScrollImage;
