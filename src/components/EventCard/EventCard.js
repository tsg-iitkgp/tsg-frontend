import axios from "axios";
import React, { useState } from "react";
import Styles from "../../styles/components/Events/eventcard.module.css";
import ResultsPreview from "../Admin/DataUpdate/ResultsPreview";
import host from "../../apiService";

export default function EventCard(props) {
  // console.log(props);
  let blogCardClass;
  // const [index, setIndex] = useState(null);
  const [showRes, setShowRes] = useState(false);
  // const [eventResults, setEventResults] = useState({});
  let displayResultsButtonClass = `d-none`;
  if (props.resultExists === 1) {
    displayResultsButtonClass = "btn btn-outline-success";
  }

  if (props.index % 2 !== 0) {
    blogCardClass = `${Styles.blogCard} ${Styles.alt}`;
  } else {
    blogCardClass = `${Styles.blogCard}`;
  }
  return (
    <>
      <ResultsPreview
        eventTitle={props.title}
        eventResults={props.eventResults}
        showRes={showRes}
        index={props.index}
        disable={() => {
          setShowRes(false);
        }}
      />
      <div className={blogCardClass}>
        {props.imgSrc && (
          <div className={Styles.meta}>
            <div
              className={Styles.photo}
              style={{
                backgroundImage: `url(${props.imgSrc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <ul className={Styles.details}>
              <li className={Styles.author}>
                <a href="www.google.com" alt="secy_responsible">
                  {" "}
                </a>
              </li>
              <li className={Styles.author}>
                <a href="www.google.com"> </a>
              </li>
            </ul>
          </div>
        )}
        <div className={Styles.description}>
          <h1>{props.title}</h1>
          <h2>{props.date}</h2>
          <p> {props.description.toString().substring(0, 150) + "..."}</p>
          <div>
            <div className={Styles.readMore}>
              <div className={Styles.btnsContainer}>
                <button className="btn btn-outline-warning" onClick={props.displayTrue}>
                  Read More
                </button>
                <button
                  variant="outline-success"
                  className={displayResultsButtonClass}
                  onClick={() => {
                    axios
                      .get(`${host}/admin/event/${props.index}/results`)
                      .then((response) => {
                        // console.log(response);
                        props.displayResults();
                        props.setEventResults(response);
                        // console.log(response.data.eventResults[0]);
                      })
                      .then((response) => {
                        // setShowRes(true);
                        // setIndex(props.index);
                        // console.log(eventResults);
                      });
                  }}
                >
                  Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
