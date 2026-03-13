import React, { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { css } from "@emotion/react";
import Styles from '../../../styles/components/GC_Live/highlight.module.css';
import CricketScoreCardModal from '../../LiveScoreboard/Scorecards/GC_Cards/CricketScoreCardModal';
import * as Icon from "react-feather";


const override = css`
  display: block;
  margin: auto;
`;


function Highlight({ sheetName = 'Highlight1' }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchData, setMatchData] = useState();

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=${sheetName}&isVertical=true`)
            .then((response) => (response.json())).then((responseData) => {
                setMatchData(responseData.data);
                setIsLoading(false);
            }).catch((err) => setIsLoading(false));
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const openModal = (index) => {
        setIsModalOpen(true);
        // console.log(isModalOpen)
    }

    return (
        <>
            {
                isLoading ? (
                    <div className={Styles.loader}>
                        <BarLoader color={'rgb(247, 28, 28)'} loading={isLoading} css={override} size={150} />
                    </div>
                ) : (
                    matchData && (
                        <div className={Styles.highlightCard}>
                            <div className={Styles.topContainer}>
                                <p className={Styles.date}>
                                    {matchData.timing}
                                </p>
                                <p className={Styles.description}>
                                    - {matchData.result_line} -
                                </p>
                            </div>
                            <div className={Styles.scoreContainer}>
                                <div className={Styles.teamContainer}>
                                    <div className={Styles.teamName}>
                                        {matchData.team1}
                                    </div>
                                    <div className={Styles.overs}>
                                        {matchData.team1_score}
                                    </div>
                                </div>
                                <div className={Styles.vs}>
                                    Vs
                                </div>
                                <div className={Styles.teamContainer}>
                                    <div className={Styles.teamName}>
                                        {matchData.team2}
                                    </div>
                                    <div className={Styles.overs}>
                                        {matchData.team2_score}
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.bottomContainer}>
                                {/* <p className={Styles.description}>
                                    - {matchData.result_line} -
                                </p> */}
                                <div className={Styles.bestPlayer}>
                                    <div className={Styles.iconContainer}>
                                        <Icon.Award size={32} className={Styles.awardIcon} />
                                        Best Player of the Match
                                    </div>
                                    <div className={Styles.bestPlayerName}>
                                        {matchData.best_player}
                                    </div>
                                </div>
                                <button className={Styles.scorecardBtn} onClick={openModal}>
                                    Score Card
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            <div className={Styles.modalContainer}>
                {
                    matchData && (
                        <CricketScoreCardModal matchData={matchData} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
                    )
                }
            </div>
        </>
    )
}

export default Highlight