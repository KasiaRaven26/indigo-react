import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Button } from "../components/button";
import classes from "../assets/styles/whoweare.module.css";
export function WhoWeArePage() {
  return (
    <div>
      <Header></Header>
      <main className={classes.whoWeAreMain}>
        <section className={classes.section1}>
          <h1>WHO WE ARE</h1>
          <p>
            INDIGO was established in <span>2021</span>, seizes the opportune
            intersection of location and timing for real estate investment. Our
            mission is to streamline the investment journey for potential
            investors, saving them time, research efforts and the disappointment
            that can accompany such pursuits.
          </p>
          <p>
            With <span>20 years</span> of accumulated local knowledge and
            expertise our founder guides you towards informed decisions and
            profitable ventures.
          </p>
          <Button to="/">MORE</Button>
        </section>
        <section className={classes.section2}>
          <div className={classes.emmanouel}>
            <div>
              <h1>EMMANUEL PETRAKIS</h1>
              <p>director and founder</p>
            </div>
            <img
              className={classes.image}
              src="../public/images/emmanouel.jpg"
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
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
