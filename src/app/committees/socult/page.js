import CommitteeTemplate from "../../../components/CommitteeTemplate/CommitteeTemplate";

export const metadata = {
  title: "Social & Cultural Committee",
  description: "The Social & Cultural Committee of the Technology Students' Gymkhana, IIT Kharagpur.",
};

export default function SocultPage() {
  const descriptionParagraphs = [
    "The Social and Cultural Committee of the Technology Students' Gymkhana is responsible for fostering and promoting the rich cultural life of IIT Kharagpur. Encompassing a diverse range of activities including music, dance, dramatics, fine arts, and literary pursuits, the committee provides a platform for students to explore and express their creative talents.",
    "Managed by student representatives and guided by faculty members, it oversees the functioning of various societies, organizes major cultural events and fests, and encourages participation at both intra- and inter-institute levels. Through its initiatives, the committee strives to cultivate artistic excellence, cultural awareness, and a vibrant campus spirit among the student community."
  ];

  return (
    <CommitteeTemplate
      category="Social & Cultural"
      shortName="SO-CULT"
      title="Social & Cultural"
      descriptionParagraphs={descriptionParagraphs}
    />
  );
}
