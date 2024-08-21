/** @format */
import ProjectItem from "./project-item";

export default function ProjectsImageGrid({ projects, modalImage }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem modalImage={modalImage} {...project} />
        </li>
      ))}
    </ul>
  );
}
