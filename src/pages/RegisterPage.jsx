/** @format */
import { useContext, useState } from "react";
import AuthContext from "src/contexts/AuthContext";
import { Footer } from "src/components/ui/footer";
import { Header } from "src/components/ui/header/header";
import styles from "../assets/styles/pages/RegisterPage.module.css";
import headerStyles from "../assets/styles/Homepage.module.css";
import { users } from "src/data/users";

export function RegisterPage() {
  const { setUser, login } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = findUser();
    if (!user) {
      console.warn("User already exists");
    }
    console.log(errors);
    const password = validatePassword();
    if (!password) {
      console.warn("Passwords do not match");
    }
  };

  const findUser = () => {
    const userInDb = users.find(
      (element) => element.userName === input.userName
    );
    if (userInDb) {
      console.log(errors);

      // setErrors({ ...errors, invalidUserName: true });
      setErrors((previousState) => ({
        ...previousState,
        invalidUserName: true,
      }));
      return null;
    } else {
      // setErrors({ ...errors, invalidUserName: false });
      setErrors((previousState) => ({
        ...previousState,
        invalidUserName: false,
      }));
      setNewUser({ ...input, userName: input.userName });
      return newUser;
    }
  };

  const validatePassword = () => {
    if (input.password != input.passwordConfirm) {
      setErrors((previousState) => ({
        ...previousState,
        invalidPassword: true,
      }));
      return false;
    } else {
      setCheckedOne({ ...input, password: input.password });
      setErrors((previousState) => ({
        ...previousState,
        invalidPassword: false,
      }));
      return true;
    }
  };

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
      <div className={styles.hero}>
        <Header className={headerStyles.header}></Header>
        <div className={styles.formcontainer}>
          <img
            className={styles.logoIndigo}
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
            {errors.invalidUserName ? <p>User name already exists</p> : null}
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
              <label>Confirm password:</label>
              <input
                type="text"
                name="passwordConfirm"
                value={input.passwordConfirm || ""}
                onChange={handleChange}
              />
            </div>
            {errors.invalidPassword ? <p>Password invalid</p> : null}
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
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
