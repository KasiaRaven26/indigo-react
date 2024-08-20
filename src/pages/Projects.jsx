/** @format */
import { useState } from "react";
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Modal } from "../components/ui/modal";
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
      <button onClick={openModal}>Toggle Modal</button>
      <Footer></Footer>
    </div>
  );
}
