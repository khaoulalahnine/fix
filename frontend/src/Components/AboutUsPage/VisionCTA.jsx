import "./VisionCTA.css";
import ctaImg from "../../assets/morocco-cta.jpg"; // choose a beautiful Moroccan landscape

const VisionCTA = () => {
  return (
    <section
      className="vision-cta-section"
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      <div className="vision-cta-overlay">
        <div className="vision-cta-content">
          <h2>Discover Morocco, One City at a Time</h2>
          <p>
            From the golden deserts of the south to the vibrant northern cities, Moussafir guides you through authentic experiences and hidden gems.
          </p>
          <a href="/cities" className="cta-button">
            Explore Cities
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionCTA;
