import React from "react";
import Navbar from "../components/Navbar";

const RoadSafetyAndDriving = () => {
  const safetyTips = [
    {
      title: "Stay Focused While Driving",
      description:
        "Avoid distractions like texting or using your phone. Your full attention is critical to stay safe on the road.",
      icon: "🧠",
    },
    {
      title: "Adjust to Weather Conditions",
      description:
        "Rain, snow, or fog requires slower speeds and extra caution. Use fog lights and maintain a greater following distance.",
      icon: "🌧️",
    },
    {
      title: "Don’t Drink and Drive",
      description:
        "Driving under the influence of alcohol or drugs endangers everyone on the road. Use public transport or taxis.",
      icon: "🚫🍺",
    },
    {
      title: "Keep a Safe Distance",
      description:
        "Always maintain a safe distance to give yourself time to react to sudden stops or emergencies.",
      icon: "🚗➖🚗",
    },
    {
      title: "Respect Pedestrians and Cyclists",
      description:
        "Yield at crosswalks and give cyclists enough space when overtaking. Always be alert for vulnerable road users.",
      icon: "🚶‍♂️🚴‍♀️",
    },
  ];

  const maintenanceTips = [
    {
      title: "Regularly Check Tires",
      description:
        "Inspect tire pressure and tread regularly. Properly inflated tires improve fuel efficiency and prevent accidents.",
      icon: "🔧",
    },
    {
      title: "Keep Fluids Topped Up",
      description:
        "Check and refill oil, coolant, and brake fluid regularly to ensure smooth vehicle performance.",
      icon: "💧",
    },
    {
      title: "Replace Worn Brake Pads",
      description:
        "Listen for squeaking sounds while braking. Worn brake pads can significantly reduce stopping power.",
      icon: "🚨",
    },
    {
      title: "Test Lights and Indicators",
      description:
        "Ensure headlights, brake lights, and turn signals are working properly for maximum visibility.",
      icon: "💡",
    },
    {
      title: "Clean and Replace Air Filters",
      description:
        "A clean air filter improves engine performance and reduces emissions. Replace it every 12,000-15,000 km.",
      icon: "🌬️",
    },
  ];

  const penaltyPointsInfo = [
    {
      offense: "Speeding (20 km/h over limit)",
      points: 2,
      penalty: "¥15,000 fine",
    },
    {
      offense: "Running a Red Light",
      points: 2,
      penalty: "¥9,000 fine",
    },
    {
      offense: "Illegal U-Turn",
      points: 1,
      penalty: "¥7,000 fine",
    },
    {
      offense: "Driving Under the Influence",
      points: 35,
      penalty: "License revocation, imprisonment, and ¥1,000,000 fine",
    },
    {
      offense: "Failure to Yield to Pedestrians",
      points: 2,
      penalty: "¥12,000 fine",
    },
  ];

  const drivingInJapanTips = [
    {
      title: "License Conversion for Foreigners",
      description:
        "If you hold a valid foreign driving license, you may convert it to a Japanese license. An aptitude test, vision test, and sometimes a written or practical test are required.",
    },
    {
      title: "Understanding Left-Hand Driving",
      description:
        "In Japan, vehicles drive on the left side of the road. Familiarize yourself with this change to avoid confusion.",
    },
    {
      title: "Speed Limits",
      description:
        "Speed limits vary: 30-40 km/h in residential areas, 50-60 km/h on urban roads, and up to 100 km/h on highways.",
    },
    {
      title: "Toll Roads and ETC Cards",
      description:
        "Many highways in Japan are toll roads. Consider getting an ETC card for faster, cashless payments.",
    },
    {
      title: "Parking Regulations",
      description:
        "Illegal parking can result in heavy fines and towing. Use designated parking lots or spaces.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-5 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Comprehensive Guide to Road Safety and Driving in Japan
        </h1>
        <p
          className="text-center mb-5"
          style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}
        >
          Stay safe and informed on the road. Learn essential tips, maintenance practices, traffic
          penalties, and advice for driving in Japan.
        </p>

        {/* Road Safety Tips Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            🚗 Road Safety Tips
          </h2>
          <div className="row">
            {safetyTips.map((tip, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
                  <h4>{tip.icon} {tip.title}</h4>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vehicle Maintenance Tips Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            🔧 Vehicle Maintenance Tips
          </h2>
          <div className="row">
            {maintenanceTips.map((tip, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
                  <h4>{tip.icon} {tip.title}</h4>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Penalty Points System Section */}
        <section className="mb-5">
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            🚨 Penalty Points System in Japan
          </h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Offense</th>
                <th>Points</th>
                <th>Penalty</th>
              </tr>
            </thead>
            <tbody>
              {penaltyPointsInfo.map((penalty, index) => (
                <tr key={index}>
                  <td>{penalty.offense}</td>
                  <td>{penalty.points}</td>
                  <td>{penalty.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Driving in Japan for Foreigners Section */}
        <section>
          <h2 className="text-primary" style={{ fontFamily: "'Poppins', sans-serif'" }}>
            🌏 Driving in Japan as a Foreigner
          </h2>
          <div className="row">
            {drivingInJapanTips.map((tip, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm p-3" style={{ borderRadius: "10px" }}>
                  <h4>{tip.title}</h4>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadSafetyAndDriving;
