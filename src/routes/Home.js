import React from "react";
import "./Home.css";
import Pho from "../components/Photos";

const Home = ({ queryClient }) => {
  return (
    <div className="home-body">
      <Pho queryClient={queryClient} />
    </div>
  );
};

export default Home;
