import classes from "../assets/styles/Header.module.css"
export function Header() {
    return ( 
    <header>
      <nav className={classes.nav}>
        <ul>
          <li>
            Who we are 
          </li>
          <li>
            What we do 
          </li>
          <li>
            Projects
          </li>
          <li><img src="./images/logoindigo.png"></img></li>
          <li>
            Contact
          </li>
          <li>
            Request access
          </li>
          <li>
            Sign in
          </li>
          <li>GR/EU
          </li>
        </ul>
      </nav>
   </header>
    )
  }