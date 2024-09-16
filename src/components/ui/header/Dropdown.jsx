/** @format */
import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/ui/header.module.css";

export function Dropdown({ submenus }) {
  return (
    <ul className={classes.dropdown}>
      {submenus.map((submenu, index) => (
        <li key={index} className={classes.menuItems}>
          <NavLink href={submenu.url}>{submenu.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
