import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">
          Stay Inspired. Travel Smarter.
        </h2>

        <p className="newsletter-subtitle">
          Subscribe for exclusive trips, authentic experiences, and real memories.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        <span className="newsletter-note">
          No spam. Only trusted guides & real stories.
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
