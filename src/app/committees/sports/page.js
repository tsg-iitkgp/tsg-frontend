import CommitteeTemplate from "../../../components/CommitteeTemplate/CommitteeTemplate";

export const metadata = {
  title: "Sports & Games Committee",
  description: "The Sports & Games Committee of the Technology Students' Gymkhana, IIT Kharagpur.",
};

export default function SportsPage() {
  const descriptionParagraphs = [
    "The Sports and Games Committee of the Technology Students' Gymkhana is responsible for fostering a spirit of sportsmanship and athletic excellence at IIT Kharagpur. Encompassing a diverse range of sports ranging from athletics and swimming to team sports like cricket, football, and hockey.",
    "Managed by student representatives and guided by faculty members, it oversees the functioning of various teams, organizes major sporting events, and encourages participation at both intra- and inter-institute levels. The committee strives to cultivate physical fitness, teamwork, and a vibrant competitive spirit among the student community."
  ];

  return (
    <CommitteeTemplate
      category="Sports & Games"
      shortName="SPORTS"
      title="Sports & Games"
      descriptionParagraphs={descriptionParagraphs}
    />
  );
}
