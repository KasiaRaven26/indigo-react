/** @format */

import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer";
import { Button } from "../components/button";
import classes from "../assets/styles/contact.module.css";
export function Contact() {
  return (
    <div className={classes.contact}>
      <Header></Header>
      <main id={classes.contactMain}>
        <section>
          <p>
            Feel free to fill out the contact form below and one of our team
            members will get back to you as soon as possible.
          </p>
          <p>
            Alternatively, you can find our contact details listed below if you
            prefer to reach out to us directly.
          </p>

          <div className={classes.contactHeader}>
            <h1>CONTACT</h1>
            <h1>LET'S TALK</h1>
          </div>
        </section>
        <div className={classes.contactForm}>
          <form>
            <label>
              <input type="text" value="Name:" />
            </label>
            <label>
              <input type="text" value="Email:" />
            </label>
            <label>
              <input type="text" value="Contact Number:" />
            </label>
            <label>
              <input type="text" value="Message:" />
            </label>
            <Button type="submit">SUBMIT</Button>
          </form>
          <div className={classes.contactSection}>
            <h2>T:+30 210 12 34 567</h2>
            <h2>E:INFO@INDIGO.GR</h2>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
