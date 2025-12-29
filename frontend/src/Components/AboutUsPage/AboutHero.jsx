import { useEffect, useState } from "react";
import "./AboutHero.css";

import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
import img3 from "../../assets/about3.jpg";

const slides = [
  {
    title: "Travel is not about places.",
    subtitle: "It’s about stories.",
    text:
      "Moussafir helps travelers discover Morocco through its stories, culture, and human connections — not just locations.",
    image: img1,
  },
  {
    title: "Discover the real Morocco.",
    subtitle: "Beyond the usual routes.",
    text:
      "From southern cities to hidden landscapes, Moussafir guides you through authentic experiences shaped by local life.",
    image: img2,
  },
  {
    title: "Every city has a soul.",
    subtitle: "We help you find it.",
    text:
      "Our mission is to reveal Morocco region by region, city by city, with respect, depth, and curiosity.",
    image: img3,
  },
];

const AboutHero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-carousel">
      {/* IMAGE */}
      <div className="carousel-image">
        <img src={slides[active].image} alt="Morocco travel" />
      </div>

      {/* TEXT */}
      <div className="carousel-text">
        <span className="carousel-tag">About Moussafir</span>

        <h1>
          {slides[active].title} <br />
          <span>{slides[active].subtitle}</span>
        </h1>

        <p>{slides[active].text}</p>

        {/* DOTS */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === active ? "dot active" : "dot"}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
