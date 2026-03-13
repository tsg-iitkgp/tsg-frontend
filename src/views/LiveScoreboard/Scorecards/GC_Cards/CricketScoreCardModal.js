import { useEffect, useState } from "react";
import Styles from "../../../../styles/components/GC_Live/scorecard.module.css";

export default function CricketScoreCardModal({ matchData, onRequestClose, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzO4e7uFe8eegnR7S91mhxnejnw5B1E9hZq7kwSEqaCoqbqB554ouZZX9GARoHNkwE/exec?sheetName=${matchData.result_sheet}`)
            .then((response) => (response.json())).then((responseData) => {
                setModalData(responseData.data);
                setIsLoading(false);
            }).catch((err) => console.log(err));
    }, [matchData.result_sheet]);

    const filterData = (team, role, item) => {
        return (team === item.team && (role === item.role || 'all_rounder' === item.role))
    }
    if (props.isOpen) {
        return (
            <div className={Styles.container}>
                <div className={Styles.body}>
                    {
                        isLoading ? (
                            <div className={Styles.loader}>
                                <i class="fa fa-spinner fa-pulse fa-2x" aria-hidden="true" style={{ "color": "white", "textAlign": "center" }} />
                            </div>
                        ) : (
                            <>
                                <div>
                                    <div className={Styles.scoreCard}>
                                        <div className={Styles.heading}>
                                            {matchData.team1} Innings
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Batsman
                                                    </td>
                                                    <td>
                                                        R
                                                    </td>
                                                    <td>
                                                        B
                                                    </td>
                                                    <td>
                                                        4s
                                                    </td>
                                                    <td>
                                                        6s
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    modalData.filter((...props) => filterData(matchData.team1, 'batsman', ...props))
                                                        .map((item) => (
                                                            <tr key="k-59">
                                                                <td className={Styles.batsman}>
                                                                    {item.player_name} <br />
                                                                    <span>
                                                                        {item.player_description}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    {item.runs_taken}
                                                                </td>
                                                                <td>
                                                                    {item.balls}
                                                                </td>
                                                                <td>
                                                                    {item.fours}
                                                                </td>
                                                                <td>
                                                                    {item.sixes}
                                                                </td>
                                                            </tr>
                                                        ))
                                                }
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Extras
                                                    </td>
                                                    <td>
                                                        {matchData.team1_extras}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Total
                                                    </td>
                                                    <td>
                                                        {matchData.team1_score}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br />
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Bowler
                                                    </td>
                                                    <td>
                                                        O
                                                    </td>
                                                    <td>
                                                        R
                                                    </td>
                                                    <td>
                                                        W
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    modalData.filter((...props) => filterData(matchData.team2, 'bowler', ...props))
                                                        .map((item) => (
                                                            <tr key="k-121">
                                                                <td className={Styles.batsman}>
                                                                    {item.player_name}
                                                                </td>
                                                                <td>
                                                                    {item.overs}
                                                                </td>
                                                                <td>
                                                                    {item.runs_given}
                                                                </td>
                                                                <td>
                                                                    {item.wickets}
                                                                </td>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <br />
                                    <div className={Styles.scoreCard}>
                                        <div className={Styles.heading}>
                                            {matchData.team2} Innings
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Batsman
                                                    </td>
                                                    <td>
                                                        R
                                                    </td>
                                                    <td>
                                                        B
                                                    </td>
                                                    <td>
                                                        4s
                                                    </td>
                                                    <td>
                                                        6s
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    modalData.filter((...props) => filterData(matchData.team2, 'batsman', ...props))
                                                        .map((item) => (
                                                            <tr key="k-169">
                                                                <td className={Styles.batsman}>
                                                                    {item.player_name} <br />
                                                                    <span>
                                                                        {item.player_description}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    {item.runs_taken}
                                                                </td>
                                                                <td>
                                                                    {item.balls}
                                                                </td>
                                                                <td>
                                                                    {item.fours}
                                                                </td>
                                                                <td>
                                                                    {item.sixes}
                                                                </td>
                                                            </tr>
                                                        ))
                                                }
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Extras
                                                    </td>
                                                    <td>
                                                        {matchData.team2_extras}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Total
                                                    </td>
                                                    <td>
                                                        {matchData.team2_score}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br />
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className={Styles.batsman}>
                                                        Bowler
                                                    </td>
                                                    <td>
                                                        O
                                                    </td>
                                                    <td>
                                                        R
                                                    </td>
                                                    <td>
                                                        W
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    modalData.filter((...props) => filterData(matchData.team1, 'bowler', ...props))
                                                        .map((item) => (
                                                            <tr key="k-231">
                                                                <td className={Styles.batsman}>
                                                                    {item.player_name}
                                                                </td>
                                                                <td>
                                                                    {item.overs}
                                                                </td>
                                                                <td>
                                                                    {item.runs_given}
                                                                </td>
                                                                <td>
                                                                    {item.wickets}
                                                                </td>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>

            </div>
        )
    }
    else {
        return null;
    }
}
