import Modal from "react-modal";
import { useState } from "react";

export default function FacilityModal(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };
    const styles = {
        imgContainer: {
            width: '90%',
            border: '2px solid red',
            borderRadius: '8px',
            margin: '40px auto',
            textAlign: 'center',
            padding: '30px 20px',
            boxShadow: '0 7px 30px -10px rgba(150,170,180,0.8)',
            cursor: 'pointer'
        },
        tableHeader: {
            fontSize: '14px'
        },
        p: {
            fontSize: '18px',
            margin: 0
        },
        h1: {
            fontSize: '34px',
            padding: '20px 0',
            textAlign: 'center',
            margin: '0'
        }
    }

    return (
        <div className="image-container">
            <div
                style={styles.imgContainer}
                onClick={handleModalOpen}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/awards/person-placeholder.png";
                }}
            >
                <h1>
                    Booking of TSG Facilities
                </h1>
                <p>
                    Click Here &#10148;
                </p>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">

                <section className="awards" style={{ overflowY: 'scroll', maxWidth: '1400px' }}>
                    <h1 style={styles.h1}>Notification</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '15px 0px'
                    }}>
                        <p style={{ ...styles.p, textAlign: 'center', display: 'block' }}>
                            In accordance with the Administrative Approval from the competent authority dated Aug 24,
                            2021, Technology Students’ Gymkhana would like to open select facilities for practice and optimum use of leisure
                            time for Students, Faculty and Staff members who are staying inside the campus by following the Standard
                            Operating Procedure (SOPs) issued by the Institute for resumption of sports activities. <br /><br />

                            Registration form:
                            <a href="https://forms.gle/HWNwT7DZZUwyBdut5">
                                https://forms.gle/HWNwT7DZZUwyBdut5
                            </a>
                            <br /><br />
                            
                            Following facilities to be used after registration and submission of maintenance fees as per below fees structure:
                        </p>
                    </div>

                    <div className="table-container">
                        <table className="ongoing">
                            <thead>
                                <tr>
                                    <th className={styles.tableHeader}>
                                        Facility
                                    </th>
                                    <th className={styles.tableHeader}>
                                        One-time registration fees for STUDENTS <br />
                                        (Sep &apos;21 TO Dec &apos;21)*
                                    </th>
                                    <th className={styles.tableHeader}>
                                        One time registration fees for FACULTY
                                        AND STAFF <br />
                                        (Sep &apos;21 To Dec &apos;21)
                                    </th>
                                    <th className={styles.tableHeader}>
                                        Monthly Registration Fees FOR FACULTY
                                        AND STAFF <br />
                                        (Till
                                        Dec &apos;21)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.facilityData.map((eachFacility) => (
                                    <tr key="k-109">
                                        <td>
                                            {eachFacility.facility}
                                        </td>
                                        <td>
                                            {eachFacility.ors}
                                        </td>
                                        <td>
                                            {eachFacility.orfs}
                                        </td>
                                        <td>
                                            {eachFacility.mrfs}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>
                            *Rates are fixed after
                            discussing with students in
                            the online meeting
                            dated:12th Aug 2021,
                            minutes attached
                        </p>
                    </div>

                    <h3>
                        Slots Information
                    </h3>
                    <div className="table-container">
                        <table className="ongoing">
                            <thead>
                                <tr>
                                    <th className={styles.tableHeader}>
                                        Slot
                                    </th>
                                    <th className={styles.tableHeader}>
                                        Timing
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.slotsData.map((eachSlot) => (
                                    <tr key="k-152">
                                        <td>
                                            {eachSlot.title}
                                        </td>
                                        <td>
                                            {eachSlot.timings}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p>
                        * Indicates that 10 minutes will be required for sanitization.
                    </p>

                    <div>
                        <h3>
                            Standard Operating Procedure
                        </h3>
                        <ul style={styles.p}>
                            <li>
                                Resumption of sporting activities shall be in compliance with Institute and Government guidelines (Time to
                                Time) on health, social distancing and hygiene to ensure safety of all stakeholders.
                            </li>
                            <li>
                                Resumption of sporting activities will be based on objective health information to ensure they are conducted
                                safely and do not risk increased COVID-19 local transmission rates.
                            </li>
                            <li>
                                All decisions about resumption of sporting activities must take place with careful reference to these principles
                                following close consultation with MOFHW
                            </li>
                            <li>
                                Resumption of sporting activity should take place in a staged fashion with an initial phase of small group (less than 10)
                                activities in a non-contact fashion while maintaining the social distancing.
                            </li>
                            <li>
                                The training facilities will be opened, cleaned and sanitized under the close supervision of respective TSG
                                personnel, who will be physically present 10 minutes prior to the session and leave post session after ensuring
                                proper sanitization of the arena.
                            </li>
                            <li>
                                Members are advised to strictly follow the guidelines issued by the government agencies and the institute time
                                to time pertaining to prevention of spread of COVID-19, and will be sole responsible for their health
                                conditions.
                            </li>
                            <li>
                                TSG will do its best to ensure hygiene of the training arena, but at any case the member cannot hold TSG or
                                any of its members responsible on or off the court.
                            </li>
                            <li>
                                Members will bring all their training kits, accessories, safety and preventive gears to the training zone.
                            </li>
                            <li>
                                Members must practice social distancing during his/her stay in the training arena.
                            </li>
                            <li>
                                The on-duty TSG personnel will have full right to allow or suspend the membership of any member,
                                depending upon his/her behavior during training.
                            </li>
                            <li>
                                The slots will be allotted by filling the Google forms for (September,2021 to December 2021) block for
                                students and (September,2021 to December,2021) block and monthly booking for faculty and staff members.
                            </li>
                        </ul>
                    </div>
                </section>

            </Modal>
        </div>
    );
}
