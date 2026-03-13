import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Hockey(props) {

  var temp = null;
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');

    const fetchdata = (url) => {
        axios.get(url)
            .then((response) => {
                let score = response.data;
                // // console.log(`This is score ${score.data}`);
                temp = score.data;
            })
            .then((responseData) => {
                // console.log("fetched again");
                setData(temp);
                setStyle('fa fa-refresh fa-2x');
                // console.log(style);
                temp = null;
            })
    }

  if (props.show === true && data === null) {
    return (
        <>
            <div className="popup" >
                <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                    <div className="popup-heading">
                        <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => {fetchdata(props.url);setStyle('fa fa-refresh fa-spin fa-2x')}}>
                            <i className={style} aria-hidden="true"></i>
                        </div>
                        <div className="props-title">
                            {props.heading}
                        </div>
                        <div className="popup-closeButton" onClick={()=>{props.disable(); setData(null)}} >
                            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="popup-content">
                        <div className="popup-content text">
                            <table>
                                <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match (T1 v/s T2)</th><th key="k-th" colSpan="2">Half Time Score</th><th key="k-th" colSpan="2">Full Time Score</th></tr>
                                <tbody>
                                    {
                                        props.data.data.map((val, key) => {
                                            return <tr key="k-52">
                                                {val.map((value, index) => {
                                                    return <td key="k-td">{value}</td>
                                                })}
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
else if (props.show === true && data !== null) {
    // console.log(data);
    return (
        <>
            <div className="popup" >
                <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                    <div className="popup-heading">
                        <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => {fetchdata(props.url);setStyle('fa fa-refresh fa-spin fa-2x')}}>
                            <i className={style} aria-hidden="true"></i>
                        </div>
                        <div className="props-title">
                            {props.heading}
                        </div>
                        <div className="popup-closeButton" onClick={()=>{props.disable(); setData(null)}} >
                            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="popup-content">
                        <div className="popup-content text">
                            <table>
                                <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match (T1 v/s T2)</th><th key="k-th" colSpan="2">Half Time Score</th><th key="k-th" colSpan="2">Full Time Score</th></tr>
                                <tbody>
                                    {
                                        data.data.map((val, key) => {
                                            return <tr key="k-93">
                                                {val.map((value, index) => {
                                                    return <td key="k-td">{value}</td>
                                                })}
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
else {
    return null;
}
}
