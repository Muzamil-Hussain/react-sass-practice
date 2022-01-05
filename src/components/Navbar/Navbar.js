import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              <span>01</span>About Natours
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              <span>02</span>Popular Tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              <span>03</span>Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              <span>04</span>Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
