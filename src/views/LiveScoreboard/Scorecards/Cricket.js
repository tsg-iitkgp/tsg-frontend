import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Cricket(props) {

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
                                <tr>
                                    {props.data.header.map((val, key) => {
                                        return <th key="k-th">{val}</th>
                                    })}
                                </tr>
                                <tbody key="k-50">
                                    {
                                        props.data.data.map((val, key) => {
                                            if(key<8){
                                            return <tr key="k-57">
                                                {val.map((value, index) => {
                                                    return <td key="k-td">{value}</td>
                                                })}
                                            </tr>
                                            }
                                            else{
                                                return null;
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                            <div>
                                <br />
                                <h6 style={{"color": "#f1c40f"}}>LIVE BROADCAST : &emsp;
                                    <a href={props.data.data[11][1]} target="_blank" rel="noreferrer">Watch live match on MyySports</a>
                                </h6>
                            </div>
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
                                <tr>
                                    {data.header.map((val, key) => {
                                        return <th key="k-th">{val}</th>
                                    })}
                                </tr>
                                <tbody key="k-106">
                                    {
                                        data.data.map((val, key) => {
                                            if(key<8){
                                                return <tr key="k-113">
                                                    {val.map((value, index) => {
                                                        return <td key="k-td">{value}</td>
                                                    })}
                                                </tr>
                                                }
                                                else{
                                                    return null;
                                                }
                                    })}
                                </tbody>
                            </table>
                            <div>
                                <br />
                                <h6 style={{"color": "#f1c40f"}}>LIVE BROADCAST : &emsp;
                                    <a href={data.data[11][1]} target="_blank" rel="noreferrer">Watch live match on MyySports</a>
                                </h6>
                            </div>
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
