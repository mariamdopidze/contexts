import React from "react";
import { MyContext } from "./Mycontext";
import { useContext } from "react";


function About(){


const {darkMode }= useContext(MyContext);

return darkMode ?(
   <div  className="about"><h3>about</h3></div>
   ) : (
    <div className="home-wrapper">
      <h3>about</h3>
    </div>


) 

}
export default About