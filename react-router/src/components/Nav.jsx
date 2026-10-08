import { NavLink } from "react-router-dom";
//Estilo
import styles from "../styles/styleComponents/Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      {/*<Link to="/">Home</Link>
      <Link to="/about">About</Link>
     */}
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
