import { Link } from "react-router-dom";
import React from "react";
//Estilo
import styles from "../styles/styleComponents/Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
