import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main style={{ backgroundColor: "black", paddingBottom: "8rem" }}>{children}</main>
      <Footer />
    </div>
  );
}
