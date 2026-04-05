import CommitteeTemplate from "../../../components/CommitteeTemplate/CommitteeTemplate";

export const metadata = {
  title: "Students' Welfare Committee",
  description: "The Students' Welfare Committee of the Technology Students' Gymkhana, IIT Kharagpur.",
};

export default function WelfarePage() {
  const descriptionParagraphs = [
    "The Students' Welfare Committee of the Technology Students' Gymkhana is responsible for addressing the overall well-being and welfare of the student community at IIT Kharagpur. Encompassing various initiatives focusing on mental health, student rights, and holistic development.",
    "Managed by student representatives and guided by faculty members, it oversees the functioning of welfare initiatives, drives awareness campaigns, and encourages compassionate assistance across the institute. Through its initiatives, the committee strives to cultivate a safe, inclusive, and supportive campus environment for everyone."
  ];

  return (
    <CommitteeTemplate
      category="Students' Welfare"
      shortName="WELFARE"
      title="Students' Welfare"
      descriptionParagraphs={descriptionParagraphs}
    />
  );
}
