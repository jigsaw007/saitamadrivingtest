import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaCar, FaTrafficLight, FaCheckCircle } from "react-icons/fa";

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
          backgroundColor: "#f9f9f9", // Light background color
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Saitama Driving Test | 埼玉県運転免許試験
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Choose the type of quiz you want to take and test your knowledge! <br />
          埼玉運転免許テストで運転知識を確認しよう！
        </p>

        {/* Keyword Section */}
        <div
          className="text-center mb-5 p-3 shadow-sm rounded"
          style={{ backgroundColor: "#e8f5e9", border: "1px solid #c8e6c9" }}
        >
          <h4 className="text-success mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Saitama Driving License Test Practice Questions
          </h4>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Designed for both AT (Automatic Transmission) and MT (Manual Transmission) users. <br />
            AT（オートマ）および MT（マニュアル）ユーザー専用のテストです。
          </p>
        </div>

        {/* Main Navigation Section */}
        <div className="row justify-content-center">
          {/* Karimen Section */}
          <div
            className="col-md-4 d-flex justify-content-center"
            onClick={() => handleNavigate("/karimen")}
          >
            <div
              className="card shadow-sm text-center p-4 hover-card"
              style={{
                cursor: "pointer",
                backgroundColor: "#ffffff", // White card background
                borderRadius: "10px",
              }}
            >
              <FaCar size={40} className="mb-3 text-primary" />
              <h3 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Karimen 仮免許</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Prepare for the Karimen quiz and sharpen your skills. <br />
                仮免許テストで基本的な運転スキルを向上させましょう。
              </p>
            </div>
          </div>

          {/* Honmen Section */}
          <div
            className="col-md-4 d-flex justify-content-center"
            onClick={() => handleNavigate("/honmen")}
          >
            <div
              className="card shadow-sm text-center p-4 hover-card"
              style={{
                cursor: "pointer",
                backgroundColor: "#ffffff", // White card background
                borderRadius: "10px",
              }}
            >
              <FaTrafficLight size={40} className="mb-3 text-danger" />
              <h3 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Honmen 本免許</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Challenge yourself with the Honmen quiz to test your knowledge. <br />
                本免許テストで交通規則と道路マナーを学びましょう。
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}
        >
          <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Traffic Signs and Symbols - 交通標識とシンボル
          </h4>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <FaCar size={50} className="text-primary mb-2" />
              <p style={{ fontSize: "16px", color: "#555" }}>
                Learn about vehicle restrictions. <br /> 車両通行制限について学びます。
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <FaTrafficLight size={50} className="text-danger mb-2" />
              <p style={{ fontSize: "16px", color: "#555" }}>
                Master traffic light rules. <br /> 信号機のルールをマスターしましょう。
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <FaCheckCircle size={50} className="text-success mb-2" />
              <p style={{ fontSize: "16px", color: "#555" }}>
                Ensure safe driving with guaranteed knowledge. <br />
                安全運転のための確実な知識を身につけましょう。
              </p>
            </div>
            {/* Did You Know Section */}
<div
  className="mt-5 p-4 rounded shadow-sm"
  style={{ backgroundColor: "#e1f5fe", border: "1px solid #81d4fa" }}
>
  <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
    Did You Know? 豆知識
  </h4>
  <div className="row text-center">
    <div className="col-md-4 mb-3">
      <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif", color: "#555" }}>
        Japan has over 140 unique traffic signs! <br /> 日本には140以上のユニークな交通標識があります。
      </p>
    </div>
    <div className="col-md-4 mb-3">
      <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif', color: '#555" }}>
        The average passing rate for Honmen tests is 70%. <br /> 本免許テストの合格率は平均70％です。
      </p>
    </div>
    <div className="col-md-4 mb-3">
      <p style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif", color: "#555" }}>
        Saitama has one of the highest numbers of driving schools in Japan! <br />
        埼玉県は日本で最も多くの運転学校がある県の1つです。
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
