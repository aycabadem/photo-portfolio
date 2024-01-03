import React, { useState } from "react";

const ImageComponent = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div>
      {!loaded && <p>Loading...</p>}
      <img
        onLoad={handleImageLoaded}
        src={src}
        alt={alt}
        style={{ display: loaded ? "block" : "none" }}
      />
    </div>
  );
};

export default ImageComponent;
