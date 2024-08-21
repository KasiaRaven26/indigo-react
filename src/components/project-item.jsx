/** @format */

export default function ProjectItem({ image, modalImage }) {
  const handleClick = () => {
    modalImage(image);
  };
  return (
    <>
      <img
        style={{ width: "477px", height: "322px" }}
        src={image}
        alt=""
        onClick={handleClick}
      />
    </>
  );
}
