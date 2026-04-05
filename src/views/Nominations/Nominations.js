"use client";
import { Typography, Container, Box, Button, CircularProgress } from "@material-ui/core";

import React, { useState } from "react";
import Styles from "./nominations.module.css";
import Layout from "../../components/Layouts/Layout";
export default function Nominations() {
  if (typeof window !== "undefined") document.title = "Nominations 2025-2026 | TSG";

  const tabFormUrls = {
    "Public Relations' Chairperson": "https://docs.google.com/forms/d/e/1FAIpQLScjKNDbMhFhoqIMMLreN0Cp-q1IcndvyYczy6PYF6GpVQQRcg/viewform?socod=true&pli=1",
    "Technology Coordinators": "https://docs.google.com/forms/d/e/1FAIpQLScYUBiVw9YU_0pLtcE6Q3TRnIDe1hkawNNjwe2-Uk5kYYUNag/viewform?usp%3Dheader",
    "Editors": "https://docs.google.com/forms/d/e/1FAIpQLScx49-BdvhSmWOXLMcJxcnGF_u1TJDEC7Qptskb-tYfKUmCzA/viewform?usp%3Dsend_form",
    "Institute Girls' Sports Nominee": "https://docs.google.com/forms/d/e/1FAIpQLScYh3heOcACxbfWs0mSRkuWB2HYXNF88AjIO4k3vG1VghAllQ/viewform",
  };

  const tabs = Object.keys(tabFormUrls);
  const [currentTab, setCurrentTab] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setLoading(true);
  };

  return (
    <Layout>
      <div className={Styles.pageContainer}>
        {/* Header Region */}
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>Nominated Office Bearers (2026-2027)</div>
          <h1 className={Styles.mainTitle}>Applications</h1>
        </div>

        {/* Tab Selection */}
        <div className={Styles.sliderWrap}>
          <div
            className={Styles.sliderHighlight}
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${tabs.indexOf(currentTab) !== -1 ? tabs.indexOf(currentTab) * 100 : 0}%)`,
              opacity: currentTab ? 1 : 0
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${Styles.sliderTab} ${currentTab === tab ? Styles.sliderTabActive : ""
                }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className={Styles.formTransition} key={currentTab}>
          {currentTab ? (
            <>
              {loading && (
                <Box display="flex" justifyContent="center" alignItems="center" padding="2rem">
                  <CircularProgress style={{ color: "#f1c40f" }} />
                  <Typography variant="h6" className={Styles.loadingStateLabel} style={{ marginLeft: "1rem" }}>
                    Loading form...
                  </Typography>
                </Box>
              )}
              <iframe
                title={currentTab}
                src={tabFormUrls[currentTab]}
                onLoad={() => setLoading(false)}
                className={`${Styles.googleForm}`}
                style={{ display: loading ? 'none' : 'block' }}
              >
                Loading…
              </iframe>
            </>
          ) : (
            <Typography variant="h6" align="center" className={Styles.loadingStateLabel}>
              Please select a position to view its nomination form
            </Typography>
          )}
        </div>
      </div>
    </Layout>
  );
}
