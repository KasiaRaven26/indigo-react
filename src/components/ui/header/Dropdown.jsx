/** @format */
import { NavLink } from "src/components/nav-link";
import { useContext } from "react";
import AuthContext from "src/contexts/AuthContext";
import classes from "../../../assets/styles/ui/header.module.css";
import { motion } from "framer-motion";

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

  // const AnimationProps = {
  //   initial: { opacity: 0, y: 0 },
  //   animate: { opacity: 1, y: 20 },
  // };
  return (
    <ul
      className={
        // dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
      }
    >
      {data.map((submenu, index) => (
        <motion.li
          key={index}
          className={classes.menuItems}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}        
          transition={{ duration: 1}}
        >
          <NavLink to={submenu.url}>
            {submenu.title}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}
