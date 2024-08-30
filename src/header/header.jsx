import { useEffect } from "react";
import "./header.css";

function Header({profileRef,projectsRef,experienceRef,contactRef}){
 return <div className="headerMainDiv">

  <section>
    <p onClick={()=>{profileRef.current.scrollIntoView({ behavior:"smooth" })}}>Home</p>
    <p onClick={()=>{projectsRef.current.scrollIntoView({ behavior:"smooth" })}}>Projects</p>
    <p onClick={()=>{experienceRef.current.scrollIntoView( {behavior:"smooth"} )}}>Experience</p>
    <p onClick={()=>{contactRef.current.scrollIntoView( {behavior:"smooth"} )}}>Contact</p>
  </section>
 </div>
}

export default Header;