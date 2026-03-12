"use client";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import Login from "../Login";
import EventsUpdate from "../../../components/Admin/DataUpdate/EventsUpdate";
const jwt = require("jsonwebtoken");

const EventsUpdatePage = () => {
  if (typeof window !== "undefined") document.title = "Data Update | TSG";

  const token = localStorage.getItem("authToken");
  const decodedToken = jwt.decode(token, { complete: true });
  const token_exp = decodedToken.payload.exp;
  if (token_exp * 1000 < Date.now()) {
    localStorage.clear();
    window.location.href = "/login";
  }
  return localStorage.getItem("authToken") ? (
    <Layout>
      {/* <div style={{ width: '95%' }}>
                        <div style={{ float: 'right', 'margin-top': '5rem', 'margin-bottom': '-5rem' }}>
                            <Logout />
                        </div>
                    </div> */}
      <EventsUpdate />
    </Layout>
  ) : (
    <Layout>
      <Login />
    </Layout>
  );
};

export default EventsUpdatePage;
