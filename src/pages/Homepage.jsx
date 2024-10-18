/** @format */

import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer";
import { Overlay } from "../components/ui/overlay";
import classes from "../assets/styles/Homepage.module.css";
import { Button } from "src/components/button";

export function Homepage() {
  return (
    <>
      <div className="hero">
        <Header className={classes.header} />
        <div className="hero-contents">
          <Overlay />
        </div>
      </div>
      <section id="section-1">
        <img
          className="section-1-image"
          src="../public/images/secondpicture2.jpg"
          alt=""
        />
        <div className={classes.paragraphRight}>
          <h1>WHAT WE OFFER</h1>
          <div className={classes.links}>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Development Consultancy
            </a>
            {/* <Link
            className={classes.arrowLink}
            to={"/what-we-do#development-consultancy"}
          >
            Development Consultancy
          </Link> */}

            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Development Opportunities Sourcing
            </a>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Development Project Management
            </a>
          </div>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraphLeft}>
          <div className={classes.links}>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Market Analysis
            </a>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Redevelopment-Development Project
            </a>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Property Management
            </a>
            <a
              className={classes.arrowLink}
              href="/what-we-do#development-consultancy"
            >
              Legal & Notarial Services
            </a>
          </div>
        </div>
        <img
          className="section-2-image"
          src="../public/images/thirdpicture.jpg"
          alt=""
        />
      </section>
      <section id="section-3">
        <img
          className="section-3-image"
          src="../public/images/couple.jpg"
          alt=""
        />
        <div className={classes.paragraphRight}>
          <h1>YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE</h1>
          <Button>LET'S TALK</Button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
