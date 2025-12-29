import "./OurStory.css";

const milestones = [
  {
    year: "2024",
    title: "The Idea is Born",
    description:
      "Moussafir started as a dream to help travelers discover the real Morocco, beyond the usual tourist routes."
  },
  {
    year: "2025",
    title: "Research & Planning",
    description:
      "We visited cities, talked to locals, and curated authentic experiences for travelers."
  },
  {
    year: "2025 Q2",
    title: "Moussafir Website Launch",
    description:
      "The platform went live, featuring southern Morocco destinations and cultural guides."
  },
  {
    year: "2025 Q4",
    title: "Expanding Features",
    description:
      "We added new cities, travel tips, and interactive experiences to enhance every journey."
  }
];

const OurStory = () => {
  return (
    <section className="our-story-section">
      <h2 className="our-story-title">Our Story</h2>

      <div className="timeline">
        {milestones.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
