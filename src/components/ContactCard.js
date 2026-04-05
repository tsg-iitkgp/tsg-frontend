import React from "react";
import Styles from "../styles/components/contact-card.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AppImage from "./AppImage";

function ContactCard({ name, designation, email, facebook, linkedin, whatsapp, web, imgSrc }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.imgbox}>
        <AppImage src={imgSrc} alt={`${name}_image`} width={200} height={200} />
      </div>
      <div className={Styles.details}>
        <h2>{name}</h2>
        <span>{designation}</span>
      </div>
      {open && (
        <div className={Styles.toast}>Email address copied</div>
      )}
      <ul className={Styles.sociallinks}>
        <li>
          <a href={`${facebook}`} target="_blank" rel="noreferrer">
            {facebook && facebook.includes("instagram.com") ? (
              <i className="fab fa-instagram"></i>
            ) : (
              <i className="fab fa-facebook-f"></i>
            )}
          </a>
        </li>
        <li>
          <CopyToClipboard text={`${email}`}>
            <button onClick={handleClick} title="Copy Email Address">
              <i className="fas fa-envelope"></i>
            </button>
          </CopyToClipboard>
        </li>
        <li>
          <a href={`${linkedin}`} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactCard;
