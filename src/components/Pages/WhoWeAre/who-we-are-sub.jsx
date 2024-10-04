import classes from "../../../assets/styles/whoweare.module.css";
import { SubHeader } from "src/components/ui/sub-header";
export function WhoWeAreSub() {
  return (
    <>
      <header className={classes.subHeader}></header>
      <section className={classes.section1}>
        <h1>WHO WE ARE</h1>
        <p>
          Indigo, established in <span>2021</span> by Emmanuel Petrakis, stands
          as a bespoke real estate consulting firm capitalizing on strategic
          investment opportunities. Boasting 25 years of experience and local
          knowledge.
        </p>
        <p>
          Indigo serves as a trusted service company to investors, providing
          expertise consulting in residential development. The company’s
          multi-disciplinary team, comprised of investment, finance and realty
          professionals, collaborates with reputable firms such as developers,
          architects, lawyers, notaries and more.
        </p>
        <p>
          Notably, the company specializes in consulting investors, both local
          and foreign, with a primary focus on residential development
          investments in the vibrant south of Athens.
        </p>
        <p>
          The clientele includes private investors and investment funds, both
          local and foreign, seeking tailored solutions for various real estate
          ventures. Indigo emphasizes in transparency, low-risk strategies, and
          a commitment to guide clients through every step of their investment
          projects in Greece.
        </p>
      </section>
      <section className={classes.section2}>
        <div className={classes.emmanouel}>
          <div className={classes.EmTitle}>
            <h1>EMMANUEL PETRAKIS</h1>
            <p>director and founder</p>
          </div>
          <img
            className={classes.image}
            src="../public/images/emmanuel1.jpg"
            alt=""
          />
        </div>
        <div className={classes.paragraphContainer}>
          <p>
            With more than <span>25 years</span> of extensive local expertise
            spanning diverse business sectors, I have cultivated a deep
            understanding of the investment landscape. 
          </p>
          <p>
            Over the last <span>18 years</span>, my focus has extended to
            encompass real estate.
          </p>
          <p>
            Having served as CEO in over <span>10 companies</span> within this
            quarter-century timeframe, I bring a wealth of knowledge and
            experience to the table.
          </p>
          <p>
            With <span>20 years</span> of accumulated local knowledge and
            expertise I guide you towards informed decisions and profitable
            ventures.
          </p>
        </div>
      </section>
    </>
  );
}
