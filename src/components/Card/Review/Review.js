import React from "react";
import "./Review.scss";

export const Review = ({ img, username, reviewText }) => {
  return (
    <div className="review">
      <img className="review__img" alt="review img" src={img} />
      <div className="review__content">
        <h2 className="review__username">{username}</h2>
        <p className="review__text">{reviewText}</p>
      </div>
    </div>
  );
};
