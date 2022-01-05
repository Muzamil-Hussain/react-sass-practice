import React from "react";
import "./About.scss";
import { SecondaryHeading } from "../../components";

export const About = () => {
  return (
    <div className="about">
      <div className="about__heading">
        <SecondaryHeading headingText="About" />
      </div>
      <div className="about__content">
        <img
          className="about__content-img"
          alt="A person sitting on the top of mountain enjoying a beautiful view"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/922/932/small_2x/beauty-woman-outdoors-enjoying-nature-photo.jpg"
        />
        <div className="about__content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
