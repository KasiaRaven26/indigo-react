/** @format */

import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loginPath, setLoginPath] = useState("");

  const login = () => {
    console.log("logged in!!!!");
    setIsLoggedIn(true);
  };
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isAuthenticated,
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
