import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Meta from "./Meta";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}

export default Layout;
