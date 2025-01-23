import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./RoadSigns.css"; // Add custom CSS for styling (see below)

const RoadSigns = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const roadSignsData = [
    {
      image: "/roadSignsimg/img1.jpg",
      title: "Stop Sign",
      description:
        "This sign indicates that drivers must come to a complete stop. It is commonly found at intersections and requires drivers to yield to other vehicles and pedestrians before proceeding.",
    },
    {
      image: "/roadSignsimg/img2.jpg",
      title: "Speed Limit Sign",
      description:
        "This sign displays the maximum speed limit allowed on a particular road. In Japan, speed limits vary depending on the type of road, such as 30-40 km/h in residential areas and up to 100 km/h on highways.",
    },
    {
      image: "/roadSignsimg/img3.jpg",
      title: "No Parking Sign",
      description:
        "This sign indicates that parking is prohibited in the area. Violating this rule can result in fines and towing of the vehicle. Always look for designated parking areas.",
    },
    {
      image: "/roadSignsimg/img4.jpg",
      title: "Pedestrian Crossing Sign",
      description:
        "This sign warns drivers of a pedestrian crossing ahead. Drivers must yield to pedestrians and be prepared to stop if someone is crossing the road.",
    },
    {
      image: "/roadSignsimg/img5.jpg",
      title: "No Entry Sign",
      description:
        "This sign indicates that vehicles are not allowed to enter a particular road or area. It is often seen on one-way streets or restricted zones.",
    },
    {
      image: "/roadSignsimg/img6.jpg",
      title: "Curve Ahead Sign",
      description:
        "This sign warns drivers of a sharp curve ahead. Drivers should reduce speed and proceed with caution to navigate the curve safely.",
    },
    {
      image: "/roadSignsimg/img7.jpg",
      title: "School Zone Sign",
      description:
        "This sign indicates that the area is near a school. Drivers must reduce speed and be extra cautious, as children may be crossing the road or playing nearby.",
    },
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
          {roadSignsData.map((sign, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="road-sign-card shadow-sm"
                onClick={() => handleImageClick(sign.image)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <img
                  src={sign.image}
                  alt={`Road Sign ${index + 1}`}
                  className="road-sign-image"
                />
                <div className="road-sign-info mt-3">
                  <h5 className="text-primary">{sign.title}</h5>
                  <p style={{ fontSize: "14px", fontFamily: "'Roboto', sans-serif" }}>
                    {sign.description}
                  </p>
                </div>
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