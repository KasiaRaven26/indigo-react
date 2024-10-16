/** @format */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "src/components/nav-link";
import AuthContext from "src/contexts/AuthContext";
import { Footer } from "src/components/ui/footer";
import { Header } from "src/components/ui/header/header";
import { SubmitButton } from "src/components/ui/buttons/submitButton";
import { validateLogin } from "src/utils/authValidation";
import classes from "../assets/styles/requestaccess.module.css";
import headerStyles from "../assets/styles/Homepage.module.css";

export function RequestAccess() {
  const { login, loginPath, setLoginPath } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  useEffect(() => {
    return () => {
      setLoginPath(null);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user;
    try {
      user = await validateLogin(input.userName, input.password);
      if (user) {
        login(user);
        if (loginPath) {
          let navigateTo = loginPath;
          navigate(navigateTo);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const heading = () => {
    if (loginPath == "/consulting") {
      return "to access Indigo consulting";
    } else if (loginPath == "/properties") {
      return "to access Indigo properties";
    } else {
      return null;
    }
  };
  console.log(loginPath);
  return (
    <>
      <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
          <Header
            className={`${headerStyles.header} ${classes.header}`}
          ></Header>
          <div className={classes.formcontainer}>
            <img
              className={classes.logoIndigo}
              src="./images/logoindigo.png"
            ></img>
            <h1>Login {heading()}</h1>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
              <div className={classes.formItemContainer}>
                <label>User name:</label>
                <input
                  type="text"
                  name="userName"
                  value={input.userName || ""}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.formItemContainer}>
                <label>Password:</label>
                <input
                  type="text"
                  name="password"
                  value={input.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.submitButtonContainer}>
                <SubmitButton type="submit">SUBMIT</SubmitButton>
              </div>
            </form>
            <NavLink to="/register">
              <h2>Register with Indigo</h2>
            </NavLink>
            {error && <p>{error}</p>}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
