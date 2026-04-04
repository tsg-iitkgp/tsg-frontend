"use client";

import React, { useState, useEffect } from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";
import ProfileHeader from "./ProfileHeader";
import NavigationTabs from "./NavigationTabs";
import AboutSection from "./AboutSection";
import PostsSection from "./PostsSection";
import EventsSection from "./EventsSection";
import TeamSection from "./TeamSection";
import "./MainProfile.css";
import { BASE_URL } from "../constants/api";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layouts/Layout";

const MainProfile = () => {
  const params = useParams();
  const society_slug = params?.society_slug;
  const searchParams = useSearchParams();
  
  const [activeTab, setActiveTab] = useState("about");
  const [society, setSociety] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize active tab only once
  useEffect(() => {
    const postid = searchParams.get("postid");
    const initialTab = searchParams.get("tab") || (postid ? "posts" : "about");
    setActiveTab(initialTab);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    
    // Smoothly update the URL without triggering a Next.js re-render
    const url = new URL(window.location);
    url.searchParams.set("tab", tabId);
    window.history.pushState({}, '', url);
  };

  useEffect(() => {
    if (!society_slug) return;
    setLoading(true);
    fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}`)
      .then((res) => res.json())
      .then((data) => {
        setSociety(data.society);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [society_slug]);

  const renderTabContent = () => {
    if (loading) return <div className='content-wrapper'>Loading...</div>;
    if (!society) return <div className='content-wrapper'>No data found.</div>;

    // Parse contact info
    let contact = {};
    try {
      contact = society.contact_info ? JSON.parse(society.contact_info) : {};
    } catch {}

    if (society && society.name) {
      if (typeof window !== "undefined") document.title = `${society.name} | TSG`;
    }

    const socials = society.social_media || {};

    switch (activeTab) {
      case "about":
        return <AboutSection society={society} />;

      case "posts":
        return <PostsSection society={society} />;

      case "event":
        return <EventsSection society={society} />;

      case "team":
        return <TeamSection society={society} />;

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className='profile-container'>
        <ProfileHeader society={society} />
        <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
        {renderTabContent()}
      </div>
    </Layout>
  );
};

export default MainProfile;
