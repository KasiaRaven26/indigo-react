/** @format */

import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header/header";
import { NavLink } from "src/components/nav-link";

export function NotAuthenticatedPage() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <h1>You are not authenticated to use this page</h1>
      <h1>Please click the link below to register with Indigo</h1>
      <NavLink to="/register">Login</NavLink>
      <Footer></Footer>
    </div>
  );
}
