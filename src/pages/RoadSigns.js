import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./RoadSigns.css"; // Add custom CSS for styling (see below)

const RoadSigns = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const roadSignsImages = [
    "/roadSignsimg/img1.jpg",
    "/roadSignsimg/img2.jpg",
    "/roadSignsimg/img3.jpg",
    "/roadSignsimg/img4.jpg",
    "/roadSignsimg/img5.jpg",
    "/roadSignsimg/img6.jpg",
    "/roadSignsimg/img7.jpg",
  ];

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Japanese Road Signs | 日本の道路標識
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Explore the most important road signs in Japan. Hover to see the details, and click to view in full screen!
        </p>

        <div className="row">
          {roadSignsImages.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="road-sign-card shadow-sm"
                onClick={() => handleImageClick(image)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={image}
                  alt={`Road Sign ${index + 1}`}
                  className="road-sign-image"
                />
              </div>
            </div>
          ))}
        </div>

        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen Road Sign" className="fullscreen-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadSigns;
