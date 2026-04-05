"use client";
import { Box, Container, Typography } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "./elections.module.css";

import { candidates, secyPosts, posts } from "../../data/electionsData";
import ElectionCard from "./ElectionCard";

export default function Elections() {
  if (typeof window !== "undefined") document.title = "Election Candidates 2026-2027 | TSG";
  const [post, setPost] = useState("VP");
  const [secyPost, setSecyPost] = useState("Football");

  // Custom dropdown states
  const [postOpen, setPostOpen] = useState(false);
  const [secyOpen, setSecyOpen] = useState(false);
  const postRef = useRef(null);
  const secyRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (postRef.current && !postRef.current.contains(e.target)) setPostOpen(false);
      if (secyRef.current && !secyRef.current.contains(e.target)) setSecyOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectedPostName = posts.find(p => p.value === post)?.name || post;
  const selectedSecyName = secyPosts.find(p => p.value === secyPost)?.name || secyPost;

  return (
    <Layout>
      <div className={Styles.pageContainer}>
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>FINAL VOTING</div>
          <h1 className={Styles.mainTitle}>CANDIDATES</h1>
        </div>

        <Box className={Styles.postSelector}>
          <div className={Styles.yearSelectWrapper} style={{ gap: '1rem', flexWrap: 'wrap' }}>
            {/* Post Dropdown */}
            <div className={Styles.dropdown} ref={postRef}>
              <div
                className={Styles.dropdownBtn}
                onClick={() => setPostOpen(!postOpen)}
              >
                {selectedPostName}{" "}
                <span className={`${Styles.dropdownArrow} ${postOpen ? Styles.open : ""}`}>
                  ▼
                </span>
              </div>
              {postOpen && (
                <div className={Styles.dropdownMenu}>
                  {posts.map((p) => (
                    <div
                      key={p.value}
                      className={`${Styles.dropdownItem} ${post === p.value ? Styles.dropdownItemActive : ""}`}
                      onClick={() => {
                        setPost(p.value);
                        setPostOpen(false);
                      }}
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Secy Dropdown (appears only when Post is 'Secy') */}
            {post === "Secy" && (
              <div className={Styles.dropdown} ref={secyRef} style={{ zIndex: 99 }}>
                <div
                  className={Styles.dropdownBtn}
                  onClick={() => setSecyOpen(!secyOpen)}
                >
                  {selectedSecyName}{" "}
                  <span className={`${Styles.dropdownArrow} ${secyOpen ? Styles.open : ""}`}>
                    ▼
                  </span>
                </div>
                {secyOpen && (
                  <div className={Styles.dropdownMenu}>
                    {secyPosts.map((p) => (
                      <div
                        key={p.value}
                        className={`${Styles.dropdownItem} ${secyPost === p.value ? Styles.dropdownItemActive : ""}`}
                        onClick={() => {
                          setSecyPost(p.value);
                          setSecyOpen(false);
                        }}
                      >
                        {p.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Box>

        <Box>
          <div className={Styles.noticeDescription} style={{ textAlign: "center", marginBottom: '2rem' }}>
            <strong className="text-danger" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Candidates are requested to send their pictures at <a href="mailto:tech.coordi@iitkgp.ac.in" target="_blank" rel="noreferrer" style={{ color: '#f1c40f' }}>tech.coordi@iitkgp.ac.in</a>
            </strong>
          </div>
          <Box className={Styles.candidateContainer}>
            {candidates[post === "Secy" ? post + "_" + secyPost : post]?.map(
              (candidate, index) => {
                const designation = candidate.RollNo;
                return (
                  <ElectionCard
                    key={index}
                    name={candidate.Name}
                    imgSrc={candidate.img ? `/data/media/images/elections/${candidate.img}` : `/data/media/images/user-placeholder.png`}
                    designation={designation}
                    proposalLink={candidate.ProposalLink}
                    post={post}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </div>
    </Layout>
  );
}
