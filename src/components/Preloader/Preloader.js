"use client";
import React, { useState, useEffect } from "react";
import AppImage from "../AppImage";
import Styles from "./preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Disable scrolling when preloader is active
    document.body.style.overflow = "hidden";
    
    // Start fading out at 1.5 seconds
    const timer = setTimeout(() => {
      setFade(true);
    }, 1500);
    
    // Completely unmount after fade transition completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${Styles.preloaderContainer} ${fade ? Styles.fadeOut : ""}`}>
      <div className={Styles.contentWrapper}>
        <AppImage
          src="/data/media/images/general/gymkhanaLogo.png"
          alt="Gymkhana Logo"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
}
