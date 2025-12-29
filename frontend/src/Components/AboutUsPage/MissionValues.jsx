import "./MissionValues.css";
import { FaGlobe, FaHeart, FaUsers, FaLightbulb } from "react-icons/fa";

const values = [
  {
    icon: <FaGlobe />,
    title: "Explore Morocco",
    description:
      "Highlighting authentic destinations and experiences across all regions.",
  },
  {
    icon: <FaHeart />,
    title: "Respect Culture",
    description:
      "Promoting responsible travel that respects local traditions and communities.",
  },
  {
    icon: <FaUsers />,
    title: "Connect People",
    description:
      "Linking travelers with locals to create unforgettable experiences.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Approach",
    description:
      "Providing curated guides and smart tips to simplify trip planning.",
  },
];

const MissionValues = () => {
  return (
    <section className="mission-values-section">
      <h2 className="mission-values-title">Our Mission & Values</h2>
      <div className="mission-values-grid">
        {values.map((item, index) => (
          <div key={index} className="value-card">
            <div className="value-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;
