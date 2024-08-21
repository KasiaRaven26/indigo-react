/** @format */

import classes from "../assets/styles/button.module.css";
export function Button({ children, onClick }) {
  return (
    <div onClick={onClick} className={classes.wrapper}>
      <button className={classes.button}>{children}</button>
      <img className={classes.arrow} src="./images/arrow-right.png"></img>
    </div>
  );
}
