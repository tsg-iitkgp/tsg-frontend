import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Athletics(props) {

  var temp = null;
  var rowspan = " ";
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');

    const fetchdata = (url) => {
        axios.get(url)
            .then((response) => {
                let score = response.data;
                // // // console.log(`This is score ${score.data}`);
                temp = score.data;
            })
            .then((responseData) => {
                // // console.log("fetched again");
                setData(temp);
                setStyle('fa fa-refresh fa-2x');
                // console.log(style);
                temp = null;
                rowspan = " ";
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
                                        <tr><th key="k-th" colSpan="6">RUNNING</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>0 && key <31){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 6;
                                                        return(
                                                            <tr key="k-58">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==1){
                                                                            return(
                                                                                <td key="k-63">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 7;
                                                        return(
                                                            <tr key="k-78">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==7){
                                                                            return(
                                                                                <td key="k-83">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr key="k-98">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==14){
                                                                            return(
                                                                                <td key="k-103">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr key="k-118">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==19){
                                                                            return(
                                                                                <td key="k-123">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-137">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==24){
                                                                            return(
                                                                                <td key="k-142">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="20th Dec"){
                                                        rowspan = 4;
                                                        return(
                                                            <tr key="k-156">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==27){
                                                                            return(
                                                                                <td key="k-161">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-175">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">HURDLES</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>32 && key <41){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-198">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==33){
                                                                            return(
                                                                                <td key="k-203">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-218">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==35){
                                                                            return(
                                                                                <td key="k-223">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-238">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==37){
                                                                            return(
                                                                                <td key="k-243">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-258">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==39){
                                                                            return(
                                                                                <td key="k-263">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-277">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">LONG/HIGH/TRIPLE JUMP</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>42 && key <52){
                                                    // console.log(val);
                                                    if(val[0]==="16th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-300">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==43){
                                                                            return(
                                                                                <td key="k-305">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-320">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==45){
                                                                            return(
                                                                                <td key="k-325">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-340">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==48){
                                                                            return(
                                                                                <td key="k-345">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-360">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==50){
                                                                            return(
                                                                                <td key="k-365">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-379">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">POLE VAULT/ SHOTPUT/ DISCUS THROW/ JAVELIN THROW/ HAMMER THROW</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>53 && key <68){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-401">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==54){
                                                                            return(
                                                                                <td key="k-406">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-421">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==57){
                                                                            return(
                                                                                <td key="k-426">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-441">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==60){
                                                                            return(
                                                                                <td key="k-446">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-461">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==62){
                                                                            return(
                                                                                <td key="k-466">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-481">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==64){
                                                                            return(
                                                                                <td key="k-486">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-501">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==66){
                                                                            return(
                                                                                <td key="k-506">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-520">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">RELAY RACE</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>69 && key <82){
                                                    // console.log(val);
                                                    if(val[0]==="18th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-542">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==70){
                                                                            return(
                                                                                <td key="k-547">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-562">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==73){
                                                                            return(
                                                                                <td key="k-567">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="20th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-582">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==76){
                                                                            return(
                                                                                <td key="k-587">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-602">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==79){
                                                                            return(
                                                                                <td key="k-607">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-621">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
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
                                        <tr><th key="k-th" colSpan="6">RUNNING</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>0 && key <31){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 6;
                                                        return(
                                                            <tr key="k-670">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==1){
                                                                            return(
                                                                                <td key="k-675">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 7;
                                                        return(
                                                            <tr key="k-690">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==7){
                                                                            return(
                                                                                <td key="k-695">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr key="k-710">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==14){
                                                                            return(
                                                                                <td key="k-715">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr key="k-730">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==19){
                                                                            return(
                                                                                <td key="k-735">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-749">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==24){
                                                                            return(
                                                                                <td key="k-754">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="20th Dec"){
                                                        rowspan = 4;
                                                        return(
                                                            <tr key="k-768">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==27){
                                                                            return(
                                                                                <td key="k-773">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-787">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">HURDLES</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>32 && key <41){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-810">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==33){
                                                                            return(
                                                                                <td key="k-815">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-830">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==35){
                                                                            return(
                                                                                <td key="k-835">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-850">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==37){
                                                                            return(
                                                                                <td key="k-855">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-870">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==39){
                                                                            return(
                                                                                <td key="k-875">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-889">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">LONG/HIGH/TRIPLE JUMP</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>42 && key <52){
                                                    // console.log(val);
                                                    if(val[0]==="16th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-912">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==43){
                                                                            return(
                                                                                <td key="k-917">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-932">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==45){
                                                                            return(
                                                                                <td key="k-937">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-952">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==48){
                                                                            return(
                                                                                <td key="k-957">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-972">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==50){
                                                                            return(
                                                                                <td key="k-977">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-991">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">POLE VAULT/ SHOTPUT/ DISCUS THROW/ JAVELIN THROW/ HAMMER THROW</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>53 && key <68){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1013">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==54){
                                                                            return(
                                                                                <td key="k-1018">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1033">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==57){
                                                                            return(
                                                                                <td key="k-1038">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-1053">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==60){
                                                                            return(
                                                                                <td key="k-1058">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-1073">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==62){
                                                                            return(
                                                                                <td key="k-1078">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-1093">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==64){
                                                                            return(
                                                                                <td key="k-1098">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr key="k-1113">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==66){
                                                                            return(
                                                                                <td key="k-1118">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-1132">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th key="k-th" colSpan="6">RELAY RACE</th></tr>
                                        <tr><th key="k-th">Date</th><th key="k-th">Event</th><th key="k-th">1st</th><th key="k-th">2nd</th><th key="k-th">3rd</th><th key="k-th">4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>69 && key <82){
                                                    // console.log(val);
                                                    if(val[0]==="18th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1154">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==70){
                                                                            return(
                                                                                <td key="k-1159">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1174">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==73){
                                                                            return(
                                                                                <td key="k-1179">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="20th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1194">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==76){
                                                                            return(
                                                                                <td key="k-1199">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr key="k-1214">
                                                                <th key="k-th" rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==79){
                                                                            return(
                                                                                <td key="k-1219">
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr key="k-1233">
                                                               {val.map((cell, index)=>{
                                                                return(<td key="k-td">{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
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
