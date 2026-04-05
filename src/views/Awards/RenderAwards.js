import { useState, useEffect, useRef } from "react";
import AwardSection from "../../views/Awards/AwardSection";
import HonourSection from "../../views/Awards/HonourSection";

const years = [
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
];

export default function RenderAwardsFromDropdown({ option }) {
  const [year, setYear] = useState(years[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Year Dropdown */}
      <div className="awards-yearSelect">
        <div className="awards-dropdown" ref={dropdownRef}>
          <div
            className="awards-dropdown-btn"
            onClick={() => setOpen(!open)}
          >
            {year}{" "}
            <span className={`awards-dropdown-arrow ${open ? "open" : ""}`}>
              ▼
            </span>
          </div>

          {open && (
            <div className="awards-dropdown-menu">
              {years.map((y) => (
                <div
                  key={y}
                  className={`awards-dropdown-item ${y === year ? "awards-dropdown-item-active" : ""}`}
                  onClick={() => {
                    setYear(y);
                    setOpen(false);
                  }}
                >
                  {y}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated Content – re-mounts on year/tab change */}
      <div className="awards-contentTransition" key={`${year}-${option}`}>
        {/* Awards Section */}
        <AwardSection currentYear={year} currentTab={option} />

        {/* Honour Section */}
        {option !== "SPECIAL RECOGNITION" && (
          <HonourSection currentYear={year} currentTab={option} />
        )}
      </div>
    </>
  );
}
