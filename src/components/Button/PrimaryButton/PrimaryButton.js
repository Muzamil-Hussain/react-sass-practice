import React from "react";
import "../Button.scss";

export const PrimaryButton = (props) => {
  const { href, text } = props;
  return (
    <a
      href={href}
      draggable="false"
      className="btn btn__primary btn--white btn--animated"
    >
      {text}
    </a>
  );
};
