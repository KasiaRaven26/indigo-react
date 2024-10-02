/** @format */

import classes from "../../../assets//styles/ui//SubmitButton.module.css";
export function SubmitButton({ children }) {
  return (
    <>
      <button className={classes.button} type="submit">
        {children}
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </button>
    </>
  );
}
