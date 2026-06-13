import { timelineData, medalTableData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function InterIIT() {
  return (
    <section id="inter-iit">
      <div className="section-label">National Stage</div>
      <h2 className="section-title">INTER-IIT SPORTS MEET</h2>
      <p className="section-sub">Since the very first Inter-IIT meet in 1961, IIT Kharagpur has been a founding force in this premier national competition of the IITs.</p>
      
      <div className="inter-iit-layout">
        <div>
          <div className="timeline">
            {timelineData.map((item) => (
              <div className={`timeline-item ${item.winner ? 'winner' : ''}`} key={item.id}>
                <div className="timeline-left">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">{item.title}</div>
                  <div className="timeline-detail">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="section-label">Sports at Inter-IIT</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px', marginBottom: '20px' }}>MEDAL TABLE — 57th INTER-IIT 2024</h3>
          <Reveal>
            <div className="medal-table">
              <div className="medal-table-header">
                <span>Sport</span>
                <span style={{ textAlign: 'center' }}>Gold</span>
                <span style={{ textAlign: 'center' }}>Silver</span>
                <span style={{ textAlign: 'center' }}>Bronze</span>
                <span style={{ textAlign: 'center' }}>Rank</span>
              </div>
              {medalTableData.map((row) => (
                <div className={`medal-table-row ${row.highlight ? 'highlight' : ''}`} key={row.id}>
                  <span className="row-sport">{row.sport}</span>
                  <span className="row-medal">{row.gold}</span>
                  <span className="row-medal">{row.silver}</span>
                  <span className="row-medal">{row.bronze}</span>
                  <span className={`row-rank ${row.rankClass}`}>{row.rank}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}