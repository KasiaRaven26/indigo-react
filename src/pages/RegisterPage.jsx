/** @format */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "src/contexts/AuthContext";
import { Footer } from "src/components/ui/footer";
import { Header } from "src/components/ui/header/header";
import { SubmitButton } from "src/components/ui/buttons/submitButton";
import styles from "../assets/styles/pages/RegisterPage.module.css";
import headerStyles from "../assets/styles/Homepage.module.css";
import { users } from "src/data/users";

export function RegisterPage() {
  const { user, setUser, login, setIsAuthenticated, register } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [input, setInput] = useState({});
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (errors.invalidUserName == false && errors.invalidPassword == false) {
      login();
      setIsAuthenticated(true);
      register();
      navigate("/");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentUser = findUser();
    if (!currentUser) {
      console.warn("User already exists");
    }
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

      setErrors((previousState) => ({
        ...previousState,
        invalidUserName: true,
      }));
      return null;
    } else {
      setErrors((previousState) => ({
        ...previousState,
        invalidUserName: false,
      }));
      console.warn("Else", errors);
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
      console.warn("PASSWORD", errors);
      setErrors((previousState) => ({
        ...previousState,
        invalidPassword: false,
      }));
      console.warn("PASSWORD", errors);
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
  };

  function ErrorList() {
    let keys = Object.keys(errors);

    return (
      <ul className={styles.errorList}>
        {keys.map((error) => (
          <li key={error}>
            <p>{error}</p>
          </li>
        ))}
      </ul>
    );
  }

  console.log(errors);
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
            {/* <button type="submit" className={styles.submitButton}>
              Submit
            </button> */}
            <div className={styles.submitButtonContainer}>
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            </div>
            {errors.invalidPassword || errors.invalidUserName ? (
              <ErrorList />
            ) : null}
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
