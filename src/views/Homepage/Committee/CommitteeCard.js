"use client";
import React from "react";
import Link from "next/link";
import Styles from "./committee-card.module.css";
import AppImage from "../../../components/AppImage";

export default function CommitteeCard({ data, index }) {
  return (
    <Link href={data.route} style={{ textDecoration: "none" }}>
      <div className={`${Styles.card} ${index === 0 ? Styles.firstCard : ''}`}>
        <div className={Styles.topSection}>
          <AppImage src={data.background} alt={data.heading} width={400} height={300} />
          <div className={Styles.titleContainer}>
            <h3 className={data.titleClass}>{data.heading}</h3>
          </div>
          <p className={Styles.description}>{data.description}</p>
        </div>
        <div className={Styles.clubList}>
          {data.clubs.map((club, idx) => (
            <div key={idx} className={Styles.clubItem}>
              {club ? (
                <>
                  <div className={Styles.clubIcon}></div>
                  <div className={Styles.clubName}>{club}</div>
                </>
              ) : (
                <div style={{ visibility: "hidden" }}>empty</div> 
              )}
            </div>
          ))}
          <div className={Styles.exploreLink}>
            {data.exploreLine}
          </div>
        </div>
      </div>
    </Link>
  );
}
