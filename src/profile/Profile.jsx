import "./profile.css";
import React from "react";

const Profile = React.forwardRef((props,ref) => {
return <div className="profileMainDiv" ref={ref}>
  <img src="https://scontent.ftbs3-2.fna.fbcdn.net/v/t39.30808-6/456557319_1983041078820065_7542496239843671656_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rPDc6JVwjxUQ7kNvgEBfROf&_nc_ht=scontent.ftbs3-2.fna&_nc_gid=Axy1ZKfDIaTx1jR5TEyy8B_&oh=00_AYDvv7IokYiOWaobU5nvrqSl6IzPBqBdWvlTJ1ZXtQRGVA&oe=66ECAC3A" alt="my image" />

  <section>
    <h1>Web developer focused on improving my work daily</h1>
    <p>I am a junior full-stack web developer with experience in complex personal projects, specializing in both backend and frontend. My expertise is in delivering functional websites tailored to the client's needs.</p>
  </section>

<div className="btnDiv">
  <button id="GetInTouch" onClick={()=>{props.contactRef.current.scrollIntoView( {behavior:'smooth'} )}}>Get In Touch</button>
  <button id="DownloadCv">Download CV</button>
</div>

  <section>
    <h1>Experience with:</h1>
<div className="logosDiv">
   <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png" alt="js logo" />
   <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="css logo" />
   <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" alt="html logo" />
   <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="react logo" />
   <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="node logo" />
   <img src="https://cdn4.iconfinder.com/data/icons/logos-3/568/php-logo-512.png" alt="php logo" />
   <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="python logo" />
</div>
  
  </section>
</div>
});

export default Profile;
