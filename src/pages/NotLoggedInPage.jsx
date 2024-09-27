/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header/header";
import { NavLink } from "src/components/nav-link";

export function NotLoggedInPage() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <h1>You are currently not logged in</h1>
      <h1>Please click the link below to login</h1>
      <NavLink to="/login">Login</NavLink>
      <Footer></Footer>
    </div>
  );
}
