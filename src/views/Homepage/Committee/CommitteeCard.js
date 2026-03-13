import React from "react";
import Link from "next/link";
import Styles from "./committee-card.module.css";
import AppImage from "../../../components/AppImage";

export default function CommitteeCard({ data }) {
  return (
    <Link href={data.route}>
      <div className={Styles.card}>
        <div className={Styles.box}>
          <div className={Styles.content}>
            <h2>{data.number}</h2>
            <h3>{data.heading}</h3>
            <AppImage alt="" src={data.background} />
            {/* <p>{data.description}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
