import './experience.css';
import React from 'react';

const Experience = React.forwardRef((props,ref) => {

let array = [
    {logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s',name:"Github Projects",description:"As a junior web developer I don't have any experience with Job. I learned everything myself without any paid courses. Best experience for me to point right now is my github portfolio with different websites in it. https://github.com/foxyusername "},
]

return <div className='experienceDiv' ref={ref}>
    <h1>EXPERIENCE</h1>

  <section id='experienceWrapper'>
{array.map((result,index)=>{
 return <section>
<div >
    <img src={result.logo} />
    <h3>{result.name}</h3>
</div>    
    
    <p>{result.description}</p>
  </section>
})}

  </section>
</div>
});

export default Experience;