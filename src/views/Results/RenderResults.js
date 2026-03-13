"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GC from "./data/GCdata";
import InterIITdata from "./data/InterIITdata";

const years = [
  "2024-25",
  "2023-24",
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
];

export default function RenderResultsFromDropdown({ option }) {
  const pathname = usePathname();

  const [year, setYear] = useState(years[0]);
  const [data, setData] = useState("");

  useEffect(() => {
    if (pathname === "/results/gc") {
      setData(GC);
    } else if (pathname === "/results/interiit") {
      setData(InterIITdata);
    }
  }, [pathname]);

  return (
    <>
      {/* Year Dropdown menu selector */}
      <div className="select">
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* SPORTS & GAMES */}
      {option === "SPORTS & GAMES" && (
        <>
          {/* MEN'S STANDINGS */}
          <h2 className="sectionHeading"> Men&apos;s Standings</h2>
          <div className="table-container" data-aos="zoom-in-up">
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Sport</th>
                  <th>
                    <span className="medal gold"></span> Gold
                  </th>
                  <th>
                    <span className="medal silver"></span> Silver
                  </th>
                  <th>
                    <span className="medal bronze"></span> Bronze
                  </th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                {data[String(year)]?.Sports.Male.map((item) => (
                  <tr key="k-70" id="overall">
                    <td>{item.Sport}</td>
                    <td>{item.Gold} </td>
                    <td>{item.Silver} </td>
                    <td>{item.Bronze} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* WOMEN'S STANDINGS */}
          <h2 className="sectionHeading"> Women&apos;s Standings</h2>
          <div className="table-container" data-aos="zoom-in-up">
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Sport</th>
                  <th>
                    <span className="medal gold"></span> Gold
                  </th>
                  <th>
                    <span className="medal silver"></span> Silver
                  </th>
                  <th>
                    <span className="medal bronze"></span> Bronze
                  </th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                {data[String(year)]?.Sports.Female.map((item) => (
                  <tr key="k-100" id="overall">
                    <td>{item.Sport}</td>
                    <td>{item.Gold} </td>
                    <td>{item.Silver} </td>
                    <td>{item.Bronze} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {/* SOCIAL & CULTURAL */}
      {option === "SOCIAL & CULTURAL" && (
        <>
          <div
            className="table-container"
            data-aos="zoom-in-up"
            style={{ paddingTop: "2rem" }}
          >
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Event Genre</th>
                  <th>
                    <span className="medal gold"></span> Gold
                  </th>
                  <th>
                    <span className="medal silver"></span> Silver
                  </th>
                  <th>
                    <span className="medal bronze"></span> Bronze
                  </th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                {data[String(year)]?.Socult.map((item) => (
                  <tr key="k-137" id="overall">
                    <td>{item.Event}</td>
                    <td>{item.Gold} </td>
                    <td>{item.Silver} </td>
                    <td>{item.Bronze} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {/* TECHNOLOGY */}
      {option === "TECHNOLOGY" && (
        <>
          <div
            className="table-container"
            data-aos="zoom-in-up"
            style={{ paddingTop: "2rem" }}
          >
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Event Genre</th>
                  <th>
                    <span className="medal gold"></span> Gold
                  </th>
                  <th>
                    <span className="medal silver"></span> Silver
                  </th>
                  <th>
                    <span className="medal bronze"></span> Bronze
                  </th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                {data[String(year)]?.Technology.map((item) => (
                  <tr key="k-174" id="overall">
                    <td>{item.Event}</td>
                    <td>{item.Gold} </td>
                    <td>{item.Silver} </td>
                    <td>{item.Bronze} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
