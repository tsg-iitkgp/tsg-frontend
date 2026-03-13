import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Weightlifting(props) {

  var temp = null;
  var rowspan = 0;
  const [data, setData] = useState(null);
  const [style, setStyle] = useState('fa fa-refresh fa-2x');

  const fetchdata = (url) => {
    axios.get(url)
      .then((response) => {
        let score = response.data;
        // console.log(`This is score ${score.data}`);
        temp = score.data;
      })
      .then((responseData) => {
        // console.log("fetched again");
        setData(temp);
        setStyle('fa fa-refresh fa-2x');
        // console.log(style);
        temp = null;
        rowspan = 0;
      })
  }

  if (props.show === true && data === null) {
    return (
      <>
        <div className="popup" >
          <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
            <div className="popup-heading">
              <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                <i className={style} aria-hidden="true"></i>
              </div>
              <div className="props-title">
                {props.heading}
              </div>
              <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <hr />
            <div className="popup-content">
              <div className="popup-content text">
              <h3 style={{"color": "#f1c40f", "textAlign": "center"}}>Overall : Silver</h3><br />
                <table>
                  <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Player Name</th><th key="k-th">Snatch Lift 1</th><th key="k-th">Snatch Lift 2</th><th key="k-th">Snatch Lift 3</th><th key="k-th">CJ Lift 1</th><th key="k-th">CJ Lift 2</th><th key="k-th">CJ Lift 3</th><th key="k-th">Final Position</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 16) {
                      // console.log(val);
                      if (val[0] === "16th Dec") {
                        rowspan = 6;
                        return (
                          <tr key="k-58">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 0) {
                                return (
                                  <td key="k-63">
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      }
                      else if (val[0] === "17th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-78">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 6) {
                                return (
                                  <td key="k-83">
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } 
                      else {
                        return (
                          <tr key="k-97">
                            {val.map((cell, index) => {
                              return (<td key="k-td">{cell}</td>)
                            })}
                          </tr>
                        )
                      }
                    }
                    else {
                      return null;
                    }
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else if (props.show === true && data !== null) {
    return (
        <>
          <div className="popup" >
            <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
              <div className="popup-heading">
                <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                  <i className={style} aria-hidden="true"></i>
                </div>
                <div className="props-title">
                  {props.heading}
                </div>
                <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                  <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                </div>
              </div>
              <hr />
              <div className="popup-content">
                <div className="popup-content text">
                  <h3 style={{"color": "#f1c40f", "textAlign": "center"}}>Overall : Silver</h3><br />
                  <table>
                    <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Player Name</th><th key="k-th">Snatch Lift 1</th><th key="k-th">Snatch Lift 2</th><th key="k-th">Snatch Lift 3</th><th key="k-th">CJ Lift 1</th><th key="k-th">CJ Lift 2</th><th key="k-th">CJ Lift 3</th><th key="k-th">Final Position</th></tr>
                    {data.data.map((val, key) => {
                      if (key >= 0 && key < 16) {
                        // console.log(val);
                        if (val[0] === "16th Dec") {
                          rowspan = 6;
                          return (
                            <tr key="k-145">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 0) {
                                  return (
                                    <td key="k-150">
                                      {cell}
                                    </td>
                                  )
                                }
                                else {
                                  return null;
                                }
                              })}
                            </tr>
                          )
                        }
                        else if (val[0] === "17th Dec") {
                          rowspan = 3;
                          return (
                            <tr key="k-165">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 6) {
                                  return (
                                    <td key="k-170">
                                      {cell}
                                    </td>
                                  )
                                }
                                else {
                                  return null;
                                }
                              })}
                            </tr>
                          )
                        } 
                        else {
                          return (
                            <tr key="k-184">
                              {val.map((cell, index) => {
                                return (<td key="k-td">{cell}</td>)
                              })}
                            </tr>
                          )
                        }
                      }
                      else {
                        return null;
                      }
                    })}
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
