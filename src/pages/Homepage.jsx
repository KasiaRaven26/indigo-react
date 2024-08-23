import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Overlay } from "../components/ui/overlay";
import { Button } from "../components/button";
import classes from "../assets/styles/Homepage.module.css";

export function Homepage() {
  return (
    <>
      <div className="hero">
        <div className="hero-contents">
          <Header></Header>
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
          <p>DEVELOPMENT CONSULTANCY</p>
          <p>DEVELOPMENT OPPORTUNITIES SOURCING</p>
          <p>DEVELOPMENT PROJECT MANAGEMENT</p>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraph}>
          <p>MARKET ANALYSIS</p>
          <p>REDEVELOPMENT-DEVELOPMENT PROJECTS</p>
          <p>PROPERTY MANAGEMENT</p>
          <p>LEGAL&NOTARIAL SERVICES</p>
          <Button>MORE</Button>
        </div>
        <img
          className="section-2-image"
          src="../public/images/thirdpicture.jpg"
          alt=""
        />
      </section>
      <section id="section-3">
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
      </section>

      <Footer></Footer>
    </>
  );
}
