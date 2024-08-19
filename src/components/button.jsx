import classes from "../assets/styles/button.module.css";
export function Button({ children }) {
  return (
    <div className={classes.wrapper}>
      <button className={classes.button}>{children}</button>
      <img className={classes.arrow} src="./images/arrow-right.png"></img>
    </div>
  );
}
