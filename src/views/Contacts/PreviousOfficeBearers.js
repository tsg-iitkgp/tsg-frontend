import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/views/previous.module.css";
import senateData from "./senateData.json";
import ContactCard from "../../components/ContactCard";
import primg from "./../Contacts/Images/prf.png";
import CurrentOfficeBearers from "./CurrentOfficeBearers";
const years = [
    "2024-2025",
    "2023-2024",
    "2022-2023",
    "2021-2022",
    "2020-2021",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    "2016-2017",
    "2015-2016",
    "2014-2015",
    "2013-2014",
    "2012-2013",
    "2011-2012",
    "2010-2011",
    "2009-2010",
    "2008-2009",
    "2007-2008",
    "2006-2007",
    "2005-2006",
    "2004-2005",
    "2003-2004",
    "2002-2003",
    "2001-2002",
    "2000-2001",
    "1999-2000",
    "1998-1999",
    "1997-1998",
    "1996-1997",
    "1995-1996",
    "1994-1995",
    "1993-1994",
    "1992-1993",
    "1991-1992",
    "1990-1991",
    "1989-1990",
    "1988-1989",
    "1987-1988",
    "1986-1987",
    "1985-1986",
    "1984-1985",
    "1983-1984",
    "1982-1983",
    "1981-1982",
    "1980-1981",
    "1979-1980",
    "1978-1979",
    "1977-1978",
    "1976-1977",
    "1975-1976",
    "1974-1975",
    "1973-1974",
    "1972-1973",
    "1971-1972",
    "1970-1971",
    "1969-1970",
    "1968-1969",
    "1967-1968",
    "1966-1967",
    "1965-1966",
    "1964-1965",
    "1963-1964",
    "1962-1963",
    "1961-1962",
    "1960-1961",
    "1959-1960",
    "1958-1959",
    "1957-1958",
    "1956-1957",
    "1955-1956",
    "1954-1955",
    "1953-1954",
    "1952-1953",
];

export default function PreviousOfficeBearers() {
    const [currentTab, setCurrentTab] = useState("senate");
    const [currentYear, setCurrentYear] = useState("2024-2025");
    const startYear = parseInt(currentYear.split("-")[0], 10);
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

    let current;
    if (startYear > 2023) {
        current = <CurrentOfficeBearers year={currentYear} />;
    } else {
        current = (
            <>
                {(senateData[currentYear][currentTab]["profs"] !== undefined ||
                    currentTab === "specialRecog") && (
                        <>
                            <div className="cards">
                                {currentTab !== "specialRecog"
                                    ? senateData[currentYear][currentTab][
                                        "profs"
                                    ]?.map((winner) => (
                                        <div key="k-103" data-aos="zoom-in-up">
                                            <ContactCard
                                                name={winner.Name}
                                                imgSrc={primg}
                                                designation={winner.Post}
                                            />
                                        </div>
                                    ))
                                    : senateData[currentYear][currentTab].map(
                                        (winner) => (
                                            <div key="k-113" data-aos="zoom-in-up">
                                                <ContactCard
                                                    name={winner.Name}
                                                    imgSrc={"primg"}
                                                    designation={winner.Post}
                                                />
                                            </div>
                                        )
                                    )}
                            </div>
                        </>
                    )}
                {currentTab !== "specialRecog" && (
                    <>
                        <div className={Styles.senateCard}>
                            {senateData[currentYear][currentTab]["honours"].map(
                                (winner) => (
                                    <card key="k-130"
                                        className={Styles.card1}
                                        data-aos="zoom-in-up"
                                    >
                                        <p>
                                            <span
                                                style={{
                                                    color: "rgb(190, 190, 190)",
                                                }}
                                            >
                                                {" "}
                                                {winner.Post}
                                            </span>
                                            <br />

                                            {winner.Name}
                                        </p>
                                    </card>
                                )
                            )}
                        </div>
                    </>
                )}
            </>
        );
    }
    return (
        <div>
            <section className="awards content">
                <div className="tabs"></div>
                <div className={Styles.yearSelectWrapper}>
                    <div className={Styles.dropdown} ref={dropdownRef}>
                        <div
                            className={Styles.dropdownBtn}
                            onClick={() => setOpen(!open)}
                        >
                            {currentYear}{" "}
                            <span className={`${Styles.dropdownArrow} ${open ? Styles.open : ""}`}>
                                ▼
                            </span>
                        </div>

                        {open && (
                            <div className={Styles.dropdownMenu}>
                                {years.map((year) => (
                                    <div
                                        key={year}
                                        className={`${Styles.dropdownItem} ${year === currentYear ? Styles.dropdownItemActive : ""}`}
                                        onClick={() => {
                                            setCurrentYear(year);
                                            setOpen(false);
                                        }}
                                    >
                                        {year}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {current}
            </section>
        </div>
    );
}
