/** @format */

import { menuItemsData } from "src/data/menu-items.data";
import { MenuItems } from "./MenuItems";
import AuthContext from "src/contexts/AuthContext";
import { useContext } from "react";
import classes from "../../../assets/styles//ui/header.module.css";

export function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  let data;
  if (isLoggedIn) {
    data = menuItemsData.filter((item) => {
      return item.title !== "Login";
    });
  } else {
    data = menuItemsData.filter((item) => {
      return item.title !== "Logout";
    });
  }

  return (
    <nav className={classes.desktopNav}>
      <ul className={classes.menus}>
        {data.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}
