import React from "react";
import { SecondaryButton } from "../../Button/SecondaryButton/SecondaryButton";
import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        <h1>Lets get in touch</h1>
        <p>
          We are here to help you regarding tours and suggestions for the places
          to visit.
        </p>
      </div>
      <form className="contact__form">
        <div className="contact__form--field">
          <label for="fullname">Fullname</label>
          <input required id="fullname" placeholder="John Doe" />
        </div>
        <div className="contact__form--field">
          <label for="email">Email Address</label>
          <input required id="email" placeholder="email@example.com" />
        </div>
        <div className="contact__form--field">
          <label for="message">Message</label>
          <textarea
            required
            rows={6}
            id="message"
            placeholder="Enter Your Query Details Here"
          />
        </div>
        <div className="contact__form--submit">
          <SecondaryButton type="submit" href={"#"} text={"Submit"} />
        </div>
      </form>
    </div>
  );
};
