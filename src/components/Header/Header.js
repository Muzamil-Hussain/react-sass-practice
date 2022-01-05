import React from "react";
import "./Header.scss";
import { PrimaryHeading } from "../Typography/PrimaryHeading";
import Logo from "../../img/logo-white.png";
import { PrimaryButton } from "../Button/PrimaryButton";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={Logo} alt="Logo" draggable="false" className="header__logo" />
      </div>
      <div className="header__text-box">
        <PrimaryHeading
          mainText={"Outdoors"}
          subText={"is where life happens"}
        />
        <PrimaryButton
          href={"#t__dot(rtcrd)*lctn"}
          text={"Discover our tours"}
        />
      </div>
    </header>
  );
};
