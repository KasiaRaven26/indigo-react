/** @format */
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/ui/header.module.css";

export function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <ul className={classes.ulWrapper} onMouseLeave={() => setDropdown(false)}>
      <li className={classes.menuItems}>
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onMouseOver={() => setDropdown(true)}
            >
              <h3>{items.title}</h3>
            </button>
            {dropdown && <Dropdown submenus={items.submenu} dropdown={dropdown} />}
            {/* <Dropdown submenus={items.submenu} dropdown={dropdown} /> */}
          </>
        ) : (
          <NavLink to={items.url}>
            <h3>{items.title}</h3>
          </NavLink>
        )}
      </li>
    </ul>
  );
}
