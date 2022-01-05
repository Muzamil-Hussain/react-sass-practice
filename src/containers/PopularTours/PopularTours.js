import React from "react";
import "./PopularTours.scss";
import { SecondaryHeading, Tour as Card } from "../../components";

export const PopularTours = () => {
  return (
    <div className="populartours">
      <SecondaryHeading headingText="Popular Tours" />

      <div className="populartours__cards">
        <Card
          img="https://rac.com.pk/wp-content/uploads/2021/02/c4cbf944aef5d77066d9b88920e1e136.jpg"
          title={"Fairy Meadows"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Card
          img="https://desertsafariabudhabi.files.wordpress.com/2013/05/3.jpg?w=584"
          title={"Desert Safari Camps"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Card
          img="https://c4.wallpaperflare.com/wallpaper/862/1013/203/yuru-camp-night-view-hd-wallpaper-preview.jpg"
          title={"Yuru Camps"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </div>
    </div>
  );
};
