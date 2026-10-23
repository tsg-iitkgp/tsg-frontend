"use client";

import React from "react";
import { motion } from "framer-motion";
import Styles from "./iicm-home.module.css";
import AppImage from "../../../components/AppImage";

export default function IICMHome() {
  const iicmUrl = "https://gymkhana.iitkgp.ac.in/iicm/";

  const handleOpenPoster = () => {
    window.open("/images/iicm9.jpeg", "_blank");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>
            INTER-IIT CULTURAL MEET
          </div>
          <h2 className={Styles.mainTitle}>
            INTER-IIT CULTURAL MEET 9.0
          </h2>
        </div>

        <div className={Styles.gridWrapper}>
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
                src="/images/iicm9.jpeg"
                alt="Inter-IIT Cultural Meet 9.0 poster"
                width={1024}
                height={1536}
                className={Styles.coachesImg}
              />
              <div className={Styles.clickOverlay}>
                <span className={Styles.clickBadge}>
                  🔍 Click to View Full Poster
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={Styles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={Styles.orgHeading}>
              <h3 className={Styles.title}>
                INTER-IIT CULTURAL MEET 9.0
              </h3>
              <p className={Styles.subtitle}>
                Technology Students&apos; Gymkhana, IIT Kharagpur
              </p>
            </div>


            <div className={Styles.noticeIntro}>
              We are elated to announce the launch of the Inter-IIT Cultural Meet 9.0 Selections&apos; Website!
              <br /><br />
              Explore a spectrum of 50 events, with workshop details and selection schedules all in one place.
              <br /><br />
              Register for the events of your choice through the website and make sure to join the official WhatsApp Community for regular updates and important announcements.
              <br /><br />
              Your stage awaits! Your story starts here!
              <br /><br />
              <strong>POC</strong>
              <br />
              Abhideep Shikhar - 84292 84116
              <br />
              Aman Gupta - 83692 27725
            </div>


            <div className={Styles.btnRow}>
              <button
                className={Styles.openPosterBtn}
                onClick={handleOpenPoster}
              >
                View Poster
              </button>

              <a
                className={Styles.openPosterBtn}
                href={iicmUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit IICM Website ➔
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}