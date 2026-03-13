"use client";

import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layouts/Layout";
import "./Dashboard.css";
import Logout from "../Logout";
import jwt from "jsonwebtoken";
import AppImage from "../../../components/AppImage";
export default function Dashboard() {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("role");
  const post = localStorage.getItem("post");
  const username = localStorage.getItem("username");
  const decodedToken = jwt.decode(token, { complete: true });
  const token_exp = decodedToken.payload.exp;
  if (token_exp * 1000 < Date.now()) {
    localStorage.clear();
    window.location.href = "/login";
  }
  return (
    <Layout>
      <div className="dashboard-screen">
        <div style={{ width: "95%" }}>
          <div style={{ float: "right" }}>
            <Logout />
          </div>
        </div>
        <div>
          <h1 className="mb-4">Admin Dashboard</h1>
        </div>
        <div className="admin-profile">
          <div className="profile-pic">
            <AppImage
              className="admin-pic"
              src="/data/media/images/general/gymkhanaLogo.png"
              alt="profile-pic"
            />
          </div>
          <div className="admin-info">
            <div className="adm-name-conti">
              <h3 className="admin-name" placeholder="User Name">
                {username}
              </h3>
            </div>
            <div className="admin-desc">
              <p className="admin-post post-refine" placeholder="User Post">
                {post}
              </p>
              <p className="admin-post" placeholder="User Role">
                {role}
              </p>
            </div>
          </div>
        </div>
        <div className="router-btns">
          <div className="routing-conti">
            <Link href="/admin/certificate" className="btn-route btn btn-primary">
              Certificate Generator
            </Link>
          </div>
          <div className="routing-conti">
            <Link href="/admin/events" className="btn-route btn btn-primary">
              Update Events
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
