import React, { useEffect, useState } from "react";
import ContactCard from "../../components/ContactCard.js";
import contactsData from "../../data/contactsData.js";
import Styles from "../../styles/views/contacts.module.css";
import axios from "axios";
import apiService from "../../apiService.js";

export default function CurrentOfficeBearers({ year }) {
    const [contacts, setContacts] = useState();
    const [refreshContacts, setRefreshContacts] = useState(true);

    const President = contactsData.data.find(
        (contact) => contact.Post === "President"
    );
    const Associate_President1 = contactsData.data.find(
        (contact) => contact.Post === "Associate President 1"
    );
    const Associate_President2 = contactsData.data.find(
        (contact) => contact.Post === "Associate President 2"
    );
    const HonoraryTreasurer = contactsData.data.find(
        (contact) => contact.Post === "Honorary Treasurer"
    );

    // const VicePresident = contactsData.data.find(
    //   (contact) => contact.Post === "Vice President"
    // );

    const thirdYearCouncil = contactsData.data.filter(
        (element) =>
            element.Category === "General Secretary" ||
            element.Category === "Nominated"
    );
    const secretaries = contactsData.data.filter(
        (element) => element.Category === "Secretary"
    );

    useEffect(() => {
        const getContacts = async () => {
            const response = await axios.get(
                `${apiService}/user/getContacts/${year}`
            );

            if (response.status === 200) {
                const contactsResp = response.data.contacts;

                // Reorder SECRETARY group: SECRETARY WEB first (Z->A), then SECRETARY DESIGN (Z->A), then remaining (Z->A)
                if (
                    contactsResp &&
                    contactsResp["SECRETARY"] &&
                    Array.isArray(contactsResp["SECRETARY"])
                ) {
                    const sortDescByName = (a, b) =>
                        (b.name || "").localeCompare(a.name || "");

                    const allSecretaries = [...contactsResp["SECRETARY"]];
                    const web = allSecretaries
                        .filter(
                            (s) =>
                                (s.por || "").toString().toUpperCase() ===
                                "SECRETARY WEB"
                        )
                        .sort(sortDescByName);
                    const design = allSecretaries
                        .filter(
                            (s) =>
                                (s.por || "").toString().toUpperCase() ===
                                "SECRETARY DESIGN"
                        )
                        .sort(sortDescByName);
                    const others = allSecretaries
                        .filter(
                            (s) =>
                                !["SECRETARY WEB", "SECRETARY DESIGN"].includes(
                                    (s.por || "").toString().toUpperCase()
                                )
                        )
                        .sort(sortDescByName);

                    contactsResp["SECRETARY"] = [...web, ...design, ...others];
                }

                setContacts(contactsResp);
            }
        };

        getContacts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshContacts]);

    return (
        <>
            <div className={Styles.contactsContainer}>
                <div>
                    <div data-aos="zoom-in-up">
                        <ContactCard
                            name={President.Name}
                            designation={President.Post}
                            facebook={President.Facebook}
                            linkedin={President.LinkedIn}
                            email={President.Email}
                            imgSrc={`/data/media/images/contacts/${President.img}`}
                        />
                    </div>
                </div>
                <div className={Styles.multipleCards}>
                    <div data-aos="zoom-in-up">
                        <ContactCard
                            name={Associate_President1.Name}
                            designation={Associate_President1.RollNo}
                            facebook={Associate_President1.Facebook}
                            linkedin={Associate_President1.LinkedIn}
                            email={Associate_President1.Email}
                            imgSrc={`/data/media/images/contacts/${Associate_President1.img}`}
                        />
                    </div>
                    <div data-aos="zoom-in-up">
                        <ContactCard
                            name={Associate_President2.Name}
                            designation={Associate_President2.RollNo}
                            facebook={Associate_President2.Facebook}
                            linkedin={Associate_President2.LinkedIn}
                            email={Associate_President2.Email}
                            imgSrc={`/data/media/images/contacts/${Associate_President2.img}`}
                        />
                    </div>
                </div>
                <div>
                    <div data-aos="zoom-in-up">
                        <ContactCard
                            name={HonoraryTreasurer.Name}
                            designation={HonoraryTreasurer.Post}
                            facebook={HonoraryTreasurer.Facebook}
                            linkedin={HonoraryTreasurer.LinkedIn}
                            email={HonoraryTreasurer.Email}
                            imgSrc={`/data/media/images/contacts/${HonoraryTreasurer.img}`}
                        />
                    </div>
                </div>
                {contacts && (
                    <>
                        <div>
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={contacts["VICE PRESIDENT"].name}
                                    designation={contacts["VICE PRESIDENT"].por}
                                    facebook={
                                        contacts["VICE PRESIDENT"].fb_link
                                    }
                                    linkedin={
                                        contacts["VICE PRESIDENT"].linkedin_link
                                    }
                                    email={contacts["VICE PRESIDENT"].email}
                                    imgSrc={contacts["VICE PRESIDENT"].image}
                                />
                            </div>
                        </div>

                        <div>
                            <div className={Styles.multipleCards}>
                                {contacts["THIRD YEAR COUNCIL"].map(
                                    (member, index) => {
                                        return (
                                            <div key="k-165" data-aos="zoom-in-up">
                                                <ContactCard
                                                    name={member.name}
                                                    designation={member.por}
                                                    facebook={member.fb_link}
                                                    linkedin={
                                                        member.linkedin_link
                                                    }
                                                    email={member.email}
                                                    imgSrc={member.image}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className={Styles.postHeading}>Secretaries</h2>
                            <div className={Styles.multipleCards}>
                                {contacts["SECRETARY"].map((member, index) => {
                                    return (
                                        <div key="k-188" data-aos="zoom-in-up">
                                            <ContactCard
                                                name={member.name}
                                                designation={member.por}
                                                facebook={member.fb_link}
                                                linkedin={member.linkedin_link}
                                                email={member.email}
                                                imgSrc={member.image}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
