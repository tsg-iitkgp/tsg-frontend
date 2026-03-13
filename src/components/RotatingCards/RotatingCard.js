import React from "react";
import Styles from "../../styles/components/soc.module.css";
import AppImage from "../AppImage";
export default function RotatingCard({
  shortform,
  name,
  description,
  facebook_link,
}) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardfront}>
        <AppImage
          className={Styles.img1}
          src={`/data/media/images/societies/${shortform}.png`}
          loading="lazy"
          alt="image01"
          width={600}
          height={600}
        />
      </div>
      <div className={Styles.cardback}>
        <div className={Styles.cardbackcontent}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a
            className={`${Styles.button} ${Styles.a1}`}
            title="Lorem Ipsum"
            href={facebook_link}
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
