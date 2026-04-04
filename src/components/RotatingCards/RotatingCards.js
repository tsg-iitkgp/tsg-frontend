import React from "react";
import Styles from "../../styles/components/soc.module.css";
import Data from "../../data/soc";
import RotatingCard from "./RotatingCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RotatingCards({ name, category }) {
  const committeeName = name;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 
        className={Styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {committeeName}
      </motion.h1>
      <section className={Styles.cardswrapper}>
        {Data.data
          .filter((data) => data.category === category)
          .map((item, i) => {
            return (
              <RotatingCard key={i}
                name={item.name}
                description={item.description}
                shortform={item.shortform}
                facebook_link={item.facebook_link}
              />
            );
          })}
      </section>
    </motion.div>
  );
}

