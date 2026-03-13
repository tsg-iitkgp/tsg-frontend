"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BASE_URL } from "../constants/api";
import "./SocietiesList.css";
import Layout from "../components/Layouts/Layout";
import AppImage from "../components/AppImage";

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
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <Layout>
        <div className='societies-container'>
          <div className='societies-loading'>
            <div className='loading-spinner'></div>
            <p>Loading societies...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='societies-container'>
        <div className='societies-header'>
          <h1 className='societies-title'>Societies</h1>
          <div className='category-filters category-tabs'>
            <button
              className={`category-btn ${activeCategory === "" ? "active" : ""}`}
              onClick={() => handleCategoryChange("")}>
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`category-btn ${activeCategory === category.name ? "active" : ""}`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className='error-message'>
            <p>{error}</p>
            <button onClick={() => fetchSocieties(activeCategory)} className='retry-btn'>
              Retry
            </button>
          </div>
        )}

        <div className='societies-grid'>
          {societies.length === 0 && !loading && !error ? (
            <div className='no-societies' style={{ textAlign: "center", color: "#fff", fontSize: "1.2rem" }}>
              <p>No societies found for this category.</p>
            </div>
          ) : (
            societies.map((society) => (
              <a
                key={society.id}
                className='society-card'
                href={`/societies/${society.slug}`}
                style={{ textDecoration: "none" }}>
                <div className='society-logo'>
                  <AppImage
                    src={society.logo_url}
                    alt={`${society.name} logo`}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ288L3RleHQ+PC9zdmc+";
                    }}
                  />
                </div>
                <div className='society-info'>
                  <h3 className='society-name'>{society.name}</h3>
                  <div className='social-icons'>
                    {society.social_media?.facebook && (
                      <a
                        href={society.social_media.facebook}
                        className='social-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}>
                        <FaFacebook />
                      </a>
                    )}
                    {society.social_media?.instagram && (
                      <a
                        href={society.social_media.instagram}
                        className='social-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}>
                        <FaInstagram />
                      </a>
                    )}
                    {society.social_media?.linkedin && (
                      <a
                        href={society.social_media.linkedin}
                        className='social-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}>
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SocietiesList;
