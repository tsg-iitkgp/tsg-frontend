"use client";
import React from "react";
import { motion } from "framer-motion";
import Styles from "./coaches-home.module.css";
import AppImage from "../../../components/AppImage";

export default function CoachesHome() {
  const handleOpenPoster = () => {
    window.open("/images/coaches.png", "_blank");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>OPPORTUNITIES</div>
          <h2 className={Styles.mainTitle}>RECRUITMENT OF PART-TIME COACHES</h2>
        </div>

        <div className={Styles.gridWrapper}>
          {/* Left Column: Full Poster Image */}
          <motion.div
            className={Styles.leftColumn}
            onClick={handleOpenPoster}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className={Styles.imageCard}>
              <AppImage
                src="/images/coaches.png"
                alt="Recruitment of Part-Time Coaches Advertisement Poster"
                width={1024}
                height={1536}
                className={Styles.coachesImg}
              />
              <div className={Styles.clickOverlay}>
                <span className={Styles.clickBadge}>
                  🔍 Click to View Full Poster Image
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Complete Recruitment Details */}
          <motion.div
            className={Styles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={Styles.metaHeader}>
              <span className={Styles.advtTag}>Advt No.: R/TSG/01/2026</span>
              <span className={Styles.dateTag}>Date: 15.07.2026</span>
            </div>

            <div className={Styles.orgHeading}>
              <h3 className={Styles.title}>RECRUITMENT OF PART-TIME COACHES</h3>
              <p className={Styles.subtitle}>
                Technology Students&apos; Gymkhana, IIT Kharagpur
              </p>
            </div>

            <div className={Styles.noticeIntro}>
              Abridged advertisement for the position as mentioned below for publication on the Institute website.
            </div>

            {/* Quick Badges */}
            <div className={Styles.highlightsGrid}>
              <div className={Styles.highlightCard}>
                <span className={Styles.cardLabel}>Disciplines (4 Positions)</span>
                <span className={Styles.cardValue}>Volleyball, Badminton, Table Tennis, Athletics (Female)</span>
              </div>

              <div className={Styles.highlightCard}>
                <span className={Styles.cardLabel}>Remuneration</span>
                <span className={Styles.cardValueYellow}>₹25,000 / month</span>
              </div>

              <div className={Styles.highlightCard}>
                <span className={Styles.cardLabel}>Period of Contract</span>
                <span className={Styles.cardValue}>16th Aug 2026 – 13th Nov 2026</span>
              </div>

              <div className={Styles.highlightCard}>
                <span className={Styles.cardLabel}>Working Schedule</span>
                <span className={Styles.cardValue}>6 Days / Week | 6 Hours / Day</span>
              </div>
            </div>

            {/* Detailed Requirements */}
            <div className={Styles.detailsAccordion}>
              {/* Qualifications */}
              <div className={Styles.detailSection}>
                <h4 className={Styles.sectionTitle}>🎓 Qualifications &amp; Experience</h4>
                <div className={Styles.qualGroup}>
                  <p><strong>Minimum Qualifications:</strong> Bachelor in Physical Education and Sports Sciences from a UGC-recognized University <strong>OR</strong> Certificate in Sports Coaching from a recognized body.</p>
                  <p><strong>Preferred Qualification:</strong> Graduation / 10+2 | Master&apos;s in Physical Education and Sports Sciences | Certificate in Sports Coaching from NIS | Certification/License from a nationally recognized body or SAI.</p>
                  <p><strong>Preferred Experience:</strong> Podium finish in AIU (National) competition or Senior Nationals, along with 3 years of sports coaching experience in College / University / State Team / National Team.</p>
                </div>
              </div>

              {/* Walk-in Interview Schedule */}
              <div className={Styles.venueCard}>
                <h4 className={Styles.venueMainTitle}>📅 Walk-in Interview Details (10th August, 2026)</h4>
                
                <div className={Styles.venueGrid}>
                  <div className={Styles.venueBox}>
                    <span className={Styles.venueTag}>Document Verification</span>
                    <span className={Styles.venueTime}>04:00 PM</span>
                    <span className={Styles.venueLocation}>
                      <strong>Venue:</strong> Board Room, Technology Students&apos; Gymkhana, IIT Kharagpur – 721302
                    </span>
                  </div>

                  <div className={Styles.venueBox}>
                    <span className={Styles.venueTag}>Walk-in Interview</span>
                    <span className={Styles.venueTime}>5:00 PM – 7:00 PM</span>
                    <span className={Styles.venueLocation}>
                      <strong>Venue:</strong> Office of President, Technology Students&apos; Gymkhana, IIT Kharagpur – 721302
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={Styles.btnRow}>
              <button className={Styles.openPosterBtn} onClick={handleOpenPoster}>
                View / Download Official Poster ➔
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
