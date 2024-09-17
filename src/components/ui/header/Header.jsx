/** @format */

import classes from "../../../assets/styles/Header.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "src/components/nav-link";
import { Navbar } from "./navbar";
import { useEffect, useState } from "react";
export function Header({ className }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth < 767) {
      setShowMobileNavMenu(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowMobileNavMenu(false);
        setMobileNavOpen(false);
      } else if (window.innerWidth < 767) {
        setShowMobileNavMenu(true);
      }
      console.log("HSHASHSHSAHSAHS");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function Hamburger() {
    return (
      <div className={classes.hamburgerContainer}>
        <IoMenuOutline className="HamburgerMenu" size="80px" color="black" />
      </div>
    );
  }

  return (
    <header className={className}>
      <nav className={classes.nav}>
        <NavLink to="/">
          <img
            className={classes.logoIndigo}
            src="./images/logoindigo.png"
          ></img>
        </NavLink>
        {showMobileNavMenu ? <Hamburger /> : <Navbar />}
      </nav>
    </header>
  );
}
