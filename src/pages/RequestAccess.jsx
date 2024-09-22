/** @format */
import { useContext, useState } from "react";
import AuthContext from "src/contexts/AuthContext";
import { users } from "src/data/users";
import { Footer } from "src/components/ui/footer";
import classes from "../assets/styles/requestaccess.module.css";

export function RequestAccess() {
  const { setUser, login } = useContext(AuthContext);

  const [input, setInput] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState({});
  const [userNameAttempts, setUserNameAttempts] = useState(0);
  const [passwordAttempts, setPasswordAttempts] = useState(0);

  const findUser = () => {
    const found = users.find((element) => element.userName === input.userName);
    if (found) {
      setShowPassword(true);
      setSignIn({ ...found });
    }
    setUserNameAttempts((n) => n + 1);
  };

  const checkPassword = () => {
    const result = signIn.password === input.password;
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!showPassword) {
      findUser();
    }
    if (showPassword) {
      var result = checkPassword();
      if (result) {
        setUser({ ...signIn });
        login();
      }
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  function IncorrectPassword() {
    return <p>The username submitted was not found </p>;
  }

  return (
    <>
      <div className={classes.hero}>
        <div className={classes.formcontainer}>
          <img
            className={classes.logoIndigo}
            src="./images/logoindigo.png"
          ></img>
          <h1>EXCLUSIVE ACCESS</h1>
          <h2>User ID</h2>
          <form onSubmit={handleSubmit}>
            <label>
              User name:
              <input
                type="text"
                name="userName"
                value={input.userName || ""}
                onChange={handleChange}
              />
            </label>
            {userNameAttempts > 0 && !showPassword ? (
              <IncorrectPassword />
            ) : null}
            {showPassword ? (
              <label>
                Password:
                <input
                  type="text"
                  name="password"
                  value={input.password || ""}
                  onChange={handleChange}
                />
              </label>
            ) : null}

            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
