"use client";
import React from "react";
import Layout from "../components/Layouts/Layout";

export default function NotFound() {
  if (typeof window !== "undefined") document.title = "Page Not Found | TSG";
  return (
    <Layout>
      <div style={{ textAlign: "center", fontSize: 20 }}>
        OOPS! It's a 404 error.
      </div>
    </Layout>
  );
}
