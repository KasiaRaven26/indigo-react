/** @format */
import { Link } from "react-router-dom";
import classes from "../assets/styles/button.module.css";
export function Button({ children, onClick, to, type }) {
  return (
    <Link className={classes.link}>
      <div className={classes.wrapper}>
        <button className={classes.button} type="submit">
          {children}
        </button>
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </div>
    </Link>
  );
}
