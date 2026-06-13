import { achievementsData, bigStatsData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="achievements-bg-text">CHAMPIONS</div>
      <div className="section-label">Our Legacy</div>
      <h2 className="section-title">ACHIEVEMENTS</h2>
      <div className="achievements-layout">
        <Reveal>
          <div className="achievement-list">
            {achievementsData.map((item) => (
              <div className="achievement-item" key={item.id}>
                <span className="achievement-medal">{item.medal}</span>
                <div className="achievement-info">
                  <div className="achievement-title">{item.title}</div>
                  <div className="achievement-year">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        
        <Reveal delayClass="reveal-delay-2">
          <div className="big-stat-panel">
            {bigStatsData.map((stat) => (
              <div className="big-stat" key={stat.id}>
                <div className="big-stat-number">{stat.number}<span>{stat.suffix}</span></div>
                <div className="big-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}