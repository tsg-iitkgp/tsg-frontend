"use client";
import React from "react";
import Styles from "../../styles/components/soc.module.css";
import Layout from "../../components/Layouts/Layout";
import RotatingCards from "../../components/RotatingCards/RotatingCards";

export default function Societies() {
  if (typeof window !== "undefined") document.title = "Societies | TSG";

  const committees = [
    { name: "Social And Cultural", category: "Socult" },
    { name: "Technology", category: "Tech" },
    { name: "Sports & Games", category: "Sports & Games" },
    { name: "Welfare", category: "Welfare" },
  ];
  return (
    <Layout>
      <div className={Styles.full} data-aos="zoom-in-up">
        {committees.map((committee, index) => {
          return (
            <RotatingCards
              name={committee.name}
              category={committee.category}
            />
          );
        })}
      </div>
    </Layout>
  );
}
