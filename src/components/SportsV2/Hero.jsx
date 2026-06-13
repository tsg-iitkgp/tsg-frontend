export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-stripes"></div>
      <div className="hero-bg-number">1951</div>

      <div className="hero-content">
        <div className="hero-tag">Technology Students' Gymkhana</div>
        <h1 className="hero-title" style={{ lineHeight: 0.85 }}>
          FORGED<br/>
          ON THE<br/>
          <span className="accent">FIELD</span>
        </h1>
        <p className="hero-desc">
          Where champions are built. India's largest IIT campus houses world-class sporting infrastructure, 
          producing athletes who excel at the Inter-IIT stage and beyond.
        </p>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-num">15<span>+</span></div>
            <div className="hero-stat-label">Sports Disciplines</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">21<span></span></div>
            <div className="hero-stat-label">Halls of Residence</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">54<span>th</span></div>
            <div className="hero-stat-label">Inter-IIT Champions</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">2100<span>ac</span></div>
            <div className="hero-stat-label">Campus (Largest IIT)</div>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#sports" className="btn-primary">Explore Sports →</a>
          <a href="#inter-iit" className="btn-ghost">Inter-IIT Records</a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}