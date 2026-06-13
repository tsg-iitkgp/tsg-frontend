import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ background: scrolled ? 'rgba(10,10,10,0.98)' : 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, transparent 100%)' }}>
      <a href="#" className="nav-logo">
        <img src="/gymkhanaLogo.png" alt="TSG Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <div className="nav-logo-text">
          <span className="nav-logo-title">IIT KHARAGPUR</span>
          <span className="nav-logo-sub">Sports Gymkhana</span>
        </div>
      </a>
      
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#sports" onClick={() => setMenuOpen(false)}>Sports</a></li>
        <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
        <li><a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a></li>
        <li><a href="#championship" onClick={() => setMenuOpen(false)}>Championship</a></li>
        <li><a href="#inter-iit" onClick={() => setMenuOpen(false)}>Inter-IIT</a></li>
        <li><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}