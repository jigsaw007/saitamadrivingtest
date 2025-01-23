import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaCar,
  FaTrafficLight,
  FaCheckCircle,
  FaBook,
  FaExclamationTriangle,
  FaRoute,
  FaTools,
  FaUserShield,
  FaRoad,
  FaStopCircle,
  FaBicycle,
  FaGasPump,
  FaParking,
  FaTachometerAlt,
  FaMapSigns,
  FaIdCard,
  FaQuestionCircle,
  FaClipboardCheck,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar />
      <div
        className="container mt-5 p-5 rounded shadow"
        style={{
          backgroundColor: "#f9f9f9",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
          Saitama Driving Test | 埼玉県運転免許試験
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif", color: "#555" }}>
          Your ultimate destination for preparing and excelling in driving tests. Whether you're a beginner or polishing your knowledge, we've got you covered! <br />
          埼玉運転免許試験で成功への一歩を踏み出しましょう！
        </p>

        {/* Highlight Section */}
        <div
          className="text-center mb-5 p-4 shadow-sm rounded"
          style={{ backgroundColor: "#e8f5e9", border: "1px solid #c8e6c9" }}
        >
          <h4 className="text-success mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <FaTools className="me-2" /> Comprehensive Resources for Driving Test Success
          </h4>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Explore tips, quizzes, and resources tailored for Automatic and Manual Transmission drivers. <br />
            オートマチックとマニュアル運転者のためのカスタマイズされたリソース！
          </p>
        </div>

        {/* Main Navigation Section */}
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center mb-4" onClick={() => handleNavigate("/karimen")}>
            <div
              className="card shadow-sm text-center p-4 hover-card"
              style={{ cursor: "pointer", backgroundColor: "#ffffff", borderRadius: "10px", transition: "transform 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaCar size={40} className="mb-3 text-primary" />
              <h3 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>Karimen 仮免許</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Prepare for the Karimen quiz and sharpen your basic skills. <br />
                仮免許テストで基本的な運転スキルを向上させましょう。
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-4" onClick={() => handleNavigate("/honmen")}>
            <div
              className="card shadow-sm text-center p-4 hover-card"
              style={{ cursor: "pointer", backgroundColor: "#ffffff", borderRadius: "10px", transition: "transform 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaTrafficLight size={40} className="mb-3 text-danger" />
              <h3 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>Honmen 本免許</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Challenge yourself with the Honmen quiz to test your knowledge. <br />
                本免許テストで交通規則と道路マナーを学びましょう。
              </p>
            </div>
          </div>
        </div>

        {/* New Section: Driving License and Theory Exams in Japan */}
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}
        >
          <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
            <FaIdCard className="me-2 text-primary" /> Driving License and Theory Exams in Japan
          </h4>
          <p style={{ fontSize: "16px", color: "#555" }}>
            This page is designed to help you practice for the theory exams required to obtain a driving license in Japan. Whether you're applying for a new license or converting a foreign license, understanding the process and preparing thoroughly is essential. Below, we explain the types of licenses, exams, and steps involved in the process.
          </p>

          {/* Types of Driving Licenses in Japan */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaIdCard className="me-2 text-info" /> Types of Driving Licenses in Japan
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              In Japan, driving licenses are categorized based on the type of vehicle you intend to drive. The main types include:
            </p>
            <ul style={{ fontSize: "16px", color: "#555" }}>
              <li><strong>Ordinary License (普通免許)</strong>: For cars and small vehicles (both automatic and manual transmission).</li>
              <li><strong>Motorcycle License (自動二輪免許)</strong>: For motorcycles of different engine sizes.</li>
              <li><strong>Commercial License (大型免許)</strong>: For large vehicles like trucks and buses.</li>
              <li><strong>Provisional License (仮免許)</strong>: A temporary license for learners to practice driving on public roads.</li>
            </ul>
          </div>

          {/* Steps to Obtain a Driving License */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaClipboardCheck className="me-2 text-success" /> Steps to Obtain a Driving License
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              The process of obtaining a driving license in Japan involves several steps:
            </p>
            <ol style={{ fontSize: "16px", color: "#555" }}>
              <li><strong>Enroll in a Driving School</strong>: Attend a certified driving school to learn both theoretical and practical driving skills.</li>
              <li><strong>Pass the Provisional License Exam</strong>: This includes a written test and a practical driving test.</li>
              <li><strong>Practice Driving</strong>: Use your provisional license to practice driving on public roads under supervision.</li>
              <li><strong>Pass the Final License Exam</strong>: This includes another written test and a practical driving test.</li>
              <li><strong>Receive Your License</strong>: Once you pass all exams, you'll receive your official driving license.</li>
            </ol>
          </div>

          {/* Theory Exams */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaQuestionCircle className="me-2 text-warning" /> Theory Exams
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              The theory exams test your knowledge of traffic rules, road signs, and safe driving practices. They are divided into two parts:
            </p>
            <ul style={{ fontSize: "16px", color: "#555" }}>
              <li><strong>Provisional License Exam</strong>: Focuses on basic traffic rules and safe driving practices.</li>
              <li><strong>Final License Exam</strong>: Covers advanced topics, including emergency situations and environmental driving.</li>
            </ul>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Use our platform to practice for these exams with quizzes and study materials tailored to the Japanese driving system.
            </p>
          </div>

          {/* Closing Paragraph */}
          <p style={{ fontSize: "16px", color: "#555" }}>
            By understanding the types of licenses, the steps to obtain them, and the theory exams, you can confidently prepare for your driving license in Japan. Explore our resources to ace your exams and become a safe and responsible driver.
          </p>
        </div>

        {/* Detailed Traffic Rules Section */}
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}
        >
          <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
            <FaExclamationTriangle className="me-2 text-warning" /> Understanding Japanese Traffic Rules and Regulations
          </h4>

          {/* General Driving Rules */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaRoad className="me-2 text-info" /> General Driving Rules
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japanese traffic laws are designed to ensure the safety of all road users, including pedestrians, cyclists, and drivers. Japan drives on the left side of the road, and most vehicles are right-hand drive. Speed limits vary depending on the type of road: urban areas typically have a speed limit of 40 km/h, while highways can have limits ranging from 80 to 100 km/h. Strict adherence to traffic lights, stop signs, and yield signs is mandatory.
            </p>
          </div>

          {/* Pedestrian Crossings */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaUserShield className="me-2 text-success" /> Pedestrian Crossings
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              One unique feature of Japanese traffic is the importance given to pedestrian crossings. Drivers are required to stop for pedestrians at designated crosswalks. Failing to do so can result in heavy penalties. Additionally, the use of seat belts is mandatory for all passengers, both in the front and back seats.
            </p>
          </div>

          {/* Drunk Driving Laws */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaStopCircle className="me-2 text-danger" /> Drunk Driving Laws
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Drunk driving is strictly prohibited in Japan. The legal blood alcohol concentration (BAC) limit is 0.03%, which is lower than in many other countries. Even being slightly over the limit can result in severe penalties, including license suspension, heavy fines, and possible imprisonment.
            </p>
          </div>

          {/* Vehicle Inspections (Shaken) */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaTools className="me-2 text-warning" /> Vehicle Inspections (Shaken)
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japan places a strong emphasis on vehicle inspections and maintenance. All vehicles must undergo a rigorous inspection every two years, known as "Shaken." This ensures that vehicles are roadworthy and meet environmental standards. Driving an uninspected or uninsured vehicle is illegal and can lead to severe consequences.
            </p>
          </div>

          {/* Cyclist Rules */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaBicycle className="me-2 text-primary" /> Cyclist Rules
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              For cyclists, there are specific rules to follow. While bicycles are considered vehicles, they are generally required to use sidewalks unless otherwise indicated. Cyclists must obey traffic signals and are advised to wear helmets for safety. Riding under the influence of alcohol is also prohibited for cyclists.
            </p>
          </div>

          {/* Penalty Points System */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaExclamationTriangle className="me-2 text-danger" /> Penalty Points System
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japan has a point-based penalty system for traffic violations. Accumulating too many points can lead to license suspension or revocation. Traffic cameras are widely used to enforce speed limits and other rules, making it essential for drivers to remain vigilant at all times.
            </p>
          </div>

          {/* Navigating Expressways */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaRoute className="me-2 text-info" /> Navigating Expressways
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japan's expressways are well-maintained and equipped with modern facilities, but they come with toll fees. Drivers should familiarize themselves with the toll collection system, including the use of Electronic Toll Collection (ETC) cards for seamless transactions. Additionally, expressways have designated service areas offering restrooms, food, and parking, making long-distance travel more comfortable. Always adhere to the speed limits and be cautious of merging traffic when entering or exiting expressways.
            </p>
          </div>

          {/* Fuel Efficiency and Eco-Driving */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaGasPump className="me-2 text-success" /> Fuel Efficiency and Eco-Driving
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japan is a leader in promoting eco-friendly driving practices. Drivers are encouraged to adopt eco-driving techniques, such as smooth acceleration, maintaining steady speeds, and reducing idling time. These practices not only save fuel but also reduce carbon emissions, contributing to a cleaner environment.
            </p>
          </div>

          {/* Parking Regulations */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaParking className="me-2 text-warning" /> Parking Regulations
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Parking in Japan can be challenging, especially in urban areas. Drivers must park only in designated parking areas, and illegal parking can result in hefty fines. Many cities have strict parking regulations, and it's essential to use paid parking lots or garages to avoid penalties.
            </p>
          </div>

          {/* Road Signs and Markings */}
          <div className="mb-4">
            <h5 style={{ fontFamily: "'Poppins', sans-serif", color: "#2c3e50" }}>
              <FaMapSigns className="me-2 text-info" /> Road Signs and Markings
            </h5>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Japanese road signs are designed to be intuitive and easy to understand. They are often color-coded and use universal symbols. Familiarizing yourself with these signs is crucial for safe driving. For example, blue signs indicate mandatory instructions, while red signs denote prohibitions.
            </p>
          </div>

          {/* Closing Paragraph */}
          <p style={{ fontSize: "16px", color: "#555" }}>
            By understanding these rules, cultural practices, and protocols, you can navigate Japan's roads confidently and responsibly. Continue exploring our platform for more detailed guides, quizzes, and resources tailored to make you a better driver in Japan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;