"use client";

import React from "react";
import "./NavigationTabs.css";

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "posts", label: "Posts" },
    { id: "event", label: "Event" },
    { id: "team", label: "Team" },
  ];

  return (
    <div className='tabs-container'>
      <div className='tabs-wrapper'>
        <div className='tabs-list'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
