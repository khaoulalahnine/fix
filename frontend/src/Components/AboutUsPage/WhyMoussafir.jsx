import "./WhyMoussafir.css";
import { FaMapMarkedAlt, FaStar, FaUsers, FaLeaf } from "react-icons/fa";

const reasons = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Explore All Regions",
    description:
      "From southern deserts to northern coasts, we cover every hidden gem in Morocco.",
  },
  {
    icon: <FaStar />,
    title: "Curated Experiences",
    description:
      "Each destination is carefully selected and reviewed for quality and authenticity.",
  },
  {
    icon: <FaUsers />,
    title: "Connect with Locals",
    description:
      "We bring you closer to Moroccan culture through genuine interactions.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Travel",
    description:
      "Supporting local communities and encouraging responsible tourism.",
  },
];

const WhyMoussafir = () => {
  return (
    <section className="why-moussafir-section">
      <h2 className="why-moussafir-title">Why Choose Moussafir?</h2>
      <div className="why-moussafir-grid">
        {reasons.map((item, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMoussafir;
