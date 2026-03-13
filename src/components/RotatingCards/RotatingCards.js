import React from "react";
import Styles from "../../styles/components/soc.module.css";
import Data from "../../data/soc";
import RotatingCard from "./RotatingCard";
export default function RotatingCards({ name, category }) {
  const committeeName = name;
  return (
    <div data-aos="zoom-in-up">
      <h1 className={Styles.heading}>{committeeName}</h1>
      <section className={Styles.cardswrapper}>
        {Data.data
          .filter((data) => data.category === category)
          .map((item, i) => {
            return (
              <RotatingCard key="k-15"
                name={item.name}
                description={item.description}
                shortform={item.shortform}
                facebook_link={item.facebook_link}
              />
            );
          })}
      </section>
    </div>
  );
}
