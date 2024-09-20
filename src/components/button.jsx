/** @format */
import { Link } from "react-router-dom";
import classes from "../assets/styles/button.module.css";
export function Button({ children, onClick, to, type }) {
  return (
    <Link className={classes.link} to={to}>
      <div onClick={onClick} className={classes.wrapper}>
        <button className={classes.button} type={type}>
          {children}
        </button>
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </div>
    </Link>
  );
}
