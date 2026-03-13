import "../../PopupStyles.css";
import AppImage from "../../AppImage";

const ResultsPreview = (props) => {
    let imgSrc = null;
    let resDescription = '';
    let hideImageDiv = 'd-none';
    // console.log(props);
    if (props.eventResults) {

        if (props.eventResults.data) {
            if (props.eventResults.data.eventResults[0].resImage) {
                imgSrc = `data:${props.eventResults.data.eventResults[0].resImageMimeType};base64,${Buffer.from(props.eventResults.data.eventResults[0].resImage).toString('base64')}`;
                hideImageDiv = 'd-block';
            }
            if (props.eventResults.data.eventResults[0].resDescription) {
                resDescription = props.eventResults.data.eventResults[0].resDescription;
            }
        }
    }

    // fetch(
    //     `${host}/admin/event/${props.index}/results`
    //   )
    //     .then((response) => {
    //         response.json()
    //         console.log(response);   
    //     })
    //     .then((responseData) => {
    //       setEvents(responseData.events);
    //       console.log(responseData.events);
    //     })
    //     .catch((err) => {
    //       console.log('the error is', err);
    //     }
    //     );

    // const url = `${host}/admin/event/${props.index}/results`;
    // useEffect(() => {
    // const getData = () => {
    // axios.get(url)
    // .then((response) => {
    // console.log(response);
    // setEvents(response.events);
    // })
    // .catch(err => console.log(`Error is ${err}.`));
    // }
    // })

    if (props.showRes === true) {
        return (
            <>
                <div className="popup" >
                    <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                        <div className="popup-heading">
                            <div className="props-title">
                                Results: {props.eventTitle}
                            </div>
                            <div className="popup-closeButton" onClick={props.disable} >
                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr />
                        <div className="popup-content">
                            <div className={`popup-content-image ${hideImageDiv}`} style={{
                                textAlign: "center",
                                margin: "0 auto"
                            }}>
                                <AppImage src={imgSrc} alt="Result Poster" style={{
                                    width: "auto"
                                }} />
                            </div>
                            <div className="popup-content text">
                                {/* <div className='content-date'>{props.content.dates}</div> */}
                                <div className='content-description'>{resDescription}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        // getData();
        return null;
    }
}

export default ResultsPreview;