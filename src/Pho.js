import React from "react";
import { useEffect, useState } from "react";
import { storage } from "./firebase";
import "./Pho.css";
//import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ImageComponent from "./ImageComponent";

const Pho = () => {
  const [files, setFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("tourmaline");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        let result = await storage.ref().child(selectedCategory).listAll();
        let urlPromises = result.items.map((imageRef) =>
          imageRef.getDownloadURL()
        );

        const urls = await Promise.all(urlPromises);
        setFiles(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="filter-options">
        <button onClick={() => handleCategoryChange("tourmaline")}>
          Tourmaline
        </button>
        <button onClick={() => handleCategoryChange("morganite")}>
          Morganite
        </button>
        <button onClick={() => handleCategoryChange("agate")}>Agate</button>
        <button onClick={() => handleCategoryChange("amber")}>Amber</button>
        <button onClick={() => handleCategoryChange("hematite")}>
          Hematite
        </button>
      </div>
      <div className="photo-portfolio-container">
        {loading && <p>Loading...</p>}
        {!loading &&
          files.map((photo, index) => (
            <div key={index} className="photo-item">
              <ImageComponent
                key={index}
                src={photo}
                alt={`alternative-${index}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pho;
