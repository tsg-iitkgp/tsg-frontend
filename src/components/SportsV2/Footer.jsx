export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/gymkhanaLogo.png" alt="TSG Logo" style={{ width: '32px', height: '32px', objectFit: 'contain', marginRight: '10px', verticalAlign: 'middle' }} />
            IIT KGP SPORTS
          </div>
          <p className="footer-tagline">Promoting sporting excellence since 1952. India's oldest IIT. Largest campus. Strongest spirit.</p>
        </div>
        <div className="footer-links-group">
          <div className="footer-links-title">Sports</div>
          <ul className="footer-links-list">
            <li><a href="#sports">All Disciplines</a></li>
            <li><a href="#inter-iit">Inter-IIT Meet</a></li>
            <li><a href="#events">Events Calendar</a></li>
            <li><a href="#achievements">Achievements</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <div className="footer-links-title">Campus</div>
          <ul className="footer-links-list">
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#championship">General Championship</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://gymkhana.iitkgp.ac.in" target="_blank" rel="noreferrer">Gymkhana</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <div className="footer-links-title">Quick Access</div>
          <ul className="footer-links-list">
            <li><a href="#">Facility Booking</a></li>
            <li><a href="#">NSO Registration</a></li>
            <li><a href="#">Hall Sports</a></li>
            <li><a href="#">Sports Committee</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Technology Students' Gymkhana, IIT Kharagpur. All rights reserved.</span>
        <span className="footer-tsg">TSG · Sports Division</span>
      </div>
    </footer>
  );
}