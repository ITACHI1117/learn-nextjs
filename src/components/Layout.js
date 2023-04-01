import React from "react";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}

export default Layout;
