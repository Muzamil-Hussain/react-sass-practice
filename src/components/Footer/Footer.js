import React from "react";
import "./Footer.scss";
import LogoGreenSmall1 from "../../img/logo-green-small-1x.png";
import LogoGreenSmall2 from "../../img/logo-green-small-2x.png";
import LogoGreen1 from "../../img/logo-green-1x.png";
import LogoGreen2 from "../../img/logo-green-2x.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${LogoGreenSmall1} 1x, ${LogoGreenSmall2}`}
            media="(max-width:37.5em)"
          />
          <img
            srcSet={`${LogoGreen1} 1x, ${LogoGreen2} 2x`}
            alt="footer logo"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="footer__navigation">
            <a href="#" className="footer__item">
              <li>Company</li>
            </a>
            <a href="#" className="footer__item">
              <li>Careers</li>
            </a>
            <a href="#" className="footer__item">
              <li>About Us</li>
            </a>
            <a href="#" className="footer__item">
              <li>Terms</li>
            </a>
            <a href="#" className="footer__item">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className="col-1-of-2">
          <div className="copyright">
            <p className="copyright__text">
              This beautiful site is an amazing design carved by{" "}
              <a href="#" className="footer__item">
                Jonas
              </a>
              , and built by{" "}
              <a href="#" className="footer__item">
                Muzamil
              </a>
              . You can contact us for more amazing designs like this for your
              company. I have tons of modern and unique designs waiting to
              brighten the market.
              <span className="copyright__signature">
                &copy; Copyright Muzamil designs 2018. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
