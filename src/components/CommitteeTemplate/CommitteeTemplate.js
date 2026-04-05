"use client";

import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import Styles from "./committee.module.css";
import AppImage from "../AppImage";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";
import { BASE_URL } from "../../constants/api";
import { motion } from "framer-motion";
import socData from "../../data/soc";

export default function CommitteeTemplate({ category, shortName, title, descriptionParagraphs }) {
    const [societies, setSocieties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let normalizedCategory = category;
        if (category === "Social & Cultural") normalizedCategory = "Socult";
        if (category === "Technology") normalizedCategory = "Tech";
        if (category === "Students' Welfare") normalizedCategory = "Welfare";

        const filteredSocieties = (socData.data || []).filter(s => s.category === normalizedCategory);
        setSocieties(filteredSocieties);
    }, [category]);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <Layout>
            <div className={Styles.templateContainer}>
                {/* Header Section */}
                <section className={Styles.heroSection}>
                    <div className={Styles.heroBackground}></div>
                    <div className={Styles.heroContent}>
                        <div className={Styles.committeeSubtitle}>COMMITTEE</div>
                        <h1 className={Styles.committeeTitle}>{title}</h1>
                    </div>
                </section>

                {/* Description */}
                <section className={Styles.descriptionSection}>
                    {descriptionParagraphs.map((para, i) => (
                        <p key={i} className={Styles.descriptionText}>
                            {para}
                        </p>
                    ))}
                </section>

                {/* Societies Grid */}
                <section className={Styles.societiesListSection}>
                    <div className={Styles.societiesHeader}>
                        <div className={Styles.societiesSubtitle}>{shortName}</div>
                        <h2 className={Styles.societiesTitle}>SOCIETIES</h2>
                    </div>

                    {loading ? (
                        <div className={Styles.loading}>Loading societies...</div>
                    ) : error ? (
                        <div className={Styles.error}>{error}</div>
                    ) : (
                        <div className={Styles.societiesGrid}>
                            {societies.map((soc, idx) => {
                                // Fallback handling for names and generating unique keys if id is missing
                                let baseName = soc.name;
                                // GitHub blob image URLs cannot be loaded directly as sources unless they are "raw"
                                let imgUrl = soc.img;
                                if (imgUrl && imgUrl.includes("github.com") && imgUrl.includes("/blob/")) {
                                    imgUrl = imgUrl.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
                                }

                                return (
                                    <motion.a
                                        href={`/societies/${soc.shortform || soc.slug || 'unknown'}`}
                                        key={soc.shortform || idx}
                                        className={Styles.container}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <div className={Styles.imgbox}>
                                            <AppImage
                                                src={imgUrl}
                                                alt={`${soc.name} logo`}
                                                width={200}
                                                height={200}
                                                onError={(e) => {
                                                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZGIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxPR088L3RleHQ+PC9zdmc+";
                                                }}
                                            />
                                        </div>
                                        <div className={Styles.details}>
                                            <h2>{baseName}</h2>
                                            <span>{soc.category || category} Society</span>
                                        </div>
                                        <ul className={Styles.sociallinks}>
                                            {(soc.facebook_link || (soc.social_media && soc.social_media.facebook)) && (
                                                <li><a href={soc.facebook_link || soc.social_media.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                                            )}
                                            {(soc.email || (soc.social_media && soc.social_media.email)) && (
                                                <li><a href={`mailto:${soc.email || soc.social_media.email}`} target="_blank" rel="noreferrer"><FaEnvelope /></a></li>
                                            )}
                                            {(soc.linkedin_link || (soc.social_media && soc.social_media.linkedin)) && (
                                                <li><a href={soc.linkedin_link || soc.social_media.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                                            )}
                                            {(soc.instagram_link || (soc.social_media && soc.social_media.instagram)) && (
                                                <li><a href={soc.instagram_link || soc.social_media.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                                            )}
                                        </ul>
                                    </motion.a>
                                )
                            })}
                        </div>
                    )}
                </section>
            </div>
        </Layout>
    );
}
