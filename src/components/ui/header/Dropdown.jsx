/** @format */
import classes from "../../../assets/styles/ui/header.module.css";

export function Dropdown({ submenus }) {
  return (
    <ul className={classes.dropdown}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
}
