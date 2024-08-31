/** @format */

import classes from "../../assets/styles/Header.module.css";
import { NavLink } from "../nav-link";
export function Header({ className }) {
  return (
    <header className={className}>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.hoverEffect}>
            <NavLink to="/who-we-are">WHO WE ARE</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink to="/what-we-do">WHAT WE DO</NavLink>
          </li>
          <li className={classes.hoverEffect}>
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
          <li className={classes.hoverEffect}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink to="/request-access">REQUEST ACCESS</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}
