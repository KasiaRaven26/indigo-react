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
          <p>
            INDIGO was established in 2021, seizes the opportune intersection of
            location and timing for real estate investment.
          </p>
          <p>
            Our mission is to streamline the investment journey for potential
            investors, saving them time, research efforts and the disappointment
            that can accompany such pursuits.
          </p>
          <p>
            With 20 years of accumulated local knowledge and expertise our
            founder guides you towards informed decisions and profitable
            ventures.
          </p>
          <Button>MORE</Button>
        </section>
        <section>
          <div>
            <h1>EMMANUEL PETRAKIS</h1>
            <p>director and founder</p>
          </div>
          <div className={classes.emmanouel}>
            <img
              className={classes.image}
              src="../public/images/emmanouel.jpg"
              alt=""
            />
            <div>
              <p>
                With more than 25 years of extensive local expertise spanning
                diverse business sectors, I have cultivated a deep understanding
                of the investment landscape. 
              </p>
              <p>
                Over the last 18 years, my focus has extended to encompass real
                estate.
              </p>
               
              <p>
                Having served as CEO in over 10 companies within this
                quarter-century timeframe, I bring a wealth of knowledge and
                experience to the table.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
