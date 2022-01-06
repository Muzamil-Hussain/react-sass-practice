import React from "react";
import "./Contact.scss";
import { ContactForm, SecondaryHeading } from "../../components";

export const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__container--heading">
        <SecondaryHeading headingText="Contact Us" />
      </div>
      <div className="contact__container--form">
        <ContactForm />
      </div>
    </div>
  );
};
