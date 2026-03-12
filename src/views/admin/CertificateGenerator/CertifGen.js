"use client";
import "./CertifGen.css";
import Layout from "../../../components/Layouts/Layout";

import Login from "../../admin/Login";
import FileUpload from "../../../components/Admin/CertificateGenerator/FileUpload";
import ControlledCarousel from "../../../components/Admin/CertificateGenerator/ControlledCarousel";
import { useState, useEffect } from "react";
import DbAndLogout from "../DbAndLogout";

const jwt = require("jsonwebtoken");
const CertifGen = () => {
  if (typeof window !== "undefined") document.title = "Certificate Generator | TSG";
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [generate, setGenerate] = useState("Generate");
  const [generateStatus, setGenerateStatus] = useState("primary");

  useEffect(() => {
    if (id !== null) {
      setStatus(true);
    }
  }, [id]);
  const token = localStorage.getItem("authToken");
  const decodedToken = jwt.decode(token, { complete: true });
  const token_exp = decodedToken.payload.exp;
  if (token_exp * 1000 < Date.now()) {
    localStorage.clear();
    window.location.href = "/login";
  }
  return localStorage.getItem("authToken") ? (
    <Layout>
      <div className="certif-container">
        <div style={{ width: "95%" }}>
          <div style={{ float: "right" }}>
            <DbAndLogout />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="admin-title">CERTIFICATE GENERATOR</div>
        </div>
        <div className="mb-5">
          <a
            href="https://drive.google.com/file/d/1PljTpttt7XvHOBRdMH4cn07FBvwZggvz/view"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.2rem" }}
          >
            <button className="btn btn-primary">User Manual</button>
          </a>
        </div>
        <ControlledCarousel
          setId={setId}
          setMessage={setMessage}
          setGenerate={setGenerate}
          setGenerateStatus={setGenerateStatus}
        />
        <FileUpload
          id={id}
          status={status}
          setStatus={setStatus}
          message={message}
          setMessage={setMessage}
          generate={generate}
          setGenerate={setGenerate}
          generateStatus={generateStatus}
          setGenerateStatus={setGenerateStatus}
        />
      </div>
    </Layout>
  ) : (
    <Layout>
      <Login />
    </Layout>
  );
};

export default CertifGen;
