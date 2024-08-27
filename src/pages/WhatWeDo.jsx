/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Carousel } from "src/components/carousel";
import { SubHeader } from "src/components/ui/sub-header";
import { image } from "src/data/projectsdata";
import classes from "../assets/styles/whatwedo.module.css";

export function WhatWeDo() {
  return (
    <>
      <Header></Header>
      <SubHeader>
        <span>WHAT WE DO</span>
        <span>
          Indigo offers expert guidance, insights from the knowledge economy,
          strategic planning, informed decision-making support, and aims to be a
          trusted development partner.
        </span>
      </SubHeader>
      <main className={classes.WhatWeDoMain}>
        <section className={classes.section0}>
          <h1>ELEVATE YOUR INVESTMENT WITH OUR EXPERTISE</h1>
          <img src="../public/images/projects2/whatwedopic/office5.jpg" />
        </section>
        <section className={classes.section1}>
          <h1>THE INDIGO ADVANTAGE</h1>
          <div className={classes.TheIndigoAdvantageSection}>
            <h3>INDUSTRY PARTNERSHIP</h3>
            <img
              className={classes.leftArrowSvg}
              src="../public/images/rightarrow.svg"
              alt=""
            />
            <p>
              Indigo Consulting has forged partnerships with renowned
              organizations and industry experts, solidifying our position as a
              trusted and respected player in the real estate and construction
              sectors.
            </p>
          </div>
          <div className={classes.TheIndigoAdvantageSection}>
            <h3>CLIENT SUCCESS STORIES</h3>
            <img
              className={classes.leftArrowSvg}
              src="../public/images/rightarrow.svg"
              alt=""
            />
            <p>
              Our clients' success stories and glowing testimonials showcase our
              ability to understand and exceed their expectations, fostering
              long-term relationships built on trust and satisfaction.
            </p>
          </div>
          <div className={classes.TheIndigoAdvantageSection}>
            <h3>MARKET INTELLIGENCE</h3>
            <img
              className={classes.leftArrowSvg}
              src="../public/images/rightarrow.svg"
              alt=""
            />
            <p>
              Our team diligently gathers and analyzes data on the Greek real
              estate market, empowering you to make informed decisions. Whether
              you're a seasoned investor or entering the market for the first
              time, our comprehensive reports and analyses offer a valuable
              roadmap to navigate the ever-changing landscape.
            </p>
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
        <section className={classes.section3}>
          <Carousel images={image} />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
