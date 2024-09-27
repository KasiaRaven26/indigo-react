/** @format */

import classes from "../../assets/styles/sub-header.module.css";
export function SubHeader({ children }) {

function Paragraph() {
  return (
    <p>{children[1]}</p>
  )
}
  return (
    <header className={classes.subHeader}>
      <h1>{children[0]}</h1>
      {children.length > 0 ? <Paragraph /> : null}
      </header>
  );
}
