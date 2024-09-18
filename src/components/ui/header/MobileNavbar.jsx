/** @format */

import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/Header.module.css";

export function MobileNavbar() {
  return (
    <div
      className={`${classes.mobileNavContainer} ${classes.mobileNavMenuActive}`}
    >
      <ul className={classes.mobileNavList}>
        <li>
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <h1>About us</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <h1>Services</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <h1>Contact-us</h1>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
