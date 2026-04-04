import React, { useState, useEffect } from "react";
import RotatingCard from "../../../components/RotatingCards/RotatingCard";
import Styles from "../../../styles/views/home.module.css";
import CardsStyles from "../../../styles/components/soc.module.css";
import Data from "../../../data/soc";
import Tab from "./Tab";
import Cards from "../../../components/Cards";
import  "../../../styles/components/card-modules.css";
import SkeletonCard from "./SkeletonSociety";

export default function Societies() {
  const [loading, setLoading] = useState(true);
  const [fullData, setFullData] = useState(false);
  const [category, setCategory] = useState("Socult");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = Data.data.filter((data) => data.category === category);
      setFilteredData(filtered);
      setLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, [category,fullData]);

  const tabChangeHandler = (newCategory) => {
    setCategory(newCategory);
  };

  const displayedData = fullData ? filteredData : filteredData.slice(0, 6);

  return (
    <div className={Styles.container}>
      {/* Heading */}
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: "3rem" }}
      >
        Societies
      </h2>

      {/* Tabs */}
      <Tab
        category={category}
        setCategory={setCategory}
        onTabChange={tabChangeHandler}
      />

      {/* Cards or Skeletons */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" ,maxWidth:"1200px",gap:"20px"}}>
        <div className="cardParentDiv">
          {loading
            ? Array(6) // Render 6 skeleton cards
                .fill()
                .map((_, i) => <SkeletonCard key={i} />)
            : displayedData.map((item, i) => (
                <Cards
                  name={item.name}
                  key={i}
                  shortform={item.shortform}
                  facebook_link={item.facebook_link}
                  linkedin_link={item.linkedin_link}
                  instagram_link={item.instagram_link}
                />
              ))}
        </div>
        {/* Button */}
        {!loading && (
          <button
            className="btnHandler"
            onClick={() => setFullData((prevState) => !prevState)}
          >
            {fullData ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}

