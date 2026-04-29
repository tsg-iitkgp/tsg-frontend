"use client";

import React from "react";
import Styles from "./sportsV2.module.css";
import SportsV2Navbar from "./SportsV2Navbar";
import Footer from "../Footer/Footer";
import {
  FaTableTennis,
  FaFootballBall,
  FaCalendarAlt,
  FaTrophy,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const HERO_IMAGE = "/data/media/images/committee/sportsHero.png";
const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlQfmHnoV7gm83qelbTq-MNd3q5zaA_JZloKdyPZimvydHFPAGmYjnn7FtjUWtoWWDa9ZtHiwMxHxnjkMQYxERuQ9HQJu1LTJ4lbbCs53FvjqrvIXUUSoSLvPMfg5tjLmf-qg6J5a5LJnTquMSOClJBRquiv8WQL--LN9ArRwsEqizGvp5XMM1qD92IImE_pz_f8jonogJ8fa2GbGj5t2RA1pnEv64lX-8RAG0vyN2CvS8mC8hTOR0mvOFQ7mP47BsE-MCHaJsmrJG";

const QUICK_ACTIONS = [
  { label: "Sports", icon: FaFootballBall, href: "#" },
  { label: "Events", icon: FaCalendarAlt, href: "#" },
  { label: "GC Scores", icon: FaTrophy, href: "#" },
  { label: "Contacts", icon: FaEnvelope, href: "#" },
];

export default function SportsV2Page() {
  return (
    <div className={Styles.root}>
      <SportsV2Navbar />

      <main className={Styles.main}>
        {/* Hero */}
        <section className={Styles.hero}>
          <div className={Styles.heroBg}>
            <img
              src={HERO_IMAGE}
              alt="Sports at IIT Kharagpur"
              className={Styles.heroImage}
            />
            <div className={Styles.heroOverlay} />
          </div>
          <div className={Styles.heroContent}>
            <div className={Styles.heroFrame}>
              <div className={Styles.cornerTL} />
              <div className={Styles.cornerBR} />
              <h1 className={Styles.heroTitle}>
                THE SPIRIT OF
                <br />
                <span className={Styles.heroAccent}>KGP SPORTS</span>
              </h1>
              <p className={Styles.heroSubtitle}>Intensity. Culture. Pride.</p>
              <a href="#" className={Styles.heroCta}>
                EXPLORE SPORTS
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className={Styles.section}>
          <div className={Styles.aboutGrid}>
            <div className={Styles.aboutLeft}>
              <h2 className={Styles.aboutHeading}>ABOUT US</h2>
              <p className={Styles.aboutQuote}>
                &ldquo;Wear it with weight. Play it with heart.&rdquo;
              </p>
              <p className={Styles.aboutBody}>
                At IIT Kharagpur, sports is more than recreation — it&apos;s a
                way of life. Whether you&apos;re chasing glory on the football
                ground, racing through the pool, or rallying on the courts,
                KGP&apos;s campus gives every athlete the stage to shine. From
                fiercely contested inter-hall battles to representing
                India&apos;s best engineering minds at the Inter-IIT Sports
                Meet, the spirit here runs deep.
              </p>
            </div>
            <div className={Styles.aboutRight}>
              <div className={Styles.aboutAccentBox} />
              <img
                src={ABOUT_IMAGE}
                alt="Athletes in training"
                className={Styles.aboutImage}
              />
            </div>
          </div>
        </section>

        {/* Inter-IIT Pride */}
        <section className={Styles.interSection}>
          <div className={Styles.interBg}>
            <div className={Styles.interBgImage} />
            <div className={Styles.interBgGradient} />
          </div>
          <div className={Styles.interContent}>
            <p className={Styles.interEyebrow}>Since 1961</p>
            <h2 className={Styles.interTitle}>
              UNSHAKEABLE
              <br />
              PRIDE
            </h2>
            <div className={Styles.interBodyGroup}>
              <p>
                The IIT Kharagpur team at the Inter-IIT Sports Meet is something
                built over time — not in boardrooms or on paper, but on early
                morning tracks, in dusty gymnasiums, and through the kind of
                late-night grind that only a fellow athlete truly understands.
                Since 1961, when this tradition first took shape, Kharagpur has
                shown up. Every single time.
              </p>
              <p>
                There&apos;s something different about a KGPian who competes.
                Maybe it&apos;s the sheer size of the campus — where sport is
                never far from your doorstep — or maybe it&apos;s the culture
                that&apos;s been passed down through generations of students who
                refused to give anything less than everything. Whatever it is,
                you feel it when the team steps onto the field together.
              </p>
              <p>
                These aren&apos;t just athletes representing an institution.
                They&apos;re friends pushing each other through one more rep,
                one more lap, one more match. They celebrate together, hurt
                together, and grow together. And when they wear Kharagpur&apos;s
                colours at the Inter-IIT Meet, they carry all of that with them
                — the sweat, the stories, and an unshakeable pride in where they
                come from.
              </p>
            </div>
            <a href="#" className={Styles.interLink}>
              VIEW HISTORY
              <FaArrowRight className={Styles.interLinkArrow} />
            </a>
          </div>
        </section>

        {/* Turf Booking */}
        <section className={Styles.turfWrap}>
          <div className={Styles.turfCard}>
            <div className={Styles.turfCornerGlow} />
            <FaTableTennis className={Styles.turfIcon} />
            <h2 className={Styles.turfTitle}>TURF BOOKING</h2>
            <p className={Styles.turfBadge}>COMING SOON</p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className={Styles.section}>
          <div className={Styles.actionsGrid}>
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <a key={action.label} href={action.href} className={Styles.actionCard}>
                  <div className={Styles.actionTopBar} />
                  <Icon className={Styles.actionIcon} />
                  <h3 className={Styles.actionLabel}>{action.label.toUpperCase()}</h3>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
