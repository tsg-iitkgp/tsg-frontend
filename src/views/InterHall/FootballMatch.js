import React from 'react';
import Styles from '../../styles/components/GC_Live/football.module.css';
import * as Icon from "react-feather";
import AppImage from "../../components/AppImage";


function FootballMatch({ data }) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.timer}>
        {data.timer}
      </div>
      <div className={Styles.header}>
        {data.time}, {data.location}
      </div>
      <div className={Styles.body}>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team1}
          </div>
          <div className={Styles.teamScore}>
            {data.team1_score}
          </div>
          <div className={Styles.scorers}>
            <AppImage alt="" src='/images/soccer-ball.png' />
            {data.team1_goalscorers}
          </div>
        </div>
        <div className={Styles.vs}>
          vs
        </div>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team2}
          </div>
          <div className={Styles.teamScore}>
            {data.team2_score}
          </div>
          <div className={Styles.scorers}>
            <AppImage alt="" src='/images/soccer-ball.png' />
            {data.team2_goalscorers}
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          {data.highlight_line}
        </div>
        <div className={Styles.bestPlayer}>
          <div className={Styles.iconContainer}>
            <Icon.Award size={32} className={Styles.awardIcon} />
            Best Player of the Match
          </div>
          <div className={Styles.bestPlayerName}>
            {data.best_player}
          </div>
        </div>
        <div className={Styles.formationBtnContainer}>
          <a className={Styles.formationBtn} href={data.formation_link} target='_blank'>
            Formation
          </a>
        </div>
      </div>
    </div>
  )
}


export default FootballMatch;