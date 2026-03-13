import React from "react";
import AppImage from "../../components/AppImage";

const SlidingImages = () => {
  // Array to simulate 10 images
  const images = Array(10).fill(
    "https://lh6.googleusercontent.com/MPu7D_wVvgnO0Rgg0lxvkA1gdL61QQ1XgWL8EfNZcb4_q80W41DuyxGrEQDnTxqUpxaYZQoO7Kfc7yEMoWbb3UnIpiD4-oD-MrJg1w36ZTf7QudEPic7i2b84FOpW_e7DA=w1280"
  );

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          animation: "slide 30s linear infinite", // Animation settings
        }}
      >
        {/* Duplicating images for seamless looping */}
        {images.concat(images).map((img, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              color: "white",
              fontSize: "18px",
              minWidth:"160px"
            }}
          >
            <AppImage
              src={img}
              alt="Governor"
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                height: "128px",
                width: "128px",
                objectFit: "contain",
              }}
            />
            <p>Governor</p>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SlidingImages;
