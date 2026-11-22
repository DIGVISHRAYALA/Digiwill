
import { Link } from "react-router-dom";
import {
  ShieldCheck, LockKeyhole, Clock, Users,
  FileText, ArrowRight, CheckCircle2, KeyRound,
  Bell, Heart
} from "lucide-react";
import Footer from "../components/Footer";

function Feature({ icon, title, description, number }) {
  return (
    <div className="feature-card">
      <div className="feature-top">
        <div className="feature-icon">{icon}</div>
        <span>{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <ShieldCheck size={15}/>
            YOUR DIGITAL LEGACY, PROTECTED
          </div>

          <h1>
            Your Legacy.<br/>
            Your Wishes.<br/>
            <span>Always Protected.</span>
          </h1>

          <p>
            Securely preserve your important documents, financial
            information and final wishes. Ensure they reach the
            right people at the right time.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Get Started <ArrowRight size={18}/>
            </Link>

            <a href="#how-it-works" className="secondary-button">
              Explore How It Works
            </a>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <ShieldCheck size={17}/> Security focused
            </div>
            <div className="trust-item">
              <LockKeyhole size={17}/> Privacy focused
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="vault-card">
            <div className="vault-top">
              <div className="vault-symbol">
                <ShieldCheck size={27}/>
              </div>
              <span className="status-dot">● Protected</span>
            </div>

            <p className="vault-label">DIGIWILL SECURE VAULT</p>
            <h3>Your legacy, in safe hands.</h3>

            {[
              ["Encrypted Storage", "Designed for sensitive information"],
              ["Periodic Check-ins", "Owner-controlled check-in system"],
              ["Trusted Nominees", "Multi-party verification"]
            ].map((item, index) => (
              <div className="vault-line" key={index}>
                {[<LockKeyhole/>, <Clock/>, <Users/>][index]}
                <div>
                  <strong>{item[0]}</strong>
                  <small>{item[1]}</small>
                </div>
                <CheckCircle2 className="check-icon"/>
              </div>
            ))}

            <div className="vault-footer">
              <ShieldCheck size={15}/>
              Your information. Your control.
            </div>
          </div>

          <div className="floating-icon float-one">
            <LockKeyhole size={22}/>
          </div>
          <div className="floating-icon float-two">
            <Heart size={22}/>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="section-tag">WHAT DIGIWILL OFFERS</span>
          <h2>
            Everything important, <span>in one secure place.</span>
          </h2>
          <p>
            A digital legacy management system built around
            security, trust and controlled access.
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            number="01"
            icon={<LockKeyhole/>}
            title="Secure Digital Vault"
            description="Preserve important documents, financial details, passwords and final wishes."
          />
          <Feature
            number="02"
            icon={<Clock/>}
            title="Dead Man's Switch"
            description="Periodic check-ins help detect prolonged inactivity and initiate reminders."
          />
          <Feature
            number="03"
            icon={<Users/>}
            title="Trusted Nominees"
            description="Assign trusted people who independently participate in verification."
          />
          <Feature
            number="04"
            icon={<KeyRound/>}
            title="Key Sharing"
            description="Threshold-based secret sharing prevents one person from unlocking the vault alone."
          />
          <Feature
            number="05"
            icon={<Bell/>}
            title="Smart Notifications"
            description="Notify the owner first before starting nominee escalation."
          />
          <Feature
            number="06"
            icon={<FileText/>}
            title="Audit Trail"
            description="Maintain records of check-ins, reminders, confirmations and releases."
          />
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <span className="section-tag">HOW IT WORKS</span>
          <h2>A carefully controlled <span>handover process.</span></h2>
        </div>

        <div className="steps-grid">
          {[
            ["01", "Create Your Vault", "Register, add important information and assign trusted nominees."],
            ["02", "Regular Check-ins", "Periodically confirm that you are safe and your account is active."],
            ["03", "Independent Verification", "Missed check-ins initiate reminders and multi-party verification."],
            ["04", "Controlled Handover", "Authorized information is released only after required checks."]
          ].map((step) => (
            <div className="step-card" key={step[0]}>
              <span>{step[0]}</span>
              <div className="step-line"></div>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Your digital legacy deserves protection.</h2>
        <p>Start organizing what matters today.</p>
        <Link to="/register" className="primary-button">
          Create Your Account <ArrowRight size={18}/>
        </Link>
      </section>

      <Footer/>
    </>
  );
}
