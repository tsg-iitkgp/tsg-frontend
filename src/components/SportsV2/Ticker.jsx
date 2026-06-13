export default function Ticker() {
  const tickerItems = [
    "54th Inter-IIT Champions 2019",
    "General Championship — Sports",
    "Jnan Ghosh Stadium",
    "Tata Sports Complex",
    "Olympic-standard Aquatic Centre",
    "15 Sports at Inter-IIT",
    "India's Oldest & Largest IIT",
    "NSO Programme since 1952"
  ];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {/* Render twice for the seamless CSS infinite scroll loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span className="ticker-item" key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
