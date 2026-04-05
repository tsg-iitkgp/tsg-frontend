import awardsData from "./awardsData.json";

export default function HonourSection({ currentYear, currentTab }) {
  const honours = awardsData?.[currentYear]?.[currentTab]?.["honours"];

  if (!honours || honours.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className="awards-sectionTitle">Honours</h2>
      <div className="awards-tableContainer" data-aos="zoom-in-up">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Institute Award</th>
              {currentTab === "SPORTS & GAMES" && <th>Sport</th>}
            </tr>
          </thead>
          <tbody>
            {honours.map((winner, index) => (
              <tr key={index}>
                <td>{winner.Name}</td>
                <td>{winner.Roll}</td>
                <td>{winner.Award}</td>
                {currentTab === "SPORTS & GAMES" && <td>{winner.Game}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
