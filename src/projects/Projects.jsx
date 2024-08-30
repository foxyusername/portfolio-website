import "./projects.css";
import React from 'react';

const Projects = React.forwardRef((props,ref) => {


let array = [
  {image:'https://cdn.prod.website-files.com/5ee6e50fe4be3a81f496e5ad/5f97a5aeff01e7c57f1ac5ad_social%20media%20image%20specs%201920x1080.jpg',projectname:'Social Media',url:'https://luminawow.netlify.app'},  
  {image:'https://static.vecteezy.com/system/resources/previews/039/339/257/non_2x/new-technology-revolution-computer-science-lesson-programmer-occupation-job-it-coding-on-monitor-screen-abstract-source-code-background-technology-background-mobile-app-building-photo.jpg',projectname:'online code editor',url:'https://websitecoding.netlify.app'},  
  {image:'https://www.shutterstock.com/shutterstock/videos/1060138517/thumb/6.jpg?ip=x480',projectname:'Advanced Tic-Tac-Toe',url:'https://super-tictactoewow.netlify.app'},  
  {image:'https://wallpapers.com/images/hd/jarvis-4k-in-red-6yayjpbfe1a5tkek.jpg',projectname:'Search Assistant',url:'https://jarvis-google.netlify.app'},  

]

  return <div className="projectsMainDiv" ref={ref}>
    <h1>PROJECTS</h1>

    <section>
    {array.map((result,index)=>{
   return <div className="projectDiv" onClick={()=>{window.location.href = result.url}}>
    <img src={result.image} />
    <p>CLICK HERE TO VISIT</p>
    <div>
    <h2>{result.projectname}</h2>
    <h3>&#10132;</h3>
    </div>
   </div>
    })}
    </section>
  
  
  </div>
});

export default Projects