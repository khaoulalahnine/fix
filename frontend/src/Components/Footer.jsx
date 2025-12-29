import React from "react";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Brand + Description */}
        <div className="footer-brand">
          <h2>Moussafir</h2>
          <p>
            Explore Morocco with us. Discover authentic guides, artisans, and
            hidden gems across the country.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/guides">Top Guides</a></li>
            <li><a href="/places">Top Places</a></li>
            <li><a href="/trips">Trips</a></li>
            <li><a href="/artisan">Artisans</a></li>
            <li><a href="/restaurants">Restaurants</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><Mail size={16} /> info@moussafir.com</p>
          <p><Phone size={16} /> +212 600 000 000</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank"><Instagram size={20} /></a>
            <a href="https://facebook.com" target="_blank"><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get updates about new trips and offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Moussafir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
