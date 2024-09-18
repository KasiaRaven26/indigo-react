/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header/header";
import { WhoWeAreSub } from "src/components/Pages/WhoWeAre/who-we-are-sub";
import { WhatWeDoSub } from "src/components/Pages/WhoWeAre/what-we-do-sub";
import classes from "../assets/styles/WhoWeArePage.module.css";
export function WhoWeArePage() {
  return (
    <div>
      <Header></Header>
      <main>
        <section className={classes.section1}>
          <WhoWeAreSub />
        </section>
        <section className={classes.section2}>
          <WhatWeDoSub />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
