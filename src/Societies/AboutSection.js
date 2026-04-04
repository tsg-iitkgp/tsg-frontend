"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "./AboutSection.css";
import { BASE_URL } from "../constants/api";
import AppImage from "../components/AppImage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
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

const AboutSection = ({ society: propSociety }) => {
  const routeParams = useParams();
  const society_slug = routeParams?.society_slug;
  const [society, setSociety] = useState(propSociety || null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(!propSociety);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch society info only if not passed as prop
  useEffect(() => {
    if (propSociety || !society_slug) return;
    setLoading(true);
    fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}`)
      .then((res) => res.json())
      .then((data) => {
        setSociety(data.society);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load society details.");
        setLoading(false);
      });
  }, [society_slug, propSociety]);

  // Fetch gallery images
  useEffect(() => {
    if (!society_slug) return;
    setGalleryLoading(true);
    fetch(`${BASE_URL}/societies/${encodeURIComponent(society_slug)}/gallery?page=1&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data.images || []);
        setGalleryLoading(false);
      })
      .catch(() => setGalleryLoading(false));
  }, [society_slug]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };
  const handleThumbClick = (idx) => setCurrentSlide(idx);

  if (loading) return <div className="about-loading">Loading...</div>;
  if (error) return <div className="about-error">{error}</div>;
  if (!society) return null;

  console.log(society);
  // Parse contact info
  let contact = {};
  try {
    contact = society.contact_info ? JSON.parse(society.contact_info) : {};
  } catch {}

  // Social icons
  const socials = society.social_media || {};

  return (
    <div className="content-wrapper">
      <div className="about-section">
        {/* Hero Section */}

        {/* Main Content Grid */}
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Description Section */}
          <motion.div variants={itemVariants} className="about-description-card">
            <h3 className="card-title">About Us</h3>
            <p className="about-description">{society.description}</p>
          </motion.div>

          {/* Contact & Website Section */}
          <motion.div variants={itemVariants} className="about-contact-card">
            <h3 className="card-title">Get In Touch</h3>
            <div className="contact-grid">
              {contact.email && (
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <a href={`mailto:${contact.email}`} className="contact-value">
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
              {contact.mobile && (
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <a href={`tel:${contact.mobile}`} className="contact-value">
                      {contact.mobile}
                    </a>
                  </div>
                </div>
              )}
              {contact.location && (
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <span className="contact-value">{contact.location}</span>
                  </div>
                </div>
              )}
            </div>
            {contact.website && (
              <div className="website-cta-row">
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-cta-btn"
                >
                  <FaGlobe />
                  <span>Visit Website</span>
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Full-width Gallery Slider */}
        {!galleryLoading && gallery.length > 0 && (
          <motion.div 
            className="about-gallery-slider-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="card-title" style={{textAlign: "center"}}>Gallery</h3>
            <div className="gallery-slider-main">
              <button className="gallery-arrow left" onClick={handlePrev} aria-label="Previous">
                &#8592;
              </button>
              <div className="gallery-slider-image-wrapper">
                <AppImage
                  src={gallery[currentSlide].image_url}
                  alt={gallery[currentSlide].caption || `Gallery ${currentSlide + 1}`}
                  className="gallery-slider-image"
                  width={1200}
                  height={675}
                />
                {gallery[currentSlide].caption && (
                  <div className="gallery-slider-caption">{gallery[currentSlide].caption}</div>
                )}
              </div>
              <button className="gallery-arrow right" onClick={handleNext} aria-label="Next">
                &#8594;
              </button>
            </div>
            <div className="gallery-slider-thumbnails">
              {gallery.map((img, idx) => (
                <AppImage
                  key={img.id || idx}
                  src={img.image_url}
                  alt={img.caption || `Gallery ${idx + 1}`}
                  className={`gallery-slider-thumb${idx === currentSlide ? " active" : ""}`}
                  onClick={() => handleThumbClick(idx)}
                  width={120}
                  height={80}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
