"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BASE_URL } from "../constants/api";
import "./SocietiesList.css";
import Layout from "../components/Layouts/Layout";
import AppImage from "../components/AppImage";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const SocietiesList = () => {
  if (typeof window !== "undefined") document.title = "Societies | TSG";

  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []))
      .catch(() => setCategories([]));
  }, []);

  const fetchSocieties = async (category = "") => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        status: "active",
        limit: "50",
      });

      if (category) {
        queryParams.append("category", category);
      }

      const response = await fetch(`${BASE_URL}/societies?${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSocieties(data.societies || []);
    } catch (err) {
      console.error("Failed to fetch societies:", err);
      setError("Failed to load societies. Please try again later.");
      setSocieties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocieties(activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    if (activeCategory === category) return; // Prevent re-fetching if clicking same tab
    setActiveCategory(category);
  };

  return (
    <Layout>
      <div className="societies-container">
        <motion.div 
          className="societies-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          <h4 className="yellowSubtitle">Belong. Build. Become.</h4>
          <h1 className="societies-title">Societies</h1>
          <div className="category-filters category-tabs">
            <button
              className={`category-btn ${activeCategory === "" ? "active" : ""}`}
              onClick={() => handleCategoryChange("")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => fetchSocieties(activeCategory)} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="societies-loading">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-logo"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-socials">
                  <div className="skeleton-icon"></div>
                  <div className="skeleton-icon"></div>
                  <div className="skeleton-icon"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="societies-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {societies.length === 0 && !error ? (
              <motion.div
                variants={cardVariants}
                className="no-societies"
                style={{ textAlign: "center", color: "#FED403", fontSize: "1.2rem", fontWeight: "700", gridColumn: "1 / -1", textTransform: "uppercase" }}
              >
                <p>No societies found for this category.</p>
              </motion.div>
            ) : (
              societies.map((society) => (
                <motion.a
                  variants={cardVariants}
                  key={society.id}
                  className="society-card"
                  href={`/societies/${society.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="society-logo">
                    <AppImage
                      src={society.logo_url}
                      alt={`${society.name} logo`}
                      width={110}
                      height={110}
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ288L3RleHQ+PC9zdmc+";
                      }}
                    />
                  </div>
                  <div className="society-info">
                    <h3 className="society-name">{society.name}</h3>
                    <div className="social-icons">
                      {society.social_media?.facebook && (
                        <a
                          href={society.social_media.facebook}
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaFacebook />
                        </a>
                      )}
                      {society.social_media?.instagram && (
                        <a
                          href={society.social_media.instagram}
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaInstagram />
                        </a>
                      )}
                      {society.social_media?.linkedin && (
                        <a
                          href={society.social_media.linkedin}
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default SocietiesList;

