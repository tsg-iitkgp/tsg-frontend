/* filepath: d:\gym-web-frontend\src\testComponents\TeamSection.js */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./TeamSection.css";
import { BASE_URL } from "../constants/api";
import AppImage from "../components/AppImage";
import { motion } from "framer-motion";

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

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const TeamSection = () => {
  const routeParams = useParams();
  const society_slug = routeParams?.society_slug;
  const [teamGroups, setTeamGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!society_slug) return;
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/societies/${society_slug}/team/grouped`);
        const data = await res.json();
        const sorted = [...(data.teamGroups || [])].sort((a, b) => a.priority - b.priority);
        setTeamGroups(sorted);
      } catch (err) {
        setTeamGroups([]);
      }
      setLoading(false);
    };
    fetchTeam();
  }, [society_slug]);

  const parseSocial = (socialStr) => {
    if (!socialStr) return {};
    if (typeof socialStr === 'object') return socialStr;
    try {
      return JSON.parse(socialStr);
    } catch {
      return {};
    }
  };

  function mergeGroupsByPosition(groups) {
    const merged = {};
    groups.forEach((group) => {
      if (!merged[group.position]) {
        merged[group.position] = { ...group, members: [...group.members] };
      } else {
        merged[group.position].members.push(...group.members);
      }
    });
    // Sort by priority (lowest first)
    return Object.values(merged).sort((a, b) => a.priority - b.priority);
  }

  if (loading) {
    return (
      <div className="team-container team-loading">
        <div className="skeleton-team-title"></div>
        <div className="team-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-team-card">
              <div className="skeleton-team-image"></div>
              <div className="skeleton-team-info">
                <div className="skeleton-team-name"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="team-container">
      {mergeGroupsByPosition(teamGroups).map((group, idx) => (
        <motion.div 
          key={idx} 
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={titleVariants} className="team-category-title">
            {group.position}
          </motion.h2>
          <div className="team-grid">
            {group.members.map((member) => {
              const social = parseSocial(member.social_media);
              return (
                <motion.div variants={cardVariants} key={member.id} className="team-member-card">
                  <div className="member-image-container">
                    <AppImage
                      src={member.image_url}
                      alt={member.name}
                      className="member-image"
                      width={300}
                      height={200}
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
                      }}
                    />
                    <div className="social-overlay">
                      <div className="social-icons">
                        {social.instagram && (
                          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon instagram" />
                          </a>
                        )}
                        {social.linkedin && (
                          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon linkedin" />
                          </a>
                        )}
                        {social.facebook && (
                          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon facebook" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamSection;
