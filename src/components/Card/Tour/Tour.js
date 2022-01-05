import React from "react";
import "./Tour.scss";

export const Tour = ({ img, title, description }) => {
  return (
    <div className="card">
      <img className="card__img" alt="card img" src={img} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};
