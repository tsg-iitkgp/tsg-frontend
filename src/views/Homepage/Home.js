"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/views/home.module.css";
import AboutUs from "./AboutUs/AboutUs";
import CommitteesHome from "./Committee/CommitteesHome";
import EventsHome from "./Events/EventsHome";
import CouncilHome from "./Council/CouncilHome";

export default function Home() {
  const pageTitle = "Technology Students' Gymkhana - IIT Kharagpur | TSG";
  const pageDescription =
    "Technology Students' Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "https://gymkhana.iitkgp.ac.in";
  const pageImage = `${baseUrl}/data/media/images/general/gymkhanaLogo.png`;
  const pageUrl = typeof window !== "undefined" ? window.location.href : baseUrl;

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="description" content={pageDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Technology Students' Gymkhana - IIT Kharagpur" />
        <meta
          property="og:description"
          content="The hub of extra-curricular and co-curricular activities in IIT Kharagpur. Managed by students, for students."
        />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content="Technology Students' Gymkhana - IIT Kharagpur" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Technology Students' Gymkhana - IIT Kharagpur" />
        <meta
          name="twitter:description"
          content="The hub of extra-curricular and co-curricular activities in IIT Kharagpur. Managed by students, for students."
        />
        <meta name="twitter:image" content={pageImage} />
      </Head>

      <div className={Styles.backgroundImage}>
        <video 
          className={Styles.videoBackground} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={Styles.mottoBox}>
          &quot;Yogah Karmasu Kausalam&quot;
        </div>
      </div>
      <div>
        {/* About Us Section */}
        <AboutUs />

        {/* Committees Section */}
        <CommitteesHome />

        {/* Events Section */}
        <EventsHome />

        {/* Council Section */}
        <CouncilHome />
      </div>
    </Layout>
  );
}
