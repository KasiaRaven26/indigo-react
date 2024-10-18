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
          <h1>Development Opportunities Sourcing</h1>
          <h1>Development Project Management</h1>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraphLeft}>
          <h1>Market Analysis</h1>
          <h1>Redevelopment-Development Project</h1>
          <h1>Property Management</h1>
          <h1>Legal & Notarial services</h1>
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
