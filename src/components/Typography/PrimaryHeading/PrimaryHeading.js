import React from "react";
import "./PrimaryHeading.scss";

export const PrimaryHeading = (props) => {
  const { mainText, subText } = props;
  return (
    <h1 className="heading-primary">
      <span className="heading-primary--main">{mainText}</span>
      <span className="heading-primary--sub">{subText}</span>
    </h1>
  );
};
