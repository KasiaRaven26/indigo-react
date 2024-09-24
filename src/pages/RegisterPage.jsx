/** @format */
import { useContext, useState } from "react";
import AuthContext from "src/contexts/AuthContext";
import { Footer } from "src/components/ui/footer";
import classes from "../assets/styles/requestaccess.module.css";
import styles from "../assets/styles/pages/RegisterPage.module.css";

export function RegisterPage() {
  const { setUser, login } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("adam");
  };

  // const findUser = () => {
  //   const found = users.find((element) => element.userName === input.userName);
  //   if (found) {
  //     console.log("asdsad");
  //   }
  // };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "checkbox1") {
      const updatedCheckbox = !checkedOne;
      setCheckedOne(updatedCheckbox);
    }
    if (name === "checkbox2") {
      const updatedCheckbox = !checkedOne;
      setCheckedTwo(updatedCheckbox);
    }
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  return (
    <>
      <div className={classes.hero}>
        <div className={classes.formcontainer}>
          <img
            className={classes.logoIndigo}
            src="./images/logoindigo.png"
          ></img>
          <h1>Register with Indigo</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formItemContainer}>
              <label>User name:</label>
              <input
                type="text"
                name="userName"
                value={input.userName || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItemContainer}>
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={input.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItemContainer}>
              <label>Password:</label>
              <input
                type="text"
                name="passwordConfirm"
                value={input.passwordConfirm || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItemContainer}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formCheckboxContainer}>
              <label>Request access to Indigo Properties</label>
              <input
                name="checkbox1"
                type="checkbox"
                label="checkbox1"
                value={checkedOne}
                // checked={input.checkbox1 | ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formCheckboxContainer}>
              <label>Request access to Indigo Consulting</label>
              <input
                name="checkbox2"
                label="checkbox2"
                value={checkedTwo}
                type="checkbox"
                // checked={input.checkbox2 | ""}
                onChange={handleChange}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
