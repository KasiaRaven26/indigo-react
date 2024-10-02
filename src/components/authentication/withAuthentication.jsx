/** @format */

import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "src/contexts/AuthContext";
import { NotAuthenticatedPage } from "src/pages/NotAuthenticatedPage";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn, isAuthenticated, setLoginPath } =
      useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    if (!isLoggedIn) {
      setLoginPath(path);
      navigate("/login");
    }

    // if (!isAuthenticated) {
    //   setLoginPath(path);
    //   return <NotAuthenticatedPage />;
    // }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
