/** @format */
// import classes from "../../assets/styles/modal.module.css";
import classes from "src/assets/styles/modal.module.css";

import { IoMdClose } from "react-icons/io";

export function Modal({ isModalOpen, modalContent, onClose }) {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section className={classes.modal}>
      <article className={classes.modalContent}>
        <div className={classes.exitIcon}>
          <IoMdClose onClick={onClose} />
        </div>
        <main className={classes.modalMainContents}>
          <h5 className={classes.modalTitle}>{modalContent.title}</h5>
          <hr />
          <div className={classes.modalImage}>
            <img src={modalContent.image} alt="image" />
          </div>
          <p className={classes.modalText}>{modalContent.content}</p>
          <div className={classes.modalButton}>
            <button>{modalContent.buttonText}</button>
          </div>
        </main>
      </article>
    </section>
  );
}
