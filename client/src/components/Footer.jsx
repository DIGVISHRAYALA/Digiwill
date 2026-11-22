
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="brand">
        <div className="brand-icon">
          <ShieldCheck size={22}/>
        </div>
        <span>Digi<span className="brand-highlight">Will</span></span>
      </Link>

      <p>Protecting what matters. Preserving your legacy.</p>

      <span>© 2026 DigiWill. All rights reserved.</span>
    </footer>
  );
}
