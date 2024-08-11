import classes from "../..//assets/styles/Footer.module.css"
export function Footer () {
    return (<footer> <ul>
        <li>
         COPYRIGHT © INDIGO  2024 
        </li>
        <li>
          PRIVACY POLICY 
        </li>
        <li>
          DEVELOPED BY 
        </li>
        <li><img className={classes.aklogo} src="./images/aklogo.png"></img>    </li>
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
      </ul></footer>
    )
}