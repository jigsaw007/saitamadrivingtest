import React from "react";
import Navbar from "../components/Navbar";

const DrivingTestVocabulary = () => {
  const drivingVocabulary = [
    {
      english: "Yield",
      japanese: "ゆずる (Yuzuru)",
      description: "To give way to other vehicles or pedestrians.",
    },
    {
      english: "Merge",
      japanese: "合流 (Gōryū)",
      description: "To join a lane of traffic from another lane.",
    },
    {
      english: "Right-of-Way",
      japanese: "優先権 (Yūsenken)",
      description: "The legal right of a vehicle or pedestrian to proceed first in traffic.",
    },
    {
      english: "Pedestrian Crossing",
      japanese: "横断歩道 (Ōdan hodō)",
      description: "A designated area for pedestrians to cross the road.",
    },
    {
      english: "Speed Limit",
      japanese: "制限速度 (Seigen sokudo)",
      description: "The maximum legal speed allowed on a road.",
    },
    {
      english: "Stop Sign",
      japanese: "一時停止 (Ichiji teishi)",
      description: "A sign that requires drivers to come to a complete stop.",
    },
    {
      english: "Traffic Light",
      japanese: "信号機 (Shingōki)",
      description: "A device that controls the flow of traffic using colored lights.",
    },
    {
      english: "Roundabout",
      japanese: "ラウンドアバウト (Raundoabauto)",
      description: "A circular intersection where traffic flows counterclockwise.",
    },
    {
      english: "Lane Change",
      japanese: "車線変更 (Shasen henkō)",
      description: "Moving from one lane to another on a road.",
    },
    {
      english: "U-Turn",
      japanese: "Uターン (Yūtān)",
      description: "Turning a vehicle 180 degrees to go in the opposite direction.",
    },
    {
      english: "Parking",
      japanese: "駐車 (Chūsha)",
      description: "The act of stopping and leaving a vehicle in a designated area.",
    },
    {
      english: "No Parking",
      japanese: "駐車禁止 (Chūsha kinshi)",
      description: "An area where parking is not allowed.",
    },
    {
      english: "No Entry",
      japanese: "進入禁止 (Shinnyū kinshi)",
      description: "A sign indicating that vehicles are not allowed to enter.",
    },
    {
      english: "One-Way Street",
      japanese: "一方通行 (Ippō tsūkō)",
      description: "A street where traffic moves in only one direction.",
    },
    {
      english: "Intersection",
      japanese: "交差点 (Kōsaten)",
      description: "A point where two or more roads meet.",
    },
    {
      english: "Blind Spot",
      japanese: "死角 (Shikaku)",
      description: "An area around a vehicle that the driver cannot see.",
    },
    {
      english: "Emergency Vehicle",
      japanese: "緊急車両 (Kinkyū sharyō)",
      description: "A vehicle used for emergencies, such as an ambulance or fire truck.",
    },
    {
      english: "Seat Belt",
      japanese: "シートベルト (Shīto beruto)",
      description: "A safety device worn by vehicle occupants to prevent injury.",
    },
    {
      english: "Turn Signal",
      japanese: "方向指示器 (Hōkō shijiki)",
      description: "A light on a vehicle that indicates the driver's intention to turn.",
    },
    {
      english: "Brake",
      japanese: "ブレーキ (Burēki)",
      description: "A device used to slow down or stop a vehicle.",
    },
    {
      english: "Accelerator",
      japanese: "アクセル (Akuseru)",
      description: "The pedal used to increase the speed of a vehicle.",
    },
    {
      english: "Steering Wheel",
      japanese: "ハンドル (Handoru)",
      description: "The wheel used to control the direction of a vehicle.",
    },
    {
      english: "Rearview Mirror",
      japanese: "バックミラー (Bakku mirā)",
      description: "A mirror inside the vehicle that allows the driver to see behind.",
    },
    {
      english: "Side Mirror",
      japanese: "サイドミラー (Saido mirā)",
      description: "A mirror on the side of a vehicle that helps the driver see adjacent lanes.",
    },
    {
      english: "Headlight",
      japanese: "ヘッドライト (Heddoraito)",
      description: "The front light of a vehicle used for visibility in the dark.",
    },
    {
      english: "Taillight",
      japanese: "テールライト (Tēruraito)",
      description: "The rear light of a vehicle that indicates braking or turning.",
    },
    {
      english: "Horn",
      japanese: "クラクション (Kurakushon)",
      description: "A device used to alert other drivers or pedestrians.",
    },
    {
      english: "Traffic Jam",
      japanese: "渋滞 (Jūtai)",
      description: "A situation where vehicles are stuck in slow-moving or stopped traffic.",
    },
    {
      english: "Highway",
      japanese: "高速道路 (Kōsoku dōro)",
      description: "A major road designed for high-speed travel between cities.",
    },
    {
      english: "Toll Road",
      japanese: "有料道路 (Yūryō dōro)",
      description: "A road where drivers must pay a fee to use it.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Driving Test Vocabulary | 運転試験の語彙
        </h1>
        <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
          Learn essential driving-related terms in both English and Japanese to help you prepare for the driving test.
        </p>

        <div className="row">
          {drivingVocabulary.map((term, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="vocabulary-card shadow-sm p-3"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <h5 className="text-primary">{term.english}</h5>
                <h6 className="text-secondary">{term.japanese}</h6>
                <p style={{ fontSize: "14px", fontFamily: "'Roboto', sans-serif" }}>
                  {term.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivingTestVocabulary;