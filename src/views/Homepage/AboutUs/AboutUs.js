"use client";
import React from "react";
import Styles from "../../../styles/views/home.module.css";
import AppImage from "../../../components/AppImage";

export default function AboutUs() {
  const [easterEggs, setEasterEggs] = React.useState([]);

  const handleDoubleClick = (e) => {
    const eggId = Date.now() + Math.random();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    setEasterEggs((prev) => [...prev, { id: eggId, x, y }]);
    setTimeout(() => {
      setEasterEggs((prev) => prev.filter((egg) => egg.id !== eggId));
    }, 2000);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.aboutUsSectionWrapper}>
        <div className={Styles.aboutContent}>
          <h2 className={Styles.aboutHeading}>ABOUT</h2>

          <p className={Styles.aboutDescription}>
            <span className={Styles.highlightWhite}>Technology Students&apos; Gymkhana</span> is the hub of the numerous <span className={Styles.highlightWhite}>extra-curricular and co-curricular</span> activities in IIT Kharagpur ranging from <span className={Styles.highlightWhite}>sports to socio-cultural</span>. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
          </p>

          <p className={Styles.aboutDescription}>
            The motto of Technology Students&apos; Gymkhana is <span className={Styles.highlightWhite}>YOGAH KARMASU KAUSALAM</span>, which in English means <span className={Styles.highlightWhite}>&quot;Excellence in action is Yoga&quot;</span>. Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
          </p>

          <div className={Styles.readConstitution}>
            <a href="/filler-link">Read The Constitution</a>
            <div className={Styles.yellowLine}></div>
          </div>
        </div>

        <div className={Styles.aboutImageContainer} onDoubleClick={handleDoubleClick}>
          <AppImage src="/images/iitkgp.jpg" alt="IIT Kharagpur Main Building" width={600} height={400} />
          {easterEggs.map((egg) => (
            <div
              key={egg.id}
              className={Styles.easterEggText}
              style={{ left: egg.x, top: egg.y }}
            >
              Peace hai!
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
