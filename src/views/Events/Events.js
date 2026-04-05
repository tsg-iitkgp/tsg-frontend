"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "./events.module.css";
import eventsData from "./eventsData";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layouts/Layout";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Popup from "../../components/Popup";
import ResultsPreview from "../../components/Admin/DataUpdate/ResultsPreview";
import SkeletonElement from "../../components/Skeleton/SkeletonElement";

export default function Events() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [show, setShow] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [eventResults, setEventResults] = useState(null);
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(null);
  const [events, setEvents] = useState(eventsData);
  const [loading, setLoading] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handlePosterClick = (videoLink) => {
    window.open(videoLink);
  };
  if (typeof window !== "undefined") document.title = "Events | TSG";

  return (
    <Layout>
      <Popup
        show={show}
        content={content}
        disable={() => {
          setShow(false);
        }}
        imgSrc={image}
      />
      <ResultsPreview
        eventTitle={title}
        eventResults={eventResults}
        showRes={showRes}
        index={index}
        disable={() => {
          setShowRes(false);
        }}
      />

      <div className={Styles.bgContainer}>
        {/* Homepage-style section header */}
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>THE SPIRIT OF KGP</div>
          <h2 className={Styles.mainTitle}>Events</h2>
        </div>

        {/* Slider section */}
        <div className={Styles.sliderSection}>
          <div className={Styles.eventSlider}>
            <AutoplaySlider play={true} interval={5000}>
              <div data-src='/data/media/images/events/kgpAct.jpeg' />
              <div
                data-src='/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab.JPEG'
                onClick={() =>
                  handlePosterClick("/events/iit-kharagpur-university-cambridge-gaia-platform-collaboration-2025")
                }
              />
              <div
                data-src='/data/media/images/events/ongoing/director-interview.png'
                onClick={() => handlePosterClick("https://youtu.be/FlOlb9qSms0")}
              />
              <div data-src='/data/media/images/events/upcomingEvents/qs.jpg' onClick={() => handlePosterClick("#")} />
              <div
                data-src='/data/media/images/events/ongoing/Feedback_Form.jpg'
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100068477642783/posts/pfbid02ya4fpTr1CMo31BFamDe4zdCeQSWi1HekFrUg3pNVcR73r5kes5V5U7uQJhC4AiJ7l/?mibextid=Nif5oz",
                  )
                }
              />
              <div
                data-src='/data/media/images/events/ongoing/Inter_IIT.jpg'
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100064570724530/posts/pfbid025gTAVLrqBr5NYeMRTHhHDePwXC88HWafUdE221YraCibcafMQ7wgtF7iodqSBhYfl/?mibextid=Nif5oz",
                  )
                }
              />
              <div
                data-src='/data/media/images/events/Freshers.jpg'
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100064570724530/posts/pfbid031xm5yrMnEBDWsLeVrr9SeJrVsA9WP8fpYNDbo3CjWgp8r56yhRNPF6MTTFpcMp7bl/?mibextid=Nif5oz",
                  )
                }
              />
            </AutoplaySlider>
          </div>
        </div>

        {/* Event cards section */}
        <div className={Styles.cardsSection}>
          <motion.h3 
            className={Styles.sectionHeading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            All Events
          </motion.h3>
          
          <motion.div 
            className={Styles.cardsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {loading ? (
              <div className={Styles.skeletonRow}>
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
              </div>
            ) : (
              events.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <EventCard
                    index={idx}
                    title={event.title}
                    date={event.date}
                    description={event.description || ''}
                    imgSrc={event.poster}
                    resultExists={event.resultExists}
                    displayTrue={() => {
                      const firstLink = event.links && event.links[0]?.href;
                      if (firstLink) {
                        window.open(firstLink, "_blank");
                      }
                    }}
                    displayResults={() => {
                      setTitle(event.title);
                      setIndex(idx);
                      setShowRes(true);
                    }}
                    setEventResults={setEventResults}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
