import React from "react";
import "./LiveScoreboard.css";
import AppImage from "../../components/AppImage";

export default function SportsCard(props) {
    let sportsData= props.data;

    if(props.loading===true && (props.number)===sportsData.id){
        return(
            <div className="sports-card">
                <div className="icon-div">
                    <i className="fa fa-spinner fa-pulse fa-6x" aria-hidden="true" style={{"color": "white"}}/>
                    <h4 className="sport-name">Loading ...</h4>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="sports-card" onClick={()=> {
                props.show();
            }
                }>
                <div className="sports-box">
                    <div className="icon-div">
                        <span className="live-status">{sportsData.status}</span>
                        <AppImage src={sportsData.image} alt={sportsData.imgName} className="sport-img"/>
                        <h4 className="sport-name">{sportsData.name}</h4>
                    </div >
                </div>
            </div>
        );
    }
}
