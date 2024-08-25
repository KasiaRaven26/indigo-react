/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Button } from "../components/button";
import { Carousel } from "src/components/carousel";
import { image } from "src/data/projectsdata";
import classes from "../assets/styles/whatwedo.module.css";
export function WhatWeDo() {
  return (
    <div>
      <Header></Header>
      <main className={classes.WhatWeDoMain}>
        <section className={classes.section0}>
          <h1>WHAT WE DO</h1>
          <p>
            Indigo offers expert guidance, insights from the knowledge economy,
            strategic planning, informed decision-making support, and aims to be
            a trusted development partner.
          </p>
          <Button>MORE</Button>
        </section>
        <section className={classes.section1}>
          <div className={classes.container}>
            <div className={classes.rightContainer}></div>
          </div>
        </section>
        <section className={classes.section2}>
          <div className={classes.section2Wrapper1}>
            <h1>EXPERT GUIDANCE</h1>
            <p>
              Overcome development challenges with specialized advice. An
              experienced partner pulls everything together for optimal results
            </p>
            <h1>KNOWLEDGE ECONOMY INSIGHTS</h1>
            <p>
              Draw on sharp insights from the knowledge economy. Guide
              development, cristalize vision, and coordinate specialist skills
            </p>
            <h1>STRATEGIC PLANNING</h1>

            <p>
              Take a holistic approach, considering the big picture and local
              markets. Extract maximum value from your site with an attractive
              master plan and dive
            </p>
          </div>
          <div className={classes.section2Wrapper2}>
            <h1>INFORMED DECISION-MAKING</h1>
            <p>
              Simplify details for clear decision-making at every stage.
              Prioritaze your interests and objectives consistently
            </p>
            <h1>TRUSTED DEVELOPMENT PARTNER</h1>
            <p>
              Aim to be your exclusive source for development advice. Maximize
              project profitability through strategic partnerships
            </p>
          </div>
        </section>
        <section className={classes.WhatWeDoSection3}>
          <Carousel images={image} />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
