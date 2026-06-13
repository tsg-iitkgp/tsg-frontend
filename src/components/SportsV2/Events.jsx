import { eventsData } from '../../data/SportsData';
import Reveal from './Reveal';

export default function Events() {
  return (
    <section id="events">
      <div className="section-label">Calendar</div>
      <h2 className="section-title">KEY EVENTS</h2>
      <p className="section-sub">A year packed with sporting action — from intra-hall rivalries to national championships.</p>
      
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <Reveal delayClass={`reveal-delay-${index % 3}`} key={event.id}>
            <div className={`event-card ${event.featured ? 'featured' : ''}`}>
              <span className="event-tag">{event.tag}</span>
              <div className="event-title">{event.title}</div>
              <p className="event-desc">{event.desc}</p>
              <div className="event-meta">
                {event.meta.map((metaItem, i) => (
                  <span className="event-meta-item" key={i}>{metaItem}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}