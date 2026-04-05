"use client";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/views/contacts.module.css";
import RenderContactsFromDropdown from "./RenderContacts";

const TABS = [
  { key: "CURRENT OFFICE BEARERS", label: "Current Office Bearers" },
  { key: "PREVIOUS OFFICE BEARERS", label: "Previous Office Bearers" },
  { key: "STAFF", label: "Staff" },
];

function Contacts() {
  const [activeIdx, setActiveIdx] = useState(0);

  if (typeof window !== "undefined") document.title = "Contacts | TSG";

  return (
    <Layout>
      <section className={Styles.maincontainer}>
        <div className={Styles.headerRegion}>
          <h4 className={Styles.yellowSubtitle}>Get In Touch</h4>
          <h2 className={Styles.mainTitle}>Contacts</h2>
        </div>

        {/* ── Segmented Slider ─────────────────── */}
        <div className={Styles.sliderWrap}>
          <div
            className={Styles.sliderHighlight}
            style={{
              width: `${100 / TABS.length}%`,
              transform: `translateX(${activeIdx * 100}%)`,
            }}
          />
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              className={`${Styles.sliderTab} ${i === activeIdx ? Styles.sliderTabActive : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Content ──────────────────────────── */}
        <RenderContactsFromDropdown option={TABS[activeIdx].key} />
      </section>
    </Layout>
  );
}

export default Contacts;
