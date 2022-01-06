import React from "react";
import "../Button.scss";

export const SecondaryButton = (props) => {
  const { href, text, type } = props;
  return (
    <button
      href={href}
      type={type}
      draggable="false"
      className="btn btn__secondary btn--green btn--animated"
    >
      {text}
    </button>
  );
};
