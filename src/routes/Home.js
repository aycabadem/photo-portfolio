import React from "react";
import "./Home.css";
import Pho from "../Pho";

const Home = ({ queryClient }) => {
  return (
    <div className="home-body">
      <Pho queryClient={queryClient} />
    </div>
  );
};

export default Home;
