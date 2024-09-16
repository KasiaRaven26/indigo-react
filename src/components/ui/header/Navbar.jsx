/** @format */

import { menuItemsData } from "src/data/menu-items.data";
import { MenuItems } from "./MenuItems";
import classes from "../../../assets/styles//ui/header.module.css";

export function Navbar() {
  return (
    <nav className={classes.desktopNav}>
      <ul className={classes.menus}>
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}
