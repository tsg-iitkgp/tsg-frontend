import GaiaEvent2025 from "../../../views/Events/GaiaEvent2025";

export const metadata = {
  title: "IIT Kharagpur - University of Cambridge Gaia Platform Collaboration",
  description:
    "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.",
  openGraph: {
    type: "article",
    url: "https://gymkhana.iitkgp.ac.in/events/iit-kharagpur-university-cambridge-gaia-platform-collaboration-2025",
    title: "IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform",
    description:
      "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform.",
    images: [
      {
        url: "https://gymkhana.iitkgp.ac.in/data/media/images/general/gymkhanaLogo.png",
        width: 512,
        height: 512,
        alt: "Technology Students' Gymkhana Logo",
      },
    ],
  },
};

export default function GaiaEventPage() {
  return <GaiaEvent2025 />;
}
