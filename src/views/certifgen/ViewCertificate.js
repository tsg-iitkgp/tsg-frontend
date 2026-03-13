"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import IITKGPLogo from "../../images/IIT_Kharagpur_Logo.png";
// import Trail from "../../images/WebsiteHackathon.jpg";
import "./ViewCertificate.css";
import Popper from "./Popper";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import axios from "axios";
import AppImage from "../../components/AppImage";
// html2pdf is imported dynamically to avoid SSR issues (uses `self`)

//https://gymkhana.iitkgp.ac.in/certifgen/view/NjYxYWFlOGM4ZjU0NTJjZmNlM2IxZjIx
const ViewCertificate = () => {
    if (typeof window !== "undefined") document.title = "Certificate | TSG";

    const params = useParams();
    const [certificateImage, setCertificateImage] = useState(undefined);
    const [certifData, setCertifData] = useState({});
    const [certifState, setCertifState] = useState(0);

    useEffect(() => {
        const getCertifData = async () => {
            try {
                const response = await axios.get(
                    `https://gymkhana.iitkgp.ac.in/api/certifgen/generateCertif/${params.id}`
                    // `http://localhost:5050/api/certifgen/generateCertif/${params.id}`
                );
                // console.log(response);
                setCertifState(response.status);
                setCertifData(response.data);
                setCertificateImage(response.data?.certificate);
                // console.log(certifState);
            } catch (error) {
                console.error("Error fetching certificate data:", error);
                setCertifState(500);
            }
        };

        getCertifData();
        // eslint-disable-next-line
    }, []);

    const downloadImage = () => {
        // Create a Blob from the base64 encoded image
        const byteCharacters = atob(certificateImage.split(",")[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/png" });

        // Create a download link and trigger the download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "certificate.png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadPdf = async () => {
        // Create an HTML element with the image
        const imageElement = document.createElement("img");
        imageElement.src = certificateImage;

        // Set the image dimensions
        imageElement.style.width = `${certifData.certifSize.width}px`;
        imageElement.style.height = `${certifData.certifSize.height}px`;

        // Create a container div and append the image to it
        const container = document.createElement("div");
        container.appendChild(imageElement);

        // Convert the container to a PDF
        const html2pdf = (await import("html2pdf.js")).default;
        html2pdf(container, {
            filename: "image.pdf", // Set the filename
            margin: 0, // Set the margin
            jsPDF: {
                unit: "px", // Set the measurement unit
                format: [
                    certifData.certifSize.width,
                    certifData.certifSize.height,
                ], // Set the page dimensions
                orientation: "landscape", // Set the orientation to landscape
            },
            html2canvas: {
                scale: 2, // Set the scale factor
            },
        });
    };

    return (
        <div className="certifpreview" style={{ maxHeight: "100%" }}>
            <a
                href="/"
                className="certifpreview_nav"
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100vw",
                    justifyContent: "center",
                    gap: "0.75rem",
                    margin: "2rem auto",
                    textDecoration: "none",
                    cursor: "pointer",
                }}
            >
                <AppImage
                    src="/data/media/images/general/gymkhanaLogo.png"
                    alt="gymk_logo"
                    className="gymk_logo"
                />
                <div style={{ textAlign: "centre" }}>
                    <h1>Technology Students&apos; Gymkhana</h1>
                    <h2 style={{ color: "white" }}>
                        Indian Institute of Technology Kharagpur
                    </h2>
                </div>
            </a>
            <div
                className="certifpreview_body"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80vw",
                    margin: "0 auto",
                }}
            >
                <h1 style={{ fontSize: "2rem", margin: "auto" }}>
                    CERTIFICATE
                </h1>
                {certifState === 404 && (
                    <>
                        <>
                            <h1
                                style={{
                                    fontSize: "2rem",
                                    margin: "auto",
                                    color: "white",
                                }}
                            >
                                CERTIFICATE NOT FOUND!
                            </h1>
                        </>
                    </>
                )}
                {certifState === 500 && (
                    <>
                        <>
                            <h1
                                style={{
                                    fontSize: "2rem",
                                    margin: "auto",
                                    color: "white",
                                }}
                            >
                                Error in fetching the certificate!
                            </h1>
                            <div className="error-msg">
                                <ol>
                                    <li>Try refreshing the page.</li>
                                    <li>
                                        If the issue persists, contact the
                                        Technology Coordinators (
                                        <a href="mailto:tech.coordi@iitkgp.ac.in">
                                            tech.coordi@iitkgp.ac.in
                                        </a>
                                        ) with the subject &quot;Error in viewing TSG
                                        certificate&quot;.
                                    </li>
                                </ol>
                            </div>
                        </>
                    </>
                )}
                {certifState === 200 && (
                    <>
                        <h1
                            style={{
                                fontSize: "1.5rem",
                                margin: "0.5rem auto 2rem",
                                color: "white",
                                // border: "1px solid white",
                                padding: "10px 20px",
                                textDecoration: "underline",
                            }}
                        >
                            {certifData.eventName}
                        </h1>
                        <div className="certificateimage">
                            <div
                                className="download_btns"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    padding: "1.25rem 0",
                                }}
                            >
                                <button
                                    className="downloadBtn"
                                    onClick={downloadImage}
                                >
                                    <i
                                        className="fa fa-picture-o"
                                        aria-hidden="true"
                                    ></i>
                                    Download as Image
                                </button>
                                <button
                                    className="downloadBtn"
                                    onClick={downloadPdf}
                                >
                                    <i
                                        className="fa fa-file-pdf-o"
                                        aria-hidden="true"
                                    ></i>
                                    Download as Pdf
                                </button>
                            </div>
                        </div>
                        <AppImage src={certificateImage} alt="Certificate" />
                        <Popper />
                    </>
                )}

                {certifState === 0 && (
                    <>
                        <h1
                            style={{
                                fontSize: "1.5rem",
                                margin: "0.5rem auto 2rem",
                                color: "white",
                                // border: "1px solid white",
                                padding: "10px 20px",
                                textDecoration: "underline",
                            }}
                        >
                            Certificate is loading...
                        </h1>
                    </>
                )}
                {/* <div className='certifpreview_share'>
                    <p className='certifshare_text'>Share it on:</p>
                    <div className='certifshare_links'>
                    <a href="#" className='certifshare_link'><i class="fa fa-facebook"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-twitter"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-instagram"></i></a>
                        <a href="#"className='certifshare_link'><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

export default ViewCertificate;
