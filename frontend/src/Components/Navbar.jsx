import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X, User } from "lucide-react";
import { logout } from "../features/auth/authSlice";
import logo from "../assets/logo.png";
import "../app.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const links = [
    { name: "Discover", dropdown: [{ label: "All Guides", path: "/guides" }] },
    { name: "About us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const isAdmin = user && user.role !== "Traveler";

  const handleLogout = () => dispatch(logout());

  return (
    <nav className="advanced-nav">
      <Link to="/" className="nav-left">
        <img src={logo} alt="Moussafir logo" className="brand-logo" />
        <span className="brand-name">MOUSSAFIR</span>
      </Link>

      <ul className={`nav-center ${mobileOpen ? "mobile-open" : ""}`}>
        {links.map((link, i) => (
          <li key={i} className="nav-item">
            {link.dropdown ? (
              <>
                <div className="nav-link">
                  {link.name} <ChevronDown size={14} />
                </div>
                <ul className="dropdown">
                  {link.dropdown.map((item, j) => (
                    <li key={j}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={link.path}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        {!user && <Link to="/auth">Login</Link>}
        {user && (
          <div className="relative group">
            <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition">
              <User size={18} />
            </div>
            <ul className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg overflow-hidden text-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {isAdmin ? (
                <>
                  <li>
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin-profile">Profile</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/traveler-profile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="/my-bookings">My Bookings</Link>
                  </li>
                  <li>
                    <Link to="/favorites">My Favorites</Link>
                  </li>
                </>
              )}
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
