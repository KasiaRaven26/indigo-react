/** @format */
// import classes from "../../assets/styles/modal.module.css";
import classes from "src/assets/styles/modal.module.css";
import { Button } from "../button";

// import { IoMdClose } from "react-icons/io";

export function Modal({ isModalOpen, modalContent, onClose }) {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section onClick={onClose} className={classes.modal}>
      <div className={classes.modalImage}>
        <img src={modalContent} alt="image" />
      </div>
    </section>
  );
}
