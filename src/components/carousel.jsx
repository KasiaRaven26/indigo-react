/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import classes from "../assets/styles/carousel.module.css";

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log(images[0]["image"]);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left} onClick={handlePrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="55"
          viewBox="0 96 960 960"
          width="25"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
      <div className={classes.carouselImages}>
        <h1>{images[currentIndex]["heading"]}</h1>

        <img key={currentIndex} src={images[currentIndex]["image"]} />

        <div className={classes.carouselIndicator}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${classes.dot} ${
                currentIndex === index ? classes.active : null
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div>
        <p>{images[currentIndex]["text"]}</p>
      </div>
      <div className={classes.right} onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="55"
          viewBox="0 96 960 960"
          width="25"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </div>
  );
}
