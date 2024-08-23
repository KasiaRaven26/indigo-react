/** @format */
import classes from "../assets/styles/project-item.module.css";
export default function ProjectItem({ image, modalImage }) {
  const handleClick = () => {
    modalImage(image);
  };
  return (
    <>
      <img
        className={classes.images}
        src={image}
        alt=""
        onClick={handleClick}
      />
    </>
  );
}
