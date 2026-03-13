import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Badminton(props) {

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
                  <tr><th key="k-th">Date</th><th key="k-th">Match</th><th key="k-th"></th><th key="k-th">Set 1</th><th key="k-th">Set 2</th><th key="k-th">Set 3</th><th key="k-th">Results</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 79) {
                      // console.log(val);
                      if (key===0 || key===1) {
                        if(key===0){rowspan=7}
                        else if(key===1){rowspan=6};
                        return (
                          <tr key="k-58">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 0 && key!==1) {
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
                      else if (key===7 || key===8 || key===14) {
                        if(key===7){rowspan=11}
                        else if(key===8){rowspan=6}
                        else if(key===14){rowspan=4};
                        return (
                          <tr key="k-80">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 7 && key!==8 && key!==14) {
                                return (
                                  <td key="k-85">
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
                      }else if (key===18 || key===19 || key===25) {
                        if(key===18){rowspan=11}
                        else if(key===19){rowspan=6}
                        else if(key===25){rowspan=4};
                        return (
                          <tr key="k-101">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 18 && key!==19 && key!==25) {
                                return (
                                  <td key="k-106">
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
                       else if (key===29 || key===30 || key===36) {
                        if(key===29){rowspan=11}
                        else if(key===30){rowspan=6}
                        else if(key===36){rowspan=4};
                        return (
                          <tr key="k-123">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 29 && key!==30 && key!==36) {
                                return (
                                  <td key="k-128">
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
                      } else if (key===40 || key===41 || key===47) {
                        if(key===40){rowspan=11}
                        else if(key===41){rowspan=6}
                        else if(key===47){rowspan=4};
                        return (
                          <tr key="k-144">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 40 && key!==47 && key!==41) {
                                return (
                                  <td key="k-149">
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
                      } else if (key===51 || key===52 || key===58) {
                        if(key===51){rowspan=13}
                        else if(key===52){rowspan=6}
                        else if(key===58){rowspan=6};
                        return (
                          <tr key="k-165">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 51 && key!==52 && key!==58) {
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
                  <tr><th key="k-th">Date</th><th key="k-th">Match</th><th key="k-th"></th><th key="k-th">Set 1</th><th key="k-th">Set 2</th><th key="k-th">Set 3</th><th key="k-th">Results</th></tr>
                  {data.data.map((val, key) => {
                    if (key >= 0 && key < 79) {
                      // console.log(val);
                      if (key===0 || key===1) {
                        if(key===0){rowspan=7}
                        else if(key===1){rowspan=6};
                        return (
                          <tr key="k-232">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 0 && key!==1) {
                                return (
                                  <td key="k-237">
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
                      else if (key===7 || key===8 || key===14) {
                        if(key===7){rowspan=11}
                        else if(key===8){rowspan=6}
                        else if(key===14){rowspan=4};
                        return (
                          <tr key="k-254">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 7 && key!==8 && key!==14) {
                                return (
                                  <td key="k-259">
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
                      }else if (key===18 || key===19 || key===25) {
                        if(key===18){rowspan=11}
                        else if(key===19){rowspan=6}
                        else if(key===25){rowspan=4};
                        return (
                          <tr key="k-275">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 18 && key!==19 && key!==25) {
                                return (
                                  <td key="k-280">
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
                       else if (key===29 || key===30 || key===36) {
                        if(key===29){rowspan=11}
                        else if(key===30){rowspan=6}
                        else if(key===36){rowspan=4};
                        return (
                          <tr key="k-297">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 29 && key!==30 && key!==36) {
                                return (
                                  <td key="k-302">
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
                      } else if (key===40 || key===41 || key===47) {
                        if(key===40){rowspan=11}
                        else if(key===41){rowspan=6}
                        else if(key===47){rowspan=4};
                        return (
                          <tr key="k-318">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 40 && key!==47 && key!==41) {
                                return (
                                  <td key="k-323">
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
                      } else if (key===51 || key===52 || key===58) {
                        if(key===51){rowspan=13}
                        else if(key===52){rowspan=6}
                        else if(key===58){rowspan=6};
                        return (
                          <tr key="k-339">
                            <td key="k-td" rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 51 && key!==52 && key!==58) {
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
                      else {
                        return (
                          <tr key="k-358">
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
