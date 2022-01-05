import React from "react";
import "./Reviews.scss";
import { SecondaryHeading, Review } from "../../components";

export const Reviews = () => {
  return (
    <div className="reviews">
      <SecondaryHeading headingText="User Stories" />

      <div className="reviews__stories">
        <Review
          img="https://rac.com.pk/wp-content/uploads/2021/02/c4cbf944aef5d77066d9b88920e1e136.jpg"
          username={"Muzamil Hussain"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Review
          img="https://desertsafariabudhabi.files.wordpress.com/2013/05/3.jpg?w=584"
          username={"John Doe"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Review
          img="https://c4.wallpaperflare.com/wallpaper/862/1013/203/yuru-camp-night-view-hd-wallpaper-preview.jpg"
          username={"Abdul Moiz"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Review
          img="https://rac.com.pk/wp-content/uploads/2021/02/c4cbf944aef5d77066d9b88920e1e136.jpg"
          username={"Colt Steele"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Review
          img="https://desertsafariabudhabi.files.wordpress.com/2013/05/3.jpg?w=584"
          username={"Jonas"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Review
          img="https://c4.wallpaperflare.com/wallpaper/862/1013/203/yuru-camp-night-view-hd-wallpaper-preview.jpg"
          username={"Berlin"}
          reviewText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </div>
  );
};
