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
  const { register } = useContext(AuthContext);

  const navigate = useNavigate();

  const [input, setInput] = useState({});
  const [passwordError, setPasswordError] = useState({
    state: false,
    message: "Invalid password",
  });
  const [userNameError, setuserNameError] = useState({
    state: false,
    message: "Invalid username",
  });

  useEffect(() => {
    document.body.style.overflow = "";
    if (
      passwordError.state &
      userNameError.state &
      input.userName &
      input.password
    ) {
      register();
      navigate("/");
    }
  }, [input]);

  const handleSubmit = (event) => {
    event.preventDefault();

    findUser();
    validatePassword();
  };

  const findUser = () => {
    const userInDb = users.find(
      (element) => element.userName === input.userName
    );
    if (!input.username | userInDb) {
      setuserNameError((previousState) => ({
        ...previousState,
        state: true,
      }));
    } else {
      setuserNameError((previousState) => ({
        ...previousState,
        state: false,
      }));
    }
  };

  const validatePassword = () => {
    if (input.password != input.passwordConfirm && input.password) {
      setPasswordError((previousState) => ({
        ...previousState,
        state: true,
      }));
    } else {
      setPasswordError((previousState) => ({
        ...previousState,
        state: false,
      }));
    }
    console.log(passwordError);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  function ErrorList() {
    let errors = [];
    if (passwordError.state) {
      errors.push(passwordError.message);
    }
    if (userNameError.state) {
      errors.push(userNameError.message);
    }

    return (
      <ul className={styles.errorList}>
        {errors.map((error) => (
          <li key={error}>
            <p>{error}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  return (
    <>
      <div className={styles.registerPageContainer}>
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
              <div className={styles.submitButtonContainer}>
                <SubmitButton type="submit">SUBMIT</SubmitButton>
              </div>
              {(!userNameError.state && input.userName) ||
              (!passwordError.validPassword && input.password) ? (
                <ErrorList />
              ) : null}
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
