import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Button } from "../components/button";
import classes from "../assets/styles/whoweare.module.css";
export function WhoWeArePage() {
  return (
    <div>
      <Header></Header>
      <main>
        <section className={classes.section1}>
          <h1>WHO WE ARE</h1>
          <h3>
            INDIGO was established in 2021, seizes the opportune intersection of
            location and timing for real estate investment.
          </h3>
          <h3>
            Our mission is to streamline the investment journey for potential
            investors, saving them time, research efforts and the disappointment
            that can accompany such pursuits.
          </h3>
          <h3>
            With 20 years of accumulated local knowledge and expertise our
            founder guides you towards informed decisions and profitable
            ventures.
          </h3>
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
            <h3>
              With more than 25 years of extensive local expertise spanning
              diverse business sectors, I have cultivated a deep understanding
              of the investment landscape. 
            </h3>
            <h3>
              Over the last 18 years, my focus has extended to encompass real
              estate.
            </h3>
             
            <h3>
              Having served as CEO in over 10 companies within this
              quarter-century timeframe, I bring a wealth of knowledge and
              experience to the table.
            </h3>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
