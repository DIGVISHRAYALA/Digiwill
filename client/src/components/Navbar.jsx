
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <div className="brand-icon">
          <ShieldCheck size={24} />
        </div>
        <span>Digi<span className="brand-highlight">Will</span></span>
      </Link>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/register" className="nav-button" onClick={() => setMenuOpen(false)}>
          Get Started <ArrowRight size={16}/>
        </Link>
      </div>

      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X/> : <Menu/>}
      </button>
    </nav>
  );
}
