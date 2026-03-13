import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Styles from "../../styles/views/Society/ContactComponent.module.css"
import AppImage from "../../components/AppImage";
export default function ContactComponent(props) {
  return (
    <div className={Styles.parentDiv}>
      <h1 className={Styles.heading}>Contacts</h1>
      <div className={Styles.contactDiv}>
        <div className={Styles.imageDiv} >
          <AppImage alt="" className={Styles.img}
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"}
          ></AppImage>
          <span className={Styles.span}>Governor</span>
          <div className={Styles.div}>
            <a href={""} className={Styles.Link} target="_blank">
              {" "}
              <FaFacebook />
            </a>
            <a href={""} target="_blank" className={Styles.Link} >
              <FaInstagram />
            </a>
            <a href={""} target="_blank" className={Styles.Link}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={Styles.imageDiv} >
          <AppImage alt="" className={Styles.img}
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"}
          ></AppImage>
          <span className={Styles.span}>Governor</span>
          <div className={Styles.div}>
            <a href={""} className={Styles.Link} target="_blank">
              {" "}
              <FaFacebook />
            </a>
            <a href={""} target="_blank" className={Styles.Link} >
              <FaInstagram />
            </a>
            <a href={""} target="_blank" className={Styles.Link}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={Styles.imageDiv} >
          <AppImage alt="" className={Styles.img}
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"}
          ></AppImage>
          <span className={Styles.span}>Governor</span>
          <div className={Styles.div}>
            <a href={""} className={Styles.Link} target="_blank">
              {" "}
              <FaFacebook />
            </a>
            <a href={""} target="_blank" className={Styles.Link} >
              <FaInstagram />
            </a>
            <a href={""} target="_blank" className={Styles.Link}>
              <FaLinkedin />
            </a>
          </div>
        </div>  
      </div>
      <div className={Styles.btnDiv} >
    <button className={Styles.btn} onClick={()=>props.setActiveSection("Contacts")}>See All</button>
    </div>
    </div>
  );
}
