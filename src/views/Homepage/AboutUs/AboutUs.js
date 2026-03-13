import React from "react";
import Styles from "../../../styles/views/home.module.css";
export default function AboutUs() {
  return (
    <div className={Styles.container} data-aos="zoom-in-up">
      <div className={Styles.aboutUsSection}>
        <h2 className={Styles.sectionHeading}>About Us</h2>
        <p className={Styles.description}>
          Technology Students’ Gymkhana is the hub of the numerous
          extra-curricular and co-curricular activities in IIT Kharagpur ranging
          from sports to socio-cultural. The Gymkhana is managed by the
          students, for the students, under the guidance and active
          participation of the faculty and staff members.
        </p>
        <p className={Styles.description}>
          The motto of Technology Students&apos; Gymkhana is <strong>YOGAH KARMASU KAUSALAM</strong>&nbsp;
          which in English means <strong>&quot;Excellence in action is Yoga&quot;</strong>. Our goal is to
          bring overall development in IITians through cultivating and nurturing
          their extra-curricular talents.
        </p>
      </div>
    </div>
  );
}
