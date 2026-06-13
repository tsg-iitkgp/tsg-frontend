import { sportsData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function Sports() {
  return (
    <section id="sports">
      <div className="sports-header">
        <div>
          <div className="section-label">What We Play</div>
          <h2 className="section-title">SPORTS AT KGP</h2>
          <p className="section-sub">
            From the pitch to the pool, IIT Kharagpur competes in 15 sports disciplines at the national Inter-IIT level, with dozens more at the intra-hall and open levels.
          </p>
        </div>
      </div>
      
      <Reveal>
        <div className="sports-grid">
          {/* This loop dynamically generates all the cards! */}
          {sportsData.map((sport) => (
            <div className="sport-card" key={sport.id}>
              <span className="sport-card-icon">{sport.icon}</span>
              <div className="sport-card-name">{sport.name}</div>
              <div className="sport-card-type">{sport.type}</div>
              <span className="sport-card-arrow">→</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
