import React from "react";
import { useEffect, useState } from "react";
import { storage } from "./firebase";
import "./Pho.css";

const Pho = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("deneme/deneme2").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      console.log(urls);
      setFiles(urls);
    };
    loadImages();
  }, []);

  return (
    <div className="photo-portfolio-container">
      {files.map((photo) => (
        /* <img src={photo} alt="alternative" height={800} /> */
        <div className="photo-item">
          <img src={photo} alt="alternative" />
        </div>
      ))}
    </div>
  );
};

export default Pho;
