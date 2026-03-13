"use client";
import { Box, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "./elections.module.css";

import { candidates, secyPosts, posts } from "../../data/electionsData";
import ElectionCard from "./ElectionCard";

export default function Elections() {
  if (typeof window !== "undefined") document.title = "Election Candidates 2025-2026 | TSG";
  const [post, setPost] = useState("VP");
  const [secyPost, setSecyPost] = useState("Football");
  const handlePostChange = (e) => {
    setPost(e.target.value);
  };
  const handleSecyPostChange = (e) => {
    setSecyPost(e.target.value);
  };
  return (
    <Layout>
      <Container className={Styles.electionsContainer}>
        <Typography
          variant="h4"
          style={{
            color: "#f1c40f",
            fontFamily: "Lato",
            fontWeight: "600",
          }}
          align="center"
        >
          {" "}
          TSG Elections 2025-2026
        </Typography>
        <Box className={Styles.postSelector}>
          <select
            value={post}
            onChange={handlePostChange}
            className={Styles.selectButton}
          >
            {posts.map((post, index) => (
              <option key="k-option" value={post.value}>{post.name}</option>
            ))}
          </select>
          {post === "Secy" && (
            <select
              value={secyPost}
              onChange={handleSecyPostChange}
              className={Styles.selectButton}
              style={{
                marginTop: "1rem",
              }}
            >
              {secyPosts.map((post, index) => (
                <option key="k-option" value={post.value}>{post.name}</option>
              ))}
            </select>
          )}
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            component="h6"
            style={{
              color: "hsl(207, 70%, 71%)",
              fontFamily: "lato",
              marginTop: "1rem",
            }}
          >
            Candidates
          </Typography>
          <div className={Styles.noticeDescription} style={{ textAlign: "center" }}>
            <strong className="text-danger">Candidates are requested to send their pictures at <a href="mailto:tech.coordi@iitkgp.ac.in" target="_blank" rel="noreferrer">tech.coordi@iitkgp.ac.in</a></strong>
          </div>
          <Box className={Styles.candidateContainer}>
            {candidates[post === "Secy" ? post + "_" + secyPost : post].map(
              (candidate, index) => {
                const designation =
                  candidate.RollNo;
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
      </Container>
    </Layout>
  );
}
