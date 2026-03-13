import Styles from "../../styles/views/Society/ImageGalleryComponent.module.css"
import AppImage from "../../components/AppImage";
export default function ImageGalleryComponent(props) {
  return (
    <div className={Styles.parentDiv}>
      <h1 className={Styles.heading}>Image Gallery</h1>
      <div className={Styles.ImageGallery}>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <AppImage alt="" className={Styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTRzLea_0zPoz0O7aO_fsZNjo8V5g5FEEpA&s"/>
        <AppImage alt="" className={Styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW18v8AAyb8U0Z3M2EkSLlzetK72DhYGBkA&s"/>
        <AppImage alt="" className={Styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s"/>
        <AppImage alt="" className={Styles.img}
          src="https://www.shutterstock.com/shutterstock/photos/1032541603/display_1500/stock-photo-the-young-and-conceptual-image-of-a-large-stone-in-the-shape-of-the-human-brain-1032541603.jpg"/>
        <AppImage alt="" className={Styles.img}
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"/>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <AppImage alt="" className={Styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW18v8AAyb8U0Z3M2EkSLlzetK72DhYGBkA&s"/>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <AppImage alt="" className={Styles.img}
          src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      </div>
      <div className={Styles.BtnDiv}>
        <button className={Styles.Btn} onClick={()=>props.setActiveSection("Image Gallery")}>See More</button>
      </div>
    </div>
  );
}
