import React,{useContext} from "react;" 
import { MyContext } from "./Mycontext";





function Home(){


    const {darkMode }= useContext(MyContext);
    
    return darkMode ?(
       <div  className="home"><h3>home</h3></div>
       ) : (
        <div className="home">
          <h1>home</h1>
        </div>
    
    
    ) 
    
    }
    export default Home