import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Squash(props) {

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
                <table>
                  <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match (T1 v/s T2)</th><th key="k-th">T1 Score</th><th key="k-th">T2 Score</th><th key="k-th">Set 1</th><th key="k-th">Set 2</th><th key="k-th">Set 3</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 19) {
                      // console.log(val);
                      if (val[0] === "15th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-57">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 0) {
                                return (
                                  <td key="k-62">
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
                      else if (val[0] === "16th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-77">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 3) {
                                return (
                                  <td key="k-82">
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
                      } else if (val[0] === "17th Dec") {
                        rowspan = 2;
                        return (
                          <tr key="k-96">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 6) {
                                return (
                                  <td key="k-101">
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
                      } else if (val[0] === "19th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-115">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 8) {
                                return (
                                  <td key="k-120">
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
                      } else if (val[0] === "20th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-134">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 11) {
                                return (
                                  <td key="k-139">
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
                      } else if (val[0] === "21st Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-153">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 14) {
                                return (
                                  <td key="k-158">
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
                          <tr key="k-172">
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
                <table>
                  <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match (T1 v/s T2)</th><th key="k-th">T1 Score</th><th key="k-th">T2 Score</th><th key="k-th">Set 1</th><th key="k-th">Set 2</th><th key="k-th">Set 3</th></tr>
                  {data.data.map((val, key) => {
                    if (key >= 0 && key < 19) {
                      // console.log(val);
                      if (val[0] === "15th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-219">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 0) {
                                return (
                                  <td key="k-224">
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
                      else if (val[0] === "16th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-239">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 3) {
                                return (
                                  <td key="k-244">
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
                      } else if (val[0] === "17th Dec") {
                        rowspan = 2;
                        return (
                          <tr key="k-258">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 6) {
                                return (
                                  <td key="k-263">
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
                      } else if (val[0] === "19th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-277">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 8) {
                                return (
                                  <td key="k-282">
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
                      } else if (val[0] === "20th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-296">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 11) {
                                return (
                                  <td key="k-301">
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
                      } else if (val[0] === "21st Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-315">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 14) {
                                return (
                                  <td key="k-320">
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
                          <tr key="k-334">
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
