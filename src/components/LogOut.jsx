/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "src/contexts/AuthContext";

export default function LogOut() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/");
  });
}
