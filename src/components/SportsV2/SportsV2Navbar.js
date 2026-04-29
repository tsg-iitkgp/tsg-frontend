"use client";

import React from "react";
import Image from "next/image";
import Styles from "./sportsV2.module.css";
import gymkhanaLogo from "../../assets/gymkhanaLogo.png";
import {
  FaHome,
  FaTrophy,
  FaChartBar,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "Sports", href: "#", active: true },
  { label: "Events", href: "#" },
  { label: "GC Scores", href: "#" },
  { label: "Turf", href: "#" },
  { label: "Inter-IIT", href: "#" },
  { label: "Contacts", href: "#" },
];

const BOTTOM_NAV = [
  { label: "Home", href: "#", icon: FaHome, active: true },
  { label: "Sports", href: "#", icon: FaTrophy },
  { label: "Standings", href: "#", icon: FaChartBar },
  { label: "Events", href: "#", icon: FaCalendarAlt },
  { label: "Profile", href: "#", icon: FaUser },
];

export default function SportsV2Navbar() {
  return (
    <>
      <nav className={Styles.topNav}>
        <div className={Styles.brand}>
          <Image
            src={gymkhanaLogo}
            alt="Gymkhana Logo"
            className={Styles.brandLogo}
            priority
          />
          <span>GYMKHANA SPORTS</span>
        </div>
        <ul className={Styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${Styles.navLink} ${link.active ? Styles.navLinkActive : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={Styles.bottomNav}>
        {BOTTOM_NAV.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`${Styles.bottomNavItem} ${item.active ? Styles.bottomNavItemActive : ""}`}
            >
              <Icon className={Styles.bottomNavIcon} />
              <span className={Styles.bottomNavLabel}>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
