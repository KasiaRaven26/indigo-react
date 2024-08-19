/** @format */

import classes from "../../assets/styles/Header.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "../nav-link";
export function Header() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/who-we-are">WHO WE ARE</NavLink>
          </li>
          <li>
            <NavLink to="/what-we-do">WHAT WE DO</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img
                className={classes.logoIndigo}
                src="./images/logoindigo.png"
              ></img>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">SIGN IN</NavLink>
          </li>
          <li>
            <NavLink to="gr-eu">GR/EU</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
