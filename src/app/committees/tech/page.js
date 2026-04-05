import CommitteeTemplate from "../../../components/CommitteeTemplate/CommitteeTemplate";

export const metadata = {
  title: "Technology Committee",
  description: "The Technology Committee of the Technology Students' Gymkhana, IIT Kharagpur.",
};

export default function TechPage() {
  const descriptionParagraphs = [
    "The Technology Committee of the Technology Students' Gymkhana is responsible for fostering technological innovation and technical excellence at IIT Kharagpur. Encompassing a diverse range of activities spanning robotics, software development, hardware modelling, data analytics, and artificial intelligence.",
    "Managed by student representatives and guided by faculty members, it oversees the functioning of various hardware and software societies, organizes major tech events and hackathons, and encourages participation at both intra- and inter-institute levels. The committee strives to cultivate technical curiosity, practical problem-solving, and a vibrant culture of innovation among the student community."
  ];

  return (
    <CommitteeTemplate
      category="Technology"
      shortName="TECH"
      title="Technology"
      descriptionParagraphs={descriptionParagraphs}
    />
  );
}
