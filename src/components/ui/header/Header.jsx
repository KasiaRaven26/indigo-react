/** @format */

import classes from "../../../assets/styles/Header.module.css";
import { NavLink } from "src/components/nav-link";
import { Navbar } from "./navbar";
export function Header({ className }) {
  return (
    <header className={className}>
      <nav className={classes.nav}>
        <NavLink to="/">
          <img
            className={classes.logoIndigo}
            src="./images/logoindigo.png"
          ></img>
        </NavLink>
        <Navbar />
      </nav>
    </header>
  );
}
