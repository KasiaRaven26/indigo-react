/** @format */

import { Dropdown } from "./Dropdown";
import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/ui/header.module.css";

export function MenuItems({ items }) {
  return (
    <li className={classes.MenuItems}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <NavLink to={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
}
