/** @format */
import { useContext, useState } from "react";
import AuthContext from "src/contexts/AuthContext";
import { users } from "src/data/users";
import { Footer } from "src/components/ui/footer";
import classes from "../assets/styles/requestaccess.module.css";
// import { Button } from "src/components/button";

export function RequestAccess() {
  const { user, isLoggedIn, setUser, login } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState({});

  const findUser = () => {
    const found = users.find((element) => element.userName === input.userName);
    if (found) {
      setShowPassword(true);
      setSignIn({ ...found });
    }
    console.log(signIn);
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
        setUser({ signIn });
        login();
      }
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
              <div className={classes.buttoncontainer}></div>
            </label>
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
