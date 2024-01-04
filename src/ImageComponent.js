import React, { useState } from "react";
import ContentLoader from "react-content-loader";
const MyImageLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="auto"
    viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
  </ContentLoader>
);

const ImageComponent = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div>
      {!loaded && <MyImageLoader />}
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
