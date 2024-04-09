import React from "react";
import { useState } from "react";
import { storage } from "../firebase";
import "./Photos.css";
import ImageComponent from "./ImageComponent";
import { BeatLoader } from "react-spinners";
import { useQuery } from "react-query";

const fetchImages = async (category) => {
  const result = await storage.ref().child(category).listAll();
  const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());
  const urls = await Promise.all(urlPromises);
  return urls;
};

const Pho = ({ queryClient }) => {
  const [selectedCategory, setSelectedCategory] = useState("tourmaline");

  const { data: files, isLoading } = useQuery(
    ["images", selectedCategory],
    () => fetchImages(selectedCategory),
    {
      staleTime: 600000,
    }
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="filter-options">
        <button onClick={() => handleCategoryChange("tourmaline")}>
          Tourmaline
        </button>
        <button onClick={() => handleCategoryChange("amber")}>Amber</button>
        <button onClick={() => handleCategoryChange("morganite")}>
          Morganite
        </button>
        <button onClick={() => handleCategoryChange("agate")}>Agate</button>

        <button onClick={() => handleCategoryChange("hematite")}>
          Hematite
        </button>
      </div>
      <div className="photo-portfolio-container">
        {isLoading && (
          <div className="spinner-container">
            <BeatLoader
              loading={isLoading}
              size={30}
              color="#2980b9"
              className="spinner"
            />
          </div>
        )}
        {!isLoading &&
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
