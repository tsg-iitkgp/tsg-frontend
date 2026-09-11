import React, { useEffect, useState } from "react";
import ContactCard from "../../components/ContactCard.js";
import contactsData from "../../data/contactsData.js";
import Styles from "../../styles/views/contacts.module.css";
import axios from "axios";
import apiService from "../../apiService.js";

export default function CurrentOfficeBearers({ year = "2026-2027" }) {
    const [contacts, setContacts] = useState();
    const [refreshContacts] = useState(true);

    // Resolve year-specific professors, fallback to latest (2026-2027) or legacy contactsData.data
    const sessionData =
        contactsData[year] ||
        contactsData["2026-2027"] || { professors: contactsData.data || [] };
    const profs = sessionData.professors || contactsData.data || [];

    const President = profs.find(
        (contact) => contact.Post === "President"
    );
    const JointPresident = profs.find(
        (contact) => contact.Post === "Joint President"
    );
    const Associate_President1 = profs.find(
        (contact) =>
            contact.Post === "Associate President 1" ||
            contact.Post === "Associate President"
    );
    const Associate_President2 = profs.find(
        (contact) => contact.Post === "Associate President 2"
    );
    const HonoraryTreasurer = profs.find(
        (contact) => contact.Post === "Honorary Treasurer"
    );

    useEffect(() => {
        const getContacts = async () => {
            try {
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
            } catch (error) {
                console.error("Failed to fetch contacts for year:", year, error);
                setContacts(null);
            }
        };

        if (year) {
            getContacts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, refreshContacts]);

    return (
        <>
            <div className={Styles.contactsContainer}>
                {(President || JointPresident) && (
                    <div className={Styles.multipleCards}>
                        {President && (
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={President.Name}
                                    designation={President.Post}
                                    facebook={President.Facebook}
                                    linkedin={President.LinkedIn}
                                    email={President.Email}
                                    imgSrc={
                                        President.img
                                            ? `/data/media/images/contacts/${President.img}`
                                            : ""
                                    }
                                />
                            </div>
                        )}
                        {JointPresident && (
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={JointPresident.Name}
                                    designation={JointPresident.Post}
                                    facebook={JointPresident.Facebook}
                                    linkedin={JointPresident.LinkedIn}
                                    email={JointPresident.Email}
                                    imgSrc={
                                        JointPresident.img
                                            ? `/data/media/images/contacts/${JointPresident.img}`
                                            : ""
                                    }
                                />
                            </div>
                        )}
                    </div>
                )}
                {(Associate_President1 || Associate_President2) && (
                    <div className={Styles.multipleCards}>
                        {Associate_President1 && (
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={Associate_President1.Name}
                                    designation={
                                        Associate_President1.RollNo ||
                                        Associate_President1.Post
                                    }
                                    facebook={Associate_President1.Facebook}
                                    linkedin={Associate_President1.LinkedIn}
                                    email={Associate_President1.Email}
                                    imgSrc={
                                        Associate_President1.img
                                            ? `/data/media/images/contacts/${Associate_President1.img}`
                                            : ""
                                    }
                                />
                            </div>
                        )}
                        {Associate_President2 && (
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={Associate_President2.Name}
                                    designation={
                                        Associate_President2.RollNo ||
                                        Associate_President2.Post
                                    }
                                    facebook={Associate_President2.Facebook}
                                    linkedin={Associate_President2.LinkedIn}
                                    email={Associate_President2.Email}
                                    imgSrc={
                                        Associate_President2.img
                                            ? `/data/media/images/contacts/${Associate_President2.img}`
                                            : ""
                                    }
                                />
                            </div>
                        )}
                    </div>
                )}
                {HonoraryTreasurer && (
                    <div>
                        <div data-aos="zoom-in-up">
                            <ContactCard
                                name={HonoraryTreasurer.Name}
                                designation={HonoraryTreasurer.Post}
                                facebook={HonoraryTreasurer.Facebook}
                                linkedin={HonoraryTreasurer.LinkedIn}
                                email={HonoraryTreasurer.Email}
                                imgSrc={
                                    HonoraryTreasurer.img
                                        ? `/data/media/images/contacts/${HonoraryTreasurer.img}`
                                        : ""
                                }
                            />
                        </div>
                    </div>
                )}
                {contacts && (
                    <>
                        {contacts["VICE PRESIDENT"] && (
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
                        )}

                        {contacts["THIRD YEAR COUNCIL"] &&
                            contacts["THIRD YEAR COUNCIL"].length > 0 && (
                                <div>
                                    <div className={Styles.multipleCards}>
                                        {contacts["THIRD YEAR COUNCIL"].map(
                                            (member, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        data-aos="zoom-in-up"
                                                    >
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
                            )}

                        {contacts["SECRETARY"] &&
                            contacts["SECRETARY"].length > 0 && (
                                <div>
                                    <h2 className={Styles.postHeading}>
                                        Secretaries
                                    </h2>
                                    <div className={Styles.multipleCards}>
                                        {contacts["SECRETARY"].map(
                                            (member, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        data-aos="zoom-in-up"
                                                    >
                                                        <ContactCard
                                                            name={member.name}
                                                            designation={member.por}
                                                            facebook={
                                                                member.fb_link
                                                            }
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
                            )}
                    </>
                )}
            </div>
        </>
    );
}
