import { hallsData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function Championship() {
  return (
    <section id="championship">
      <div className="champ-bg"></div>
      <div className="section-label">Inter-Hall Competition</div>
      <h2 className="section-title">GENERAL CHAMPIONSHIP</h2>
      <p className="section-sub">21 halls compete across Sports, Cultural, Technology, and Hall Affairs. Every point counts. The GC trophy is the most coveted prize on campus.</p>
      
      <Reveal>
        <div className="halls-grid">
          {hallsData.map((hall) => (
            <div className={`hall-card ${hall.champion ? 'champion' : ''}`} key={hall.id}>
              <span className="hall-icon">🏠</span>
              <div className="hall-name">{hall.name}</div>
              <div className="hall-type">{hall.type}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--kgp-muted)' }}>+ 9 additional halls. Women's hostels participate as a joint team in most sports events.</p>
    </section>
  );
}