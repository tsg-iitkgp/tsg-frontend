import awardsData from "./awardsData.json";
import ContactCard from "../../components/ContactCard";

export default function AwardSection({ currentYear, currentTab }) {
  const data = awardsData?.[currentYear]?.[currentTab];
  const awards = currentTab !== "SPECIAL RECOGNITION"
    ? data?.["awards"]
    : data;

  if (!awards || awards.length === 0) {
    return (
      <>
        <h2 className="awards-sectionTitle">Awards</h2>
        <p style={{ textAlign: "center", color: "#666", padding: "2rem 0" }}>
          No awards data available for this selection.
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="awards-sectionTitle">Awards</h2>
      <div className="awards-cards" data-aos="zoom-in-up">
        {awards.map((winner, index) => (
          <ContactCard
            key={index}
            name={winner.Name}
            imgSrc={`data/media/images/awards/${winner.Image}`}
            designation={winner.Award}
            email={winner.email}
            facebook={winner.facebook}
            linkedin={winner.linkedin}
          />
        ))}
      </div>
    </>
  );
}
