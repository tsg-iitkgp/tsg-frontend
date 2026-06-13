import { facilitiesData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function Facilities() {
  return (
    <section id="facilities">
      <div className="section-label">Infrastructure</div>
      <h2 className="section-title">WORLD-CLASS FACILITIES</h2>
      <p className="section-sub">IIT Kharagpur's 2,100-acre campus — the largest IIT — houses sporting infrastructure that rivals professional venues.</p>
      
      <div className="facilities-layout">
        {facilitiesData.map((facility, index) => (
          <Reveal delayClass={`reveal-delay-${index % 3}`} key={facility.id}>
            <div className={`facility-item ${facility.large ? 'large' : ''}`}>
              <span className="facility-num">{facility.id}</span>
              <span className="facility-icon">{facility.icon}</span>
              <div className="facility-name">{facility.name}</div>
              <div className="facility-detail">{facility.detail}</div>
              <span className="facility-tag">{facility.tag}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
