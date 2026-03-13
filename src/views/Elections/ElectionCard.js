import React from "react";
import Styles from "./electionCard.module.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AppImage from "../../components/AppImage";
function ElectionCard({
  name,
  designation,
  email,
  facebook,
  whatsapp,
  web,
  imgSrc,
  proposalLink,
  post,
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgbox}>
        <AppImage src={imgSrc} alt={`${name}_image`} />
      </div>
      {post !== "Secy" && (
        <ul className={Styles.sociallinks}>
          <li></li>
          {proposalLink ? <li>
            <a
              href={`/data/media/files/proposals/${proposalLink}`}
              target="_blank"
              rel="noreferrer"
              alt={`Proposal_of_${proposalLink}`}
            >
              <MenuBookIcon />
            </a>
          </li> : <li>Proposal not received by TSG</li>}
          <li></li>
        </ul>
      )}

      <div className={Styles.details}>
        <h2>{name}</h2>
        <span>{designation}</span>
      </div>
    </div>
  );
}

export default ElectionCard;
