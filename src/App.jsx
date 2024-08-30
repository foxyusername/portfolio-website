import "./App.css";
import { useRef } from "react";

import Header from "./header/header.jsx";
import Profile from "./profile/Profile.jsx";
import Projects from "./projects/Projects.jsx";
import Experience from "./experience/Experience.jsx";
import Contact from "./contact/contact.jsx";


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