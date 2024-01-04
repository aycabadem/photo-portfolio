import React from "react";
//import PhotoAlbum from "react-photo-album";
//simport photos from "../photos";
import "./Home.css";
import Pho from "../Pho";

const Home = ({ queryClient }) => {
  return (
    <div className="home-body">
      {/* <PhotoAlbum layout="masonry" photos={photos} /> */}
      <Pho queryClient={queryClient} />
    </div>
  );
};

export default Home;
