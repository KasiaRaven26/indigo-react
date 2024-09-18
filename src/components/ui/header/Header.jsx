/** @format */

import classes from "../../../assets/styles/Header.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "src/components/nav-link";
import { Navbar } from "./navbar";
import { useEffect, useState } from "react";
export function Header({ className }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerOpen = () => {
    if (hamburgerOpen) {
      setHamburgerOpen(false);
      document.body.style.overflow = "scroll";
    } else {
      setHamburgerOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    document.body.style.overflow = "scroll";
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
        setHamburgerOpen(false);
      } else if (window.innerWidth < 767) {
        setShowMobileNavMenu(true);
        console.log(showMobileNavMenu);
        setMobileNavOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function Hamburger() {
    //
    return (
      <div className={classes.hamburgerContainer}>
        <IoMenuOutline
          className={classes.hamburgerMenu}
          size="80px"
          color="black"
          onClick={handleHamburgerOpen}
        />
      </div>
    );
  }

  return (
    <>
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
      <div
        className={
          hamburgerOpen
            ? `${classes.mobileNavContainer} ${classes.mobileNavMenuActive}`
            : `${classes.mobileNavContainer}`
        }
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
    </>
  );
}
