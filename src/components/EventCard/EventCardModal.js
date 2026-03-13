import React from "react";
import "./EventCardModal.css"
import AppImage from "../AppImage";

const EventCardModal = (props) => {
    const eventData = props.eventViewStatus.eventData;
    let imgSrc = null;

    if (eventData.image) {
        imgSrc = `data:${eventData.imageMimeType};base64,${Buffer.from(eventData.image).toString('base64')}`;
    }

    return ( 
        <div className={`modal ${props.eventViewStatus.modalStatus ? 'show' : 'hide'}`} onClick={props.onClose}>  
            <div className="modal-content" onClick={e => e.stopPropagation()}> 
                <div className="modal-header"> 
                    <h4 className="modal-title">
                        {eventData.title}
                    </h4> 
                </div> 
                <div className="modal-body"> 
                    <h4 className="modal-date">
                        {eventData.dates}
                    </h4>
                    <p>
                        {eventData.description}
                    </p>
                    <AppImage 
                        src={imgSrc} 
                        alt={eventData.title}  
                        className="poster-img" />
                </div> 
                <div className="modal-footer"> 
                    <button 
                        onClick={props.onClose} 
                        className="btn btn-outline-danger">Close
                    </button> 
                </div> 
            </div> 
        </div>
    )
} 

export default EventCardModal;