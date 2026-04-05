"use client";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import "./Awards.css";
import RenderAwardsFromDropdown from "./RenderAwards";

const TABS = [
  { key: "SPORTS & GAMES", label: "Sports & Games" },
  { key: "TECHNOLOGY", label: "Technology" },
  { key: "SOCIAL & CULTURAL", label: "Social & Cultural" },
  { key: "SPECIAL RECOGNITION", label: "Special Recognition" },
];

function Awards() {
  const [activeIdx, setActiveIdx] = useState(0);

  if (typeof window !== "undefined") document.title = "Hall Of Fame | TSG";

  return (
    <Layout>
      <section className="awards-page">
        <div className="awards-headerRegion">
          <h4 className="awards-yellowSubtitle">Hall of Fame</h4>
          <h2 className="awards-mainTitle">Awards</h2>
        </div>

        {/* ── Segmented Slider ─────────────────── */}
        <div className="awards-sliderWrap">
          <div
            className="awards-sliderHighlight"
            style={{
              width: `${100 / TABS.length}%`,
              transform: `translateX(${activeIdx * 100}%)`,
            }}
          />
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              className={`awards-sliderTab ${i === activeIdx ? "awards-sliderTabActive" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Content ──────────────────────────── */}
        <RenderAwardsFromDropdown option={TABS[activeIdx].key} />
      </section>
    </Layout>
  );
}

export default Awards;
