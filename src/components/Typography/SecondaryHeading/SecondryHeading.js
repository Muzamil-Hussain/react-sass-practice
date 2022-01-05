import React from "react";
import "./SecondaryHeading.scss";

export const SecondaryHeading = (props) => {
  const { headingText } = props;
  return (
    <h1 className="heading-secondary">
      <span className="heading-secondary--main">{headingText}</span>
    </h1>
  );
};
