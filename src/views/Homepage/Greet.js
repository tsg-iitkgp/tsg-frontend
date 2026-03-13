import React from "react";
import Styles from "./greet.module.css";
export default function Greet() {
  return (
    <div className={Styles.animatedTitle}>
      <div className={Styles.textTop}>
        <div>
          <span>Technology Students&apos; Gymkhana</span>
          <span>IIT Kharagpur</span>
        </div>
      </div>
      <div className={Styles.textBottom}>
        <div>Welcomes You!</div>
      </div>
    </div>
  );
}
