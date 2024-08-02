import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("menu--open");
    setIsOpen(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open");
    setIsOpen(false);
  };

  return (
    <nav id="nav">
      <div className="nav__container">
        <figure className="nav__img--wrapper">
          <img
            data-aos="fade-up"
            src="./src/assets/handyChevraPerson.png"
            alt=""
            className="nav__img"
          />
        </figure>
        <ul className="nav__links">
          <li className="nav__link--list">
            <a href="#services" className="nav__link" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="nav__link--list">
            <a href="#testimonials" className="nav__link" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li className="nav__link--list">
            <a href="#contact" className="nav__link" onClick={closeMenu}>
              Contact
            </a>
            <span className="cart__length">{numberOfItems}</span>
          </li>
          <li className="nav__link--list">
            <Link className="nav__link" to="/sukkah">
              Sukkah department
            </Link>

            <span className="cart__length">{numberOfItems}</span>
          </li>
        </ul>
        <div className="hamburger" onClick={openMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <div className={`menu__backdrop ${isOpen ? "open" : ""}`}>
          <button className="btn__menu" onClick={closeMenu}>
            <div className="btn__menu--close">&times;</div>
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <a href="#services" className="menu__link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="menu__list">
              <a
                href="#testimonials"
                className="menu__link"
                onClick={closeMenu}
              >
                Testimonials
              </a>
            </li>
            <li className="menu__list">
              <Link className="nav__link" to="/sukkah">
                Sukkah department
              </Link>
            </li>
            <li className="menu__list">
              <a href="#contact" className="menu__link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
