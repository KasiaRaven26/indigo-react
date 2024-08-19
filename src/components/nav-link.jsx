import { Link } from "react-router-dom";
import classes from "../assets/styles/nav-link.module.css";
export function NavLink({ children, to }) {
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
}
