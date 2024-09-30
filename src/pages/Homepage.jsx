/** @format */

import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer";
import { Overlay } from "../components/ui/overlay";
import { Button } from "../components/button";
import classes from "../assets/styles/Homepage.module.css";

export function Homepage() {
  return (
    <>
      <div className="hero">
        <Header className={classes.header}></Header>
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
          <h1>TITLE 1</h1>
          <h2>Development consultancy</h2>
          <h2>Development opportunities sourcing</h2>
          <h2>Development project managment</h2>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraph}>
          <h1>TITLE 2</h1>
          <h2>Market analysis</h2>
          <h2>Redevelopment-development project</h2>
          <h2>Property managment</h2>
          <h2>Legal & notarial services</h2>
        </div>
        <img
          className="section-2-image"
          src="../public/images/thirdpicture.jpg"
          alt=""
        />
      </section>
      {/* <section id="section-3">
        <h1>PROJECTS</h1>
        <div className={classes.imageContainer}>
          <img
            className={classes.leftArrowSvg}
            src="../public/images/leftarrow.svg"
            alt=""
          />
          <img
            className="section-3-image"
            src="../public/images/projects/entrance-final.jpg"
            alt=""
          />
          <img
            className="section-3-image"
            src="../public/images/projects/living-final2.jpg"
            alt=""
          />
          <img
            className={classes.leftArrowSvg}
            src="../public/images/rightarrow.svg"
            alt=""
          />
        </div>
        <Button to="/projects">ALL PROJECTS</Button>
      </section> */}

      <Footer></Footer>
    </>
  );
}
