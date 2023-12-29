import React from "react";
import { useEffect, useState } from "react";
import { storage } from "./firebase";

const Pho = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("").listAll();
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
    <div>
      {files.map((photo) => (
        <img src={photo} alt="alternative" height={800} />
      ))}
    </div>
  );
};

export default Pho;
