/** @format */

import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loginPath, setLoginPath] = useState("");

  const register = async () => {
    console.log();
    const response = await axios.post(
      "http://localhost:3001/users",
      JSON.stringify({
        userName: "user name 5",
        firstName: "John",
        lastName: "Smith",
        password: "pword",
        propertyAccess: false,
        consultingAccess: false,
      })
    );
    login();
    setIsAuthenticated(true);
  };

  const login = (user) => {
    console.log("logged in!!!!");
    setUser(user)
    setIsLoggedIn(true);
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isAuthenticated,
        register,
        setIsAuthenticated,
        setUser,
        login,
        logout,
        setLoginPath,
        loginPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
