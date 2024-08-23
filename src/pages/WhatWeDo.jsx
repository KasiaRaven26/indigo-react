import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Button } from "../components/button";
import classes from "../assets/styles/whatwedo.module.css";
export function WhatWeDo() {
  return (
    <div>
      <Header></Header>
      <main className={classes.main}>
        <section>
          <h1>WHAT WE DO</h1>
          <div className={classes.container}>
            <div className={classes.leftContainer}>
              <h2>DEVELOPMENT CONSULTANCY</h2>
              <img
                className={classes.image}
                src="../public/images/development.jpg"
                alt=""
              />
            </div>
            <div className={classes.rightContainer}>
              <p>
                Indigo offers expert guidance, insights from the knowledge
                economy, strategic planning, informed decision-making support,
                and aims to be a trusted development partner.
              </p>
              <Button>MORE</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
