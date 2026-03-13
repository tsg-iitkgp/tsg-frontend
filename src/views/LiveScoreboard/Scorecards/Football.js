import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Football(props) {

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
                                            return <tr key="k-56">
                                                {val.map((value, index) => {
                                                    if(index===0){
                                                        return <th key="k-th">{value}</th>
                                                    }
                                                    else{
                                                        return <td key="k-td">{value}</td>
                                                    }
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
                                <tr>
                                    {data.header.map((val, key) => {
                                        return <th key="k-th">{val}</th>
                                    })}
                                </tr>
                                <tbody key="k-100">
                                    {
                                        data.data.map((val, key) => {
                                            return <tr key="k-106">
                                                {val.map((value, index) => {
                                                    if(index===0){
                                                        return <th key="k-th">{value}</th>
                                                    }
                                                    else{
                                                        return <td key="k-td">{value}</td>
                                                    }
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
