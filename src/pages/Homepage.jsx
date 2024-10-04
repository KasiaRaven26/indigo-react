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
      {/* <section id="section-1">
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
      </section> */}
      <section className={classes.homepageSection1}>
        <h1>ELEVATE YOUR INVESTMENT WITH OUR EXPERTISE</h1>
        <p>
          Indigo offers expert guidance, insights from the knowledge economy,
          strategic planning, informed decision-making support, and aims to be a
          trusted development partner.
        </p>
        <img src="../public/images/projects2/whatwedopic/office5.jpg" />
      </section>
      <section className={classes.homepageSection2}>
        <h1>THE INDIGO ADVANTAGE</h1>
        <p>
          Whether you're a seasoned investor or entering the market for the
          first time, our comprehensive reports and analyses offer a valuable
          roadmap to navigate the ever-changing landscape.
        </p>
        <div className={classes.section2Wrapper}>
          <div className={classes.section2SubWrapper}>
            {/* <FaHandshake size="80px" /> */}
            <h3>INDUSTRY PARTNERSHIP</h3>
            <img src="../public/images/projects2/whatwedopic/office5.jpg" />
            <p>
              Indigo Consulting has forged partnerships with renowned
              organizations and industry experts, solidifying our position as a
              trusted and respected player in the real estate and construction
              sectors.
            </p>
          </div>
          <div className={classes.section2SubWrapper}>
            <div className={classes.section2SubWrapperWrapper}>
              {/* <FaHandshake size="80px" /> */}
              <h3>CLIENT SUCCESS STORIES</h3>
            </div>
            <img src="../public/images/projects2/whatwedopic/office5.jpg" />
            <p>
              Our clients' success stories and glowing testimonials showcase our
              ability to understand and exceed their expectations, fostering
              long-term relationships built on trust and satisfaction.
            </p>
          </div>
          <div className={classes.section2SubWrapper}>
            {/* <FaHandshake size="80px" /> */}
            <h3>MARKET INTELLIGENCE</h3>
            <img src="../public/images/projects2/whatwedopic/office5.jpg" />
            <p>
              Our team diligently gathers and analyzes data on the Greek real
              estate market, empowering you to make informed decisions.
            </p>
          </div>
        </div>
      </section>
      <section className={classes.homepageSection3}>
        <h1>Section title</h1>
        <div className={classes.section3SubWrapper}>
          <div>
            <h2>INFORMED DECISION-MAKING</h2>
            <p>
              Simplify details for clear decision-making at every stage.
              Prioritaze your interests and objectives consistently
            </p>
            <h2>TRUSTED DEVELOPMENT PARTNER</h2>
            <p>
              Aim to be your exclusive source for development advice. Maximize
              project profitability through strategic partnerships
            </p>
            <h2>EXPERT GUIDANCE</h2>
            <p>
              Overcome development challenges with specialized advice. An
              experienced partner pulls everything together for optimal results
            </p>
            <h2>KNOWLEDGE ECONOMY INSIGHTS</h2>
            <p>
              Draw on sharp insights from the knowledge economy. Guide
              development, cristalize vision, and coordinate specialist skills
            </p>
            <h2>STRATEGIC PLANNING</h2>
            <p>
              Take a holistic approach, considering the big picture and local
              markets. Extract maximum value from your site with an attractive
              master plan and dive
            </p>
          </div>
          <img src="../public/images/projects2/whatwedopic/office5.jpg" />
        </div>
      </section>
      {/* <WhatWeDoSub /> */}
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
