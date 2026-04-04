"use client";
import React from "react";
import GenStyles from "../../../styles/views/home.module.css";
import HomeStyles from "./committees-home.module.css";
import CommitteeCard from "./CommitteeCard";
import CardStyles from "./committee-card.module.css";

export default function CommitteesHome() {
  const loremDesc = "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad.";
  
  const data = [
    {
      heading: "SOCIAL & CULTURAL",
      titleClass: CardStyles.titleSocult,
      description: loremDesc,
      route: "/committees/socult",
      background: "/data/media/images/committee/Socult.jpg",
      exploreLine: <>Explore&nbsp;<span className={HomeStyles.exploreSpan}>So-Cult</span></>,
      clubs: [
        <><strong>ETDS:</strong> Encore</>,
        <><strong>TDS:</strong> Pravah</>,
        <><strong>Spectra</strong></>,
      ],
    },
    {
      heading: "Technology",
      titleClass: CardStyles.titleTech,
      description: loremDesc,
      route: "/committees/tech",
      background: "/data/media/images/committee/Technology.jpg",
      exploreLine: <>Explore&nbsp;<span className={HomeStyles.exploreSpan}>Tech</span></>,
      clubs: [
        <><strong>Business</strong> Club</>,
        <><strong>Developers&apos;</strong> Society</>,
        <><strong>Robotix</strong></>,
      ],
    },
    {
      heading: "SPORTS",
      titleClass: CardStyles.titleSports,
      description: loremDesc,
      route: "/committees/sports",
      background: "/data/media/images/committee/Sports.jpg",
      exploreLine: <>Explore&nbsp;<span className={HomeStyles.exploreSpan}>Sports &amp; Games</span></>,
      clubs: [
        <><strong>Technology Adventure</strong> Society</>,
        <><strong>Chess</strong> Club</>,
        "",
      ],
    },
    {
      heading: "Welfare",
      titleClass: CardStyles.titleWelfare,
      description: loremDesc,
      route: "/committees/welfare",
      background: "/data/media/images/committee/StudentsWelfare.jpg",
      exploreLine: <>Explore&nbsp;<span className={HomeStyles.exploreSpan}>Welfare</span></>,
      clubs: [
        <><strong>Student Welfare</strong> Group</>,
        <><strong>Institute Wellness</strong> Group</>,
        <><strong>Ambar</strong></>,
      ],
    },
  ];

  return (
    <div className={`${GenStyles.container} ${HomeStyles.container}`}>
      <div className={HomeStyles.innerContainer}>
        
        <div className={HomeStyles.headerRegion}>
          <h4 className={HomeStyles.yellowSubtitle}>The Four Verticals</h4>
          <h2 className={HomeStyles.mainTitle}>Committees</h2>
        </div>

        <div className={HomeStyles.gridContainer}>
          {data.map((item, index) => (
            <CommitteeCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
