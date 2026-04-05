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
import ResultsDropdown from "./ResultsDropdown.js";
import AppImage from "../AppImage";

export default function Navbar() {
  // Custom Hook useNavbar for logic of navbarClass
  const [dropdown, setDropdown] = useState(false);
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notification, setNotification] = useState({
    badgeContent: 0,
    click: false,
  });
  const handleClick = () => setClick(!click);
  const highlightEvents = eventsData.filter((event) => event.isHighlight);
  let listClass;
  if (click) {
    listClass = `${Styles.navMenu} ${Styles.active}`;
  } else {
    listClass = `${Styles.navMenu}`;
  }

  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setNotification({ badgeContent: highlightEvents.length, click: false });
  }, [highlightEvents.length]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Notifcation Click Handlers
  const handleNotificationClick = () => {
    if (!notification.click) {
      setNotification({ badgeContent: 0, click: true });
    } else {
      setNotification({ badgeContent: 0, click: false });
    }
  };
  const handleNotiClick = () => {
    router.push("/events");
  };

  return (
    <>
      <div className={navbarClass}>
        <nav className={Styles.navbar}>
          {/* Navbar logo */}
          <div className={Styles.navLogo}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <AppImage
                src="/data/media/images/general/gymkhanaLogo.png"
                alt="KGP_logo"
                width={40}
                height={40}
              />
              <div className={Styles.logoText}>
                <span className={Styles.logoTextSmall}>TECHNOLOGY STUDENTS&apos;</span>
                <span className={Styles.logoTextLarge}>GYMKHANA</span>
              </div>
            </Link>
          </div>

          {/* Menu icon on smaller devices */}
          <div className={Styles.menuIcon} onClick={() => handleClick()}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} suppressHydrationWarning></i>
          </div>

          {/* Navlinks */}
          <ul className={listClass}>
            <li className={Styles.navItem}>
              <Link
                href="/societies"
                className={`${Styles.navLinks} ${isActive("/") ? Styles.acitveLink : ""}`}
              >
                Societies
              </Link>
            </li>

            {/* EVENTS */}
            <li className={Styles.navItem}>
              <Link
                href="/events"
                className={`${Styles.navLinks} ${isActive("/events") ? Styles.acitveLink : ""}`}
              >
                Events
              </Link>
            </li>

            {/* BLOGS */}
            <li className={Styles.navItem}>
              {
                <a href="https://tsgblog.iitkgp.ac.in/" target="_blank" rel="noreferrer">
                  Blogs
                </a>
              }
            </li>

            {/* AWARDS */}
            <li className={Styles.navItem}>
              <Link
                href="/awards"
                className={`${Styles.navLinks} ${isActive("/awards") ? Styles.acitveLink : ""}`}
              >
                Awards
              </Link>
            </li>

            {/* RESULTS */}
            <li
              className={`${Styles.navItem} ${Styles.results}`}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link
                href="#"
                className={`${Styles.navLinks} ${isActive("/results") ? Styles.acitveLink : ""}`}
                style={{ cursor: "default" }}
              >
                Results
              </Link>
              {dropdown && (
                <ResultsDropdown
                  handleClick={() => {
                    handleClick();
                  }}
                />
              )}
            </li>

            <li className={Styles.navItem}>
              <Link
                href="/letter-to-you"
                className={`${Styles.navLinks} ${isActive("/letter-to-you") ? Styles.acitveLink : ""}`}
              >
                Letter to you
              </Link>
            </li>

            {/* ELECTIONS */}
            <li className={Styles.navItem}>
              <Link
                href="/elections"
                className={`${Styles.navLinks} ${isActive("/elections") ? Styles.acitveLink : ""}`}
              >
                Elections
              </Link>
            </li>

            {/* NOMINATIONS */}
            <li className={Styles.navItem}>
              <Link
                href="/nominations"
                className={`${Styles.navLinks} ${isActive("/nominations") ? Styles.acitveLink : ""}`}
              >
                Nominations
              </Link>
            </li>

            {/* CONTACTS */}
            <li className={Styles.navItem}>
              <Link
                href="/contacts"
                className={`${Styles.navLinks} ${isActive("/contacts") ? Styles.acitveLink : ""}`}
              >
                Contacts
              </Link>
            </li>

            {/* FAQs */}
            <li className={Styles.navItem}>
              <Link
                href="/faq"
                className={`${Styles.navLinks} ${isActive("/faq") ? Styles.acitveLink : ""}`}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {pathname === '/' && (
          <div className={`${Styles.announcementBannerScrollable}${isScrolled ? ` ${Styles.bannerHidden}` : ''}`}>
            <span className={Styles.bannerTitle}><strong>TSG Elections</strong> 2026</span>
            <div className={Styles.bannerButtonGroup}>
              <button className={Styles.bannerBtn} onClick={() => router.push('/elections')}>Results</button>
              <button className={Styles.bannerBtn} onClick={() => router.push('/elections')}>Details</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
