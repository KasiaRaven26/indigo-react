/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui//header/header";
import withAuthentication from "src/components/authentication/withAuthentication";
import classes from "../assets/styles/ui/PropertiesPage.module.css";
import { Button } from "src/components/button";

export const PropertiesPage = withAuthentication(() => {
  return (
    <>
      <Header></Header>
      <h1>Properties for Sale</h1>
      <section>
        <div className={classes.wrapper}>
          <div className={classes.alegreya}>
            <h2>Φ 19</h2>
            <h3>GLYFADA</h3>
            <div className={classes.iconWrapper}>
              <img
                className={classes.pdfIcon}
                src="../public/images/projects2/icon1.svg"
              />
            </div>
          </div>
          <img
            className={classes.image}
            src="../public/images/projects2/final5.jpg"
          ></img>
        </div>
        <div className={classes.wrapper2}>
          <div className={classes.alegreya}>
            <h2>Σ 14</h2>
            <h3>VOULA</h3>
            <img
              className={classes.pdfIcon}
              src="../public/images/projects2/icon1.svg"
            />
          </div>
          <img
            className={classes.image}
            src="../public/images/projects2/final4.jpg"
          ></img>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.alegreya}>
            <h2> β 7</h2>
            <h3>KAVOURI</h3>
            <img
              className={classes.pdfIcon}
              src="../public/images/projects2/icon1.svg"
            />
          </div>
          <img
            className={classes.image}
            src="../public/images/projects2/entrance5.jpg"
          ></img>
        </div>
        <div className={classes.wrapper2}>
          <div className={classes.alegreya}>
            <h2> Δ 3</h2>
            <h3>VARKIZA</h3>
            <img
              className={classes.pdfIcon}
              src="../public/images/projects2/icon1.svg"
            />
          </div>
          <img
            className={classes.image}
            src="../public/images/projects2/pool6.jpg"
          ></img>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
});
