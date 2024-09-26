/** @format */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import AuthContext from "src/contexts/AuthContext";
import { users } from "src/data/users";
import { Footer } from "src/components/ui/footer";
import { Header } from "src/components/ui/header/header";
import classes from "../assets/styles/requestaccess.module.css";
import headerStyles from "../assets/styles/Homepage.module.css";

export function RequestAccess() {
  const { setUser, login, loginPath, setLoginPath } = useContext(AuthContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({});

  const findUser = () => {
    const user = users.find((element) => element.userName === input.userName);
    return user;
  };

  const checkPassword = (user) => {
    const result = user.password === input.password;
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var user = findUser();

    var result = checkPassword(user);
    console.log(user);
    if (result) {
      login();
      // if (loginPath) {
      //   setLoginPath("");
      //   console.log(`/${loginPath}`);
      //   navigate(`${loginPath}`);
      // } else {
      //   navigate("/");
      // }
      navigate("/");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className={classes.hero}>
        <Header className={headerStyles.header}></Header>
        <div className={classes.formcontainer}>
          <img
            className={classes.logoIndigo}
            src="./images/logoindigo.png"
          ></img>
          <h1>Login</h1>
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
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
