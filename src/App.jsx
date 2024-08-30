import "./App.css";
import { useRef } from "react";

import Header from "./header/header";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Contact from "./contact/contact";


function App(){

const profileRef = useRef(null);
const projectsRef = useRef(null);
const experienceRef = useRef(null);
const contactRef = useRef(null);

return <div className="rootDiv">
   <Header profileRef={profileRef} projectsRef = {projectsRef} experienceRef = {experienceRef} contactRef={contactRef}/>
   
   <div className="responsiveDiv">
   <Profile ref = {profileRef} contactRef = {contactRef}/>
   <Projects ref = {projectsRef}/>
   <Experience ref = {experienceRef}/>
   </div>

   <Contact ref = {contactRef}/>
</div>
}

export default App;