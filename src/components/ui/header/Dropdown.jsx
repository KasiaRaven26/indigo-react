/** @format */
import { NavLink } from "src/components/nav-link";
import { useContext } from "react";
import AuthContext from "src/contexts/AuthContext";
import classes from "../../../assets/styles/ui/header.module.css";

export function Dropdown({ submenus, dropdown, setDropdown }) {
  //   const [dropdown, setDropdown] = useState(false);
  //   const handleMouseLeave = () => {
  //     setDropdown(!dropdown);
  //   };

  const { isLoggedIn } = useContext(AuthContext);

  let data;
  if (isLoggedIn) {
    data = submenus.filter((item) => {
      return item.title !== "Login";
    });
  } else {
    data = submenus.filter((item) => {
      return item.title !== "Logout";
    });
  }
  return (
    <ul
      className={
        // dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
      }

    >
      {data.map((submenu, index) => (
        <li key={index} className={classes.menuItems}>
          <NavLink to={submenu.url}><h3>{submenu.title}</h3></NavLink>
        </li>
      ))}
    </ul>
  );
}
