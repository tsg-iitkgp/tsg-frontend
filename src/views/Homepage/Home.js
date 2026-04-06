"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/views/home.module.css";
import AboutUs from "./AboutUs/AboutUs";
import CommitteesHome from "./Committee/CommitteesHome";
import EventsHome from "./Events/EventsHome";
import CouncilHome from "./Council/CouncilHome";
import Preloader from "../../components/Preloader/Preloader";
import Hls from "hls.js";

export default function Home() {
  const videoRef = useRef(null);
  const pageTitle = "Technology Students' Gymkhana - IIT Kharagpur | TSG";
  const pageDescription =
    "Technology Students' Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "https://gymkhana.iitkgp.ac.in";
  const pageImage = `${baseUrl}/data/media/images/general/gymkhanaLogo.png`;
  const pageUrl = typeof window !== "undefined" ? window.location.href : baseUrl;

  useEffect(() => {
    document.title = pageTitle;

    if (videoRef.current) {
      const video = videoRef.current;
      const hlsSource = "/videos/hls/playlist.m3u8";

      // iOS Safari strict autoplay bypass: 
      // React hydration natively drops these attributes occasionally on mobile devices causing autoplay rejections.
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");

      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 10,
          autoStartLoad: true,
        });

        let hasResumed = false;

        hls.loadSource(hlsSource);
        hls.attachMedia(video);

        hls.on(Hls.Events.FRAG_BUFFERED, () => {
          // Stop loading once we have at least 10 seconds buffered
          if (!hasResumed && video.buffered.length && video.buffered.end(0) >= 10) {
            hls.stopLoad();
          }
        });

        const resumeLoading = () => {
          if (!hasResumed) {
            hasResumed = true;
            hls.startLoad();
            // Cleanup interaction listeners
            window.removeEventListener("scroll", resumeLoading);
            window.removeEventListener("mousedown", resumeLoading);
            window.removeEventListener("keydown", resumeLoading);
          }
        };

        // Resume if user interacts with the page
        window.addEventListener("scroll", resumeLoading, { passive: true });
        window.addEventListener("mousedown", resumeLoading, { passive: true });
        window.addEventListener("keydown", resumeLoading, { passive: true });

        // Also resume automatically if the video is playing and nears the end of the current buffer
        const checkBuffer = () => {
          if (!hasResumed && video.buffered.length) {
            const remainingBuffered = video.buffered.end(0) - video.currentTime;
            // If less than 3 seconds of buffer remains, start loading the rest
            if (remainingBuffered < 3) {
              resumeLoading();
            }
          }
        };

        video.addEventListener("timeupdate", checkBuffer);

        return () => {
          hls.destroy();
          window.removeEventListener("scroll", resumeLoading);
          window.removeEventListener("mousedown", resumeLoading);
          window.removeEventListener("keydown", resumeLoading);
          video.removeEventListener("timeupdate", checkBuffer);
        };
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS support (Safari)
        video.src = hlsSource;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch((e) => console.log("iOS Autoplay blocked:", e));
        });
      }
    }
  }, []);

  return (
    <>
      <Preloader />
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

      <div style={{ zoom: "110%" }}>
        <div className={Styles.backgroundImage}>
        <div className={Styles.videoWrapper}>
          <video
            ref={videoRef}
            className={Styles.videoBackground}
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/hero-bg.webp"
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={Styles.mottoBox}>&quot;Yogah Karmasu Kausalam&quot;</div>
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
      </div>
    </Layout>
    </>
  );
}
