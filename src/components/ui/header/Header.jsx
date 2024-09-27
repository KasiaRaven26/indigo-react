/** @format */

import classes from "../../../assets/styles/Header.module.css";

import { NavLink } from "src/components/nav-link";
import { Navbar } from "./navbar";
import { MobileNavbar } from "./MobileNavbar";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { useEffect, useState } from "react";
export function Header({ className }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleHamburger = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = "scroll";
    } else {
      setMobileMenuOpen(true);
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
        setMobileMenuOpen(false);
      } else if (window.innerWidth < 767) {
        setShowMobileNavMenu(true);
        setMobileNavOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
          {showMobileNavMenu ? (
            <MobileMenuIcon openMobileNav={toggleHamburger} />
          ) : (
            <Navbar />
          )}
        </nav>
      </header>
      {mobileMenuOpen && <MobileNavbar />}
    </>
  );
}
