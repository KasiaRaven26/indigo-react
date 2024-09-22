/** @format */
import { useContext, useState } from "react";
import AuthContext from "src/contexts/AuthContext";
import { Footer } from "src/components/ui/footer";
import classes from "../assets/styles/requestaccess.module.css";

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
            <label>
              Password
              <input
                type="text"
                name="password"
                value={input.password || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="text"
                name="passwordConfirm"
                value={input.passwordConfirm || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Request access to Indigo Properties
              <input
                name="checkbox1"
                type="checkbox"
                label="checkbox1"
                value={checkedOne}
                // checked={input.checkbox1 | ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Request access to Indigo Consulting
              <input
                name="checkbox2"
                label="checkbox2"
                value={checkedTwo}
                type="checkbox"
                // checked={input.checkbox2 | ""}
                onChange={handleChange}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
