"use client";

import React, { useState, useEffect } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import Styles from "../../styles/components/navbar.module.css";
import useNavbar from "./useNavbar";
import eventsData from "../../views/Events/eventsData.js";
import Notification from "./Notification";
import { useRouter, usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import AppImage from "../AppImage";

export default function Navbar() {
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const highlightEvents = eventsData.filter((event) => event.isHighlight);
  
  const handleClick = () => setClick(!click);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const menuGroups = {
    societies: [
      { title: "All Societies", path: "/societies" },
      { title: "Social & Cultural", path: "/committees/socult" },
      { title: "Sports", path: "/committees/sports" },
      { title: "Technology", path: "/committees/tech" },
      { title: "Welfare", path: "/committees/welfare" },
    ],
    hallOfFame: [
      { title: "Awards", path: "/awards" },
      { title: "InterIIT/GC Results", path: "/results" },
    ],
    governance: [
      { title: "Council", path: "/contacts" },
      { title: "Elections", path: "/elections" },
      { title: "Nominations", path: "/nominations" },
    ],
    more: [
      { title: "Letter To You", path: "/letter-to-you" },
      { title: "Blogs", path: "https://tsgblog.iitkgp.ac.in/" },
      { title: "FAQ", path: "/faq" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={navbarClass}>
        <nav className={Styles.navbar}>
          <div className={Styles.navLogo}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <AppImage
                src="/data/media/images/general/gymkhanaLogo.png"
                alt="Gymkhana Logo"
                width={40}
                height={40}
              />
              <div className={Styles.logoText}>
                <span className={Styles.logoTextSmall}>TECHNOLOGY STUDENTS&apos;</span>
                <span className={Styles.logoTextLarge}>GYMKHANA</span>
              </div>
            </Link>
          </div>

          <div className={Styles.menuIcon} onClick={handleClick}>
            {click ? (
              <span key="close"><i className="fas fa-times" suppressHydrationWarning></i></span>
            ) : (
              <span key="open"><i className="fas fa-bars" suppressHydrationWarning></i></span>
            )}
          </div>

          <ul className={click ? `${Styles.navMenu} ${Styles.active}` : Styles.navMenu}>
            <li className={Styles.navItem}>
              <Link href="/" className={`${Styles.navLinks} ${isActive("/") ? Styles.activeLink : ""}`}>
                Home
              </Link>
            </li>

            <NavbarDropdown 
              title="Societies" 
              items={menuGroups.societies} 
              isActive={pathname.startsWith("/committees") || pathname.startsWith("/societies")} 
            />

            <li className={Styles.navItem}>
              <Link href="/events" className={`${Styles.navLinks} ${isActive("/events") ? Styles.activeLink : ""}`}>
                Events
              </Link>
            </li>

            <NavbarDropdown 
              title="Hall Of Fame" 
              items={menuGroups.hallOfFame} 
              isActive={isActive("/awards") || isActive("/results")} 
            />

            <NavbarDropdown 
              title="Governance" 
              items={menuGroups.governance} 
              isActive={isActive("/council") || isActive("/elections") || isActive("/nominations")} 
            />

            <NavbarDropdown 
              title="More" 
              items={menuGroups.more} 
              isActive={isActive("/letter-to-you") || isActive("/faq")} 
            />
          </ul>
        </nav>

        {pathname === '/' && (
          <div className={`${Styles.announcementBannerScrollable}${isScrolled ? ` ${Styles.bannerHidden}` : ''}`}>
            <span className={Styles.bannerTitle}><strong>TSG Elections</strong> 2026</span>
            <div className={Styles.bannerButtonGroup}>
              <button className={Styles.bannerBtn} onClick={() => window.open('/data/media/files/results.pdf', '_blank')}>Results</button>
              <button className={`${Styles.bannerBtn} ${Styles.hideOnMobile}`} onClick={() => router.push('/elections')}>Details</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
