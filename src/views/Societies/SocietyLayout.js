import Layout from "../../components/Layouts/Layout";
import background from "./180dc.jpg";
import Link from "next/link";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import NavTabs from "./NavTab";
import { useState } from "react";
import Styles from "../../styles/views/Society/SocietyLayout.module.css";
import Description from "./Description";
import ImageGalleryComponent from "./ImageGalleryComponent";
import ContactTab from "./ContactTab";
import ContactComponent from "./ContactComponent";
import Resgiteration from "./Registration";
import ImageGalleryTab from "./ImageGalleryTab";
import AppImage from "../../components/AppImage";

export default function SocietyLayout() {
  const [activeSection, setActiveSection] = useState("Description");
  const Sections = ["Description", "Contacts", "Image Gallery"];
  return (
    <Layout>
      <div className={Styles.parentDiv}>
        <div className={Styles.coverPhotoDiv}>
          {/* <h1 className={Styles.coverPhotoHeading}>180 Degrees Consulting</h1> */}
          <AppImage alt="" src={background} className={Styles.coverImg}></AppImage>
        </div>
        <div className={Styles.headDiv}>
          <div className={Styles.headDiv1}>
            <AppImage alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwun4XIcQgZi91uWOOkVArN5sbsLZgnJEdEg&s"
              className={Styles.headImg}
            />
            <div className={Styles.headDiv2}>
              <h1 className={Styles.headDiv2hHeading}>
                180 Degrees Consulting
              </h1>
              <div className={Styles.headDiv2InnerDiv}>
                <span>Technology</span>
                <Link href="#" className={Styles.headDiv2Link}>
                  <HiArrowTopRightOnSquare />
                </Link>
              </div>
            </div>
          </div>
          <button className={Styles.headBtn}>Register</button>
        </div>
        <div className={Styles.navTab}>
          {Sections.map((section, index) => {
            return (
              <NavTabs
                key={index}
                text={section}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                className={activeSection === section ? Styles.activeTab : ""}
              ></NavTabs>
            );
          })}
        </div>
        {
          <div style={{ display: activeSection === "Description" ? "block" : "none" }}>
          <Description/>
          <ImageGalleryComponent  setActiveSection={setActiveSection} />
          <ContactComponent  setActiveSection={setActiveSection}/>
          <Resgiteration/>
          </div>
        }
        {
          <div style={{ display: activeSection === "Contacts" ? "block" : "none" }}>
          <ContactTab/>
          </div>
        }
        {
          <div style={{ display: activeSection === "Image Gallery" ? "block" : "none" }}>
           <ImageGalleryTab/>
          </div>
        }
        
      
      </div>
    </Layout>
  );
}
