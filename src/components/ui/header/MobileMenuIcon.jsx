/** @format */

import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import classes from "../../../assets/styles/Header.module.css";
import { useState } from "react";

function Hamburger({ openMobileNav, setToggleBurger }) {
  const handleClick = () => {
    openMobileNav();
    setToggleBurger((val) => !val);
  };

  return (
    <div className={classes.hamburgerContainer}>
      <IoMenuOutline
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleClick}
      />
    </div>
  );
}

function Cross({ openMobileNav, setToggleBurger }) {
  const handleClick = () => {
    openMobileNav();
    setToggleBurger((val) => !val);
  };

  return (
    <div className={classes.hamburgerContainer}>
      <RxCross2
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleClick}
      />
    </div>
  );
}

export function MobileMenuIcon({ openMobileNav }) {
  const [toggleBurger, setToggleBurger] = useState(true);
  //   const openMobileNav = () => {};

  return (
    <>
      {toggleBurger ? (
        <Hamburger
          openMobileNav={openMobileNav}
          setToggleBurger={setToggleBurger}
        />
      ) : (
        <Cross
          openMobileNav={openMobileNav}
          setToggleBurger={setToggleBurger}
        />
      )}
    </>
  );
}
