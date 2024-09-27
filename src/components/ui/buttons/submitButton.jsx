/** @format */

import classes from "../../../assets//styles/ui//SubmitButton.module.css";
export function SubmitButton({ children }) {
  return (
    <div className={classes.wrapper}>
      <button className={classes.button} type="submit">
        {children}
      </button>
      <img className={classes.arrow} src="./images/arrow-right.png"></img>
    </div>
  );
}
