import { Header } from "src/components/ui/header";
import { Footer } from "src/components/ui/footer";
import classes from "../assets/styles/requestaccess.module.css"
import { Button } from "src/components/button";

export function RequestAccess() {
    return (
        <>
      <div className={classes.hero}>
        <div className={classes.formcontainer}>
            
            <img 
                className={classes.logoIndigo}
                src="./images/logoindigo.png"
              ></img>
              
              <h1>EXCLUSIVE ACCESS</h1>
              <h2>User ID</h2>
        <form>
       <label>
       <input type="text" value="Password" />
       <p>Remember my ID</p>
     </label>
     <div className={classes.buttoncontainer}>
            <Button>next</Button>
            </div>
          </form>
          
    </div>
      </div>
      <Footer></Footer>
 </>
    )
}