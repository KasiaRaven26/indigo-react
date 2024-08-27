/** @format */

import classes from "../../assets/styles/sub-header.module.css";
export function SubHeader({ children }) {
  return (
    <header className={classes.subHeader}>
      <h1>{children[0]}</h1>
      <p>{children[1]}</p>
    </header>
  );
}
