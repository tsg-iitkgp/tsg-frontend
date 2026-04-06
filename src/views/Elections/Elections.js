"use client";
import React from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "./elections.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ComputerIcon from "@material-ui/icons/Computer";

export default function Elections() {
  if (typeof window !== "undefined") document.title = "Elections 2026-2027 | TSG";

  const notices = [
    {
      title: "Results of TSG Election 2026-2027",
      buttonLabel: "View Results",
      href: "/data/media/files/results.pdf",
    },
    {
      title: "Final Proposals of Candidates",
      buttonLabel: "View Proposals",
      href: "/elections/candidates",
    },
    {
      title: "Final List of Candidates - TSG Election 2026",
      buttonLabel: "View List",
      href: "/data/media/files/Final List of Candidates - TSG Election 2026.pdf",
    },
    {
      title: "TSG Election (2026-2027) Notification",
      buttonLabel: "View Schedule and Rules",
      href: "/data/media/files/Election 2026-27.pdf",
    },
    {
      title: "Election Officer (2026 - 2027)",
      buttonLabel: "Prof. Uday Shankar",
      href: "mailto:uday@rgsoipl.iitkgp.ac.in",
    },
  ];



  return (
    <Layout>
      {/* ── Hero ──────────────────────────── */}
      <div className={Styles.hero}>
        <h1 className={Styles.heroTitle}>
          TSG <span>ELECTIONS</span>
          <br />
          2026-2027
        </h1>
        <p className={Styles.heroSubtitle}>
          Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries out election to select office bearers from students for smooth conduction of student related activities.

          The nomination, approval and voting will be done using digital platform developed by ERP, IIT Kharagpur. The date for Gymkhana Election is as follows:
        </p>

        {/* Event Details Box */}
        <div className={Styles.detailsBox}>
          <div className={Styles.infoItem}>
            <div>
              <div className={Styles.infoLabel}>Election Date</div>
              <div className={Styles.infoValue}>5th April 2026</div>
            </div>
          </div>
          <div className={Styles.infoItem}>
            <div>
              <div className={Styles.infoLabel}>Window</div>
              <div className={Styles.infoValue}>9:00 AM - 6:00 PM</div>
            </div>
          </div>
          <div className={Styles.infoItem}>
            <div>
              <div className={Styles.infoLabel}>Venue</div>
              <div className={Styles.infoValue}>CIC, Takshashila</div>
            </div>
          </div>
          <div className={Styles.infoItem}>
            <div>
              <div className={Styles.infoLabel}>Platform</div>
              <div className={Styles.infoValue}>Institute ERP</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content Area ─────────────────── */}
      <div className={Styles.contentArea}>
        <div className={Styles.mainContent}>
          <h2 className={Styles.sectionTitle}><span>NOTICES</span>
          </h2>

          {notices.map((notice, idx) => (
            <div key={idx} className={Styles.noticeCard}>
              <div className={Styles.noticeDescription}>{notice.title}</div>
              <a
                href={notice.href}
                target={notice.href.startsWith("/elections") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                {notice.buttonLabel} <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>
          ))}

          {/* Relevant Documents */}
          <div className={Styles.docsSection}>
            <h2 className={Styles.docsTitle}>
              RELEVANT <span>DOCUMENTS</span>
            </h2>
            <div className={Styles.docsGrid}>
              <a
                href="/data/media/files/Rules 2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.docButton}
              >
                Rules
              </a>
              <a
                href="/data/media/files/General_Conduct_Rules_and_Guidelines_of_IIT_Kharagpur.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.docButton}
              >
                Conduct Guidelines
              </a>
              <a
                href="/data/media/files/voting_procedure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.docButton}
              >
                Voting Procedure
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
