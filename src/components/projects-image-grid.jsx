/** @format */
import ProjectItem from "./project-item";
import classes from "../assets/styles/projects-image-grid.module.css";

export default function ProjectsImageGrid({ projects, modalImage }) {
  return (
    <ul className={classes.ul}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem modalImage={modalImage} {...project} />
        </li>
      ))}
    </ul>
  );
}
