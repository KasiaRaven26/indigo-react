/** @format */

import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer";
import { Overlay } from "../components/ui/overlay";
import classes from "../assets/styles/Homepage.module.css";

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
        <div className={classes.paragraph}>
          <h1>WHAT WE OFFER</h1>
          <h2>Development Consultancy</h2>
          <h2>Development Opportunities Sourcing</h2>
          <h2>Development Project Managment</h2>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraph}>
          <h2>Market Analysis</h2>
          <h2>Redevelopment-Development Project</h2>
          <h2>Property Managment</h2>
          <h2>Legal & Notarial services</h2>
        </div>
        <img
          className="section-2-image"
          src="../public/images/thirdpicture.jpg"
          alt=""
        />
      </section>
      <Footer></Footer>
    </>
  );
}
