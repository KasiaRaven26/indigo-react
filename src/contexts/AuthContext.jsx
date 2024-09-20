/** @format */

import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    console.log("logged in!!!!");
  };
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
