/** @format */
import { useState } from "react";
import { Header } from "../components/ui/header/Header";
import { Footer } from "../components/ui/footer";
import { Modal } from "../components/ui/modal";
import ProjectsImageGrid from "src/components/projects-image-grid";
import { propertData } from "src/data/projectsdata";

import classes from "../assets/styles/projects.module.css";
export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalImage = (imageChosen) => {
    openModal(imageChosen);
    console.log("The image chosen is:", imageChosen);
  };

  return (
    <div>
      <Header></Header>
      {isModalOpen ? (
        <Modal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      ) : null}
      <h1 className={classes.h1}>SAMPLES OF SERVICES</h1>
      <section className={classes.projectsSection}>
        <ProjectsImageGrid modalImage={modalImage} projects={propertData} />
      </section>
      <Footer></Footer>
    </div>
  );
}
