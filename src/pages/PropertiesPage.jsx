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
          <div className={classes.section1}>
            <h1>Φ 19</h1>
            <h2>GLYFADA</h2>
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
          <div>
            <h1>Σ 14</h1>
            <h2>VOULA</h2>
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
          <div>
            <h1> β 7</h1>
            <h2>KAVOURI</h2>
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
          <div>
            <h1> Δ 3</h1>
            <h2>VARKIZA</h2>
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
