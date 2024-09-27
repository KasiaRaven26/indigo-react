/** @format */

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { NotLoggedInPage } from "src/pages/NotLoggedInPage";
import AuthContext from "src/contexts/AuthContext";
import { NotAuthenticatedPage } from "src/pages/NotAuthenticatedPage";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const { user, isLoggedIn, isAuthenticated, setLoginPath } =
      useContext(AuthContext);
    console.log(user, "User");
    console.log(isLoggedIn, "is logged in");
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    if (!isLoggedIn) {
      setLoginPath(path);
      return <NotLoggedInPage />;
    }
    if (!isAuthenticated) {
      setLoginPath(path);
      return <NotAuthenticatedPage />;
    }

    // useEffect(() => {
    //   console.log(user, "User");
    //   console.log(isLoggedIn, "is logged in");
    // });

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
