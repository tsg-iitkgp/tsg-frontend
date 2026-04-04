"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { BASE_URL } from "../constants/api";
import "./ProfileHeader.css";
import gymkhanaLogo from "../assets/gymkhanaLogo.png";
import AppImage from "../components/AppImage";

const cache = {};

const ProfileHeader = () => {
  const params = useParams();
  const society_slug = params?.society_slug;
  const router = useRouter();
  const [society, setSociety] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSociety() {
      setLoading(true);
      setError(null);

      if (cache[society_slug]) {
        setSociety(cache[society_slug]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}`);
        if (!res.ok) throw new Error("Failed to fetch society");
        const data = await res.json();
        setSociety(data.society);
        cache[society_slug] = data.society;
      } catch (err) {
        setError("Could not load society details.");
      } finally {
        setLoading(false);
      }
    }

    if (society_slug) {
      fetchSociety();
    }
  }, [society_slug]);
  const capitalizeWords = (str) => str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-wrapper">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading society...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !society) {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-wrapper">
            <div className="error-container">
              <p>{error || "Society not found."}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header-container">
      {/* Header Content */}
      <div className="header-content">
        <div className="header-wrapper">
          <button
            className="back-button"
            onClick={handleGoBack}
            style={{ position: "absolute", top: 24, left: 24, zIndex: 20 }}
          >
            <FaArrowLeft className="back-icon" />
            <span>Back</span>
          </button>
          <div className="profile-section">
            {/* Profile Logo */}
            <div className="profile-logo" style={{ position: "relative", alignSelf: "top" }}>
              <AppImage
                src={society.logo_url}
                alt={`${society.name} Logo`}
                width={224}
                height={224}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "4px solid #fbbf24",
                  background: "transparent",
                }}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ288L3RleHQ+PC9zdmc+";
                }}
              />
              {society.is_under_gymkhana && (
                <div style={{ position: "absolute", bottom: "-1px", right: "-1px" }}>
                  <AppImage
                    src={gymkhanaLogo}
                    alt="Gymkhana"
                    className="gymkhana-logo-badge"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#000000ff",
                      borderRadius: "50%",
                      border: "1.5px solid #fbbf24",
                      boxShadow: "0 2px 8px #fbbf2433",
                      padding: "6px",
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  />
                  <span className="gymkhana-tooltip">This society is under Gymkhana</span>
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <div className="profile-header-content">
                <h1 className="profile-title">{society.name}</h1>
                {society.one_liner && (
                  <blockquote
                    className="profile-one-liner"
                    style={{
                      color: "#fbbf24",
                      fontWeight: 600,
                      fontSize: "1.08rem",
                      fontStyle: "italic",
                      margin: "0.3rem auto 0.7rem auto",
                      borderLeft: "4px solid #fbbf24",
                      paddingLeft: "1rem",
                      background: "rgba(251,191,36,0.07)",
                      textAlign: "center",
                      maxWidth: "600px",
                    }}
                  >
                    {society.one_liner}
                  </blockquote>
                )}
                <blockquote className="profile-quote">{society.description}</blockquote>
                <div className="profile-domain">
                  <span className="domain-label">Category : </span>
                  <span className="domain-value">{society.category_name}</span>
                </div>
              </div>

              <div className="profile-social-tags">
                <div className="profile-tags">
                  <span className="tag">Active</span>
                  {/* Render tags from API response if present */}
                  {Array.isArray(society.tags) &&
                    society.tags.map((tag, idx) => (
                      <span className="tag" key={idx}>
                        {capitalizeWords(tag)}
                      </span>
                    ))}
                </div>

                <div className="header-social-icons">
                  {society.social_media?.facebook && (
                    <a
                      href={society.social_media.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook
                        style={{ fontSize: "2.8rem" }}
                        className="header-social-icon facebook"
                      />
                    </a>
                  )}
                  {society.social_media?.instagram && (
                    <a
                      href={society.social_media.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        style={{ fontSize: "2.8rem" }}
                        className="header-social-icon instagram"
                      />
                    </a>
                  )}
                  {society.social_media?.linkedin && (
                    <a
                      href={society.social_media.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        style={{ fontSize: "2.8rem" }}
                        className="header-social-icon linkedin"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
