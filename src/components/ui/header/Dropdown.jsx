/** @format */
import { NavLink } from "src/components/nav-link";
import classes from "../../../assets/styles/ui/header.module.css";

export function Dropdown({ submenus, dropdown, setDropdown }) {
  //   const [dropdown, setDropdown] = useState(false);
  //   const handleMouseLeave = () => {
  //     setDropdown(!dropdown);
  //   };
  return (
    <ul
      className={
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
      }
      //   onMouseLeave={() => {
      //     handleMouseLeave();
      //   }}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className={classes.menuItems}>
          <NavLink to={submenu.url}>{submenu.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
