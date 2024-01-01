import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "../photos";
import "./Home.css";
import Pho from "../Pho";

const Home = () => {
  return (
    <div className="home-body">
      {/* <PhotoAlbum layout="masonry" photos={photos} /> */}
      <Pho />
    </div>
  );
};

export default Home;
