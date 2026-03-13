import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Tabletennis(props) {

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
                  <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match</th><th key="k-th">Match 1</th><th key="k-th">Match 2</th><th key="k-th">Match 3</th><th key="k-th">Match 4</th><th key="k-th">Match 5</th><th key="k-th">Final Result</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 22) {
                      // console.log(val);
                      if (val[0] === "15th Dec") {
                        // console.log('yes')
                        rowspan = 2;
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
                      else if (val[0] === "16th Dec") {
                        rowspan = 2;
                        return (
                          <tr key="k-78">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 2) {
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
                      } else if (val[0] === "17th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-97">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 4) {
                                return (
                                  <td key="k-102">
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
                      else if (val[0] === "18th Dec") {
                        rowspan = 2;
                        return (
                          <tr key="k-117">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 7) {
                                return (
                                  <td key="k-122">
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
                          <tr key="k-136">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 9) {
                                return (
                                  <td key="k-141">
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
                      else if (val[0] === "20th Dec") {
                        rowspan = 3;
                        return (
                          <tr key="k-156">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 12) {
                                return (
                                  <td key="k-161">
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
                          <tr key="k-175">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 15) {
                                return (
                                  <td key="k-180">
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
                      } else if (val[0] === "22nd Dec") {
                        rowspan = 2;
                        return (
                          <tr key="k-194">
                            <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 18) {
                                return (
                                  <td key="k-199">
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
                          <tr key="k-213">
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
                    <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">Match</th><th key="k-th">Match 1</th><th key="k-th">Match 2</th><th key="k-th">Match 3</th><th key="k-th">Match 4</th><th key="k-th">Match 5</th><th key="k-th">Final Result</th></tr>
                    {data.data.map((val, key) => {
                      if (key >= 0 && key < 22) {
                        // console.log(val);
                        if (val[0] === "15th Dec") {
                          // console.log('yes')
                          rowspan = 2;
                          return (
                            <tr key="k-261">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 0) {
                                  return (
                                    <td key="k-266">
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
                          rowspan = 2;
                          return (
                            <tr key="k-281">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 2) {
                                  return (
                                    <td key="k-286">
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
                          rowspan = 3;
                          return (
                            <tr key="k-300">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 4) {
                                  return (
                                    <td key="k-305">
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
                        else if (val[0] === "18th Dec") {
                          rowspan = 2;
                          return (
                            <tr key="k-320">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 7) {
                                  return (
                                    <td key="k-325">
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
                            <tr key="k-339">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 9) {
                                  return (
                                    <td key="k-344">
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
                        else if (val[0] === "20th Dec") {
                          rowspan = 3;
                          return (
                            <tr key="k-359">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 12) {
                                  return (
                                    <td key="k-364">
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
                            <tr key="k-378">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 15) {
                                  return (
                                    <td key="k-383">
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
                        } else if (val[0] === "22nd Dec") {
                          rowspan = 2;
                          return (
                            <tr key="k-397">
                              <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                              {val.map((cell, index) => {
                                if (key !== 18) {
                                  return (
                                    <td key="k-402">
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
                            <tr key="k-416">
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
