import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "../photos";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
};

export default Home;
