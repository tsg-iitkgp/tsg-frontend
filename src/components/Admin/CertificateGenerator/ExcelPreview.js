import React from 'react'
import Styles from "../../../styles/components/contact-card.module.css";
import data from '../../../data/CertiTemplate.json'
import AppImage from "../../AppImage";

function ExcelPreview(props) {
    
    if (props.id !== null) {
        return (
            <>
                <div className={Styles.container} style={{width: '100%', margin: 'auto', backgroundColor: '#ffffffc7'}}>
                    <div className={Styles.imgbox} style={{width: '100%', margin: 'auto'}}>
                        <AppImage src={data.Templates[props.id].preview} alt={data.Templates[props.id].alt} style={{objectFit: 'contain'}}/>
                    </div>
                    <ul className={Styles.sociallinks}>
                        <li>
                            <a href={`${data.Templates[props.id].download_link}`} download rel="noreferrer">
                                <i className="fa fa-download"></i>
                            </a>
                        </li>
                    </ul >
                    <div className={Styles.details}>
                        <h2>Excel Sheet Template</h2>
                        <span>Certificate {parseInt(props.id) +1}</span>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ExcelPreview