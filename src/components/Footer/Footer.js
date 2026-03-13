//Footer.js
import React from "react";
import Styles from "./footer.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import AppImage from "../AppImage";

export default function Footer() {
  const linksList = [
        {
          title: "Counselling Centre",
          href: "http://www.counsellingcentre.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "IIT KGP Website",
          href: "http://www.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "Yellow Pages",
          href: "https://wiki.metakgp.org/w/Yellow_pages",
          target: "_blank",
        },
        {
          title: "HMC",
          description : "Hall Management Center",
          href: "http://www.hmc.iitkgp.ac.in/web/",
          target: "_blank",
        },
        {
          title: "Library",
          href: "https://library.iitkgp.ac.in/",
          target: "_blank",  
        },
        {
          title: "ERP",
          href: "https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=F90F79C925A0FE0DC48AE7CBFDE3D20A.worker1&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/",
          target: "_blank",
          
        },
        {
          title: "Your Dost",
          href: "https://wiki.metakgp.org/w/Yellow_pages/",
          target: "_blank",
        },
        {
          title: "Grievance Form",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform",
          target: "_blank",
        },
        {
          title: "CIC",
          href: "http://www.cic.iitkgp.ac.in/",
          target: "_blank", 
          description : "Computer & Informatics Center", 
        },
        {
          title:"Apna IIT",
          description:"Accesible on campus network",
          class:"tooltiptext",
          href: "http://apna.iitkgp.ac.in/",
          target:"_blank",
        }  
      ]

  return (
    <footer>
      <div className={Styles.footerContainer}>
        <div className={Styles.tsgContainer}>
          <div className={Styles.imgContainer}>
            <AppImage src="/data/media/images/general/gymkhanaLogo.png" alt="TSG Logo" />
          </div>
          <div className={Styles.tsgDescription}>
            <h2 className={Styles.tsgHeading}>Technology Students&apos; Gymkhana</h2>
            <p className={Styles.address}>
              Indian Institute of Technology Kharagpur,
              <br />
              West Bengal - 721302
            </p>
          </div>
          <div className={Styles.iconsContainer}>
            <a
              target="_blank"
              href="https://www.facebook.com/TSG.IITKharagpur"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://github.com/tsg-iitkgp"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/tsg.iitkharagpur/?hl=en"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={Styles.linksContainer}>
          {linksList.map((link , index)=>{
            return(
              <p 
                key={index} 
              >
                <a 
                  target={link.target} 
                  href={link.href} 
                  rel="noreferrer" 
                >
                  {link.title}
                </a>
                {link.description ? <span className={link.class}>{link.description}</span> : <></>} 
              </p>
            )
          })}
        </div>
        <div className={Styles.contactSection}>
          <span>We&apos;re here</span>
          <span>Let&apos;s talk</span>
          <a href="/ContactUs">
            <button className={Styles.contactButton}>Get in Touch</button>
          </a>
        </div>
      </div>
      <div className={Styles.footerLine}></div>
      <div>
        <p className={Styles.copyright}>&copy; Technology Students&apos; Gymkhana, IIT Kharagpur &diams; <a href="https://github.com/tsg-iitkgp/web-frontend" target="_blank" rel="noreferrer">Source Code</a></p>
      </div>
    </footer>
  );
}


