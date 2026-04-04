"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from "./council-home.module.css";
import AppImage from "../../../components/AppImage";

export default function CouncilHome() {
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.headerRegion}>
        <div className={Styles.yellowSubtitle}>CURRENT OFFICE BEARERS</div>
        <h2 className={Styles.mainTitle}>COUNCIL</h2>
      </div>

      <div className={Styles.imageContainer}>
        <div className={Styles.imagePadWhite}>
          <AppImage src="/images/officebearers.png" alt="Council" width={1000} height={600} />
        </div>
      </div>

      <div className={Styles.buttonContainer}>
        <button className={Styles.viewAllBtn} onClick={() => router.push('/contacts')}>
          View All
        </button>
      </div>
    </div>
  );
}
