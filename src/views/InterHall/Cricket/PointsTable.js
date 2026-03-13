import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";
import Styles from "../../../styles/components/GC_Live/pointsTable.module.css";
import * as Icon from "react-feather";

const override = css`
  display: block;
  margin: auto;
`;

function PointsTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [pointsGroup, setPointsGroup] = useState("A");
  const [pointsData, setPointsData] = useState();

  useEffect(() => {
    fetch(
      `https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=${"Points"}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        const filteredData = responseData.data.filter(
          (item) => item.group === pointsGroup
        );
        setPointsData(filteredData);
        // console.log(filteredData);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, [pointsGroup]);

  const openModal = (index) => {
    setIsModalOpen(true);
    // console.log(isModalOpen);
  };

  const changeGroup = (newGroup) => {
    setIsLoading(true);
    setPointsData({});
    setPointsGroup(newGroup);
  };

  return (
    <>
      {isLoading ? (
        <div className={Styles.loader}>
          <BarLoader
            color={"rgb(247, 28, 28)"}
            loading={isLoading}
            css={override}
            size={150}
          />
        </div>
      ) : (
        <div className={Styles.container}>
          <select
            defaultValue={pointsGroup}
            onChange={(e) => changeGroup(e.target.value)}
          >
            <option value={"A"}>Group A</option>
            <option value={"B"}>Group B</option>
            <option value={"C"}>Group C</option>
            <option value={"D"}>Group D</option>
          </select>
          {pointsData && (
            <table>
              <thead>
                <tr>
                  <td className={Styles.team}>Team</td>
                  <td className={Styles.points}>P</td>
                  <td className={Styles.points}>W</td>
                  <td className={Styles.points}>L</td>
                  <td className={Styles.points}>D</td>
                  <td className={Styles.points}>Points</td>
                  <td className={Styles.points}>NRR</td>
                </tr>
              </thead>
              <tbody>
                {pointsData.map((row) => (
                  <tr key="k-81">
                    <td className={Styles.team}>{row.team}</td>
                    <td className={Styles.points}>{row.p}</td>
                    <td className={Styles.points}>{row.w}</td>
                    <td className={Styles.points}>{row.l}</td>
                    <td className={Styles.points}>{row.d}</td>
                    <td className={Styles.points}>{row.points}</td>
                    <td className={Styles.points}>{row.nrr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
}

export default PointsTable;
