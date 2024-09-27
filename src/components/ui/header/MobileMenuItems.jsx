/** @format */
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/Header.module.css";

export function MobileMenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className={classes.menuItems}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown(true)}
          >
            <h1>{items.title} </h1>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink to={items.url}>
          <h1>{items.title}</h1>
        </NavLink>
      )}
    </li>
  );
}
