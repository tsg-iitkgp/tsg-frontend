import React from "react";
import Styles from "./highlights.module.css";

function Highlight({ events }) {
  return (
    <div>
      {events.map((event, index) => {
        return (
          <div key="k-9" className={Styles.highlight}>
            <div className={Styles.highlightHeadingContainer}>
              <h1>{event.title}</h1>
            </div>

            <div className={Styles.highlightBody}>
              <p className={Styles.highlightDescription}>
                {event.highlightText}
              </p>
              {
                event.content && event.content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))
              }
              <div className={Styles.highlightDate}>
                {event.dates &&
                  event.dates.map((date, index) => {
                    // console.log(date);
                    return (
                      <div key="k-28" style={{ display: "flex" }}>
                        <p style={{ color: "#f1c40f" }}>
                          {date.title} : &nbsp;
                        </p>
                        <p> {date.date}</p>
                      </div>
                    );
                  })}
              </div>
              {/* Links */}

              {event.links.map((link, index) => {
                return (
                  <p key="k-41">
                    {link.description} &nbsp;
                    <a href={link.href} target="blank">
                      {link.content}
                    </a>
                  </p>
                );
              })}
            </div>

            {/* <div className={Styles.highlightFooter}>
              <div className={Styles.highlightFooterContactCard}>
                <div>Name</div>
                <div>+91 7013160459</div>
              </div>

              <div className={Styles.highlightFooterContactCard}>
                <div>Name</div>
                <div>+91 7013160459</div>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Highlight;
