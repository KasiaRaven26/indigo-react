import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import classes from "../assets/styles/projects.module.css";
export function Projects() {
  return (
    <div>
      <Header></Header>
      <section className={classes.projectsSection}>
        <h1>PROJECTS</h1>
        <ul>
          <li>
            <img src="/images/projects/entrance-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/dinning-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/bathroom-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/bedroom-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/pool-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/pool2-final.jpg"></img>
          </li>
          <li>
            <img src="images/projects/living-final.jpg"></img>
          </li>
          <img src="images/projects/living-final2.jpg"></img>
          <li>
            <img src="images/projects/kitchen-final.jpg"></img>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
}
