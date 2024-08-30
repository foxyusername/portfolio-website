import "./contact.css";
import React from "react";

const Contact = React.forwardRef((props,ref) => {
return <div className="contactMainDiv" ref={ref}>
    <h1>Contact</h1>

    <p>Looking for a disciplined junior web developer? With my current skills and a strong commitment to learning even more, I’m ready to help bring your projects to life. Feel free to reach out —contact details below.</p>

    <h3>&#9993; jamaspishvilinika@icloud.com</h3>

  <div className="iconDiv">
 <a href="https://www.linkedin.com/in/ok-ok-a60a3a321/"><i class="fab fa-linkedin"></i></a>
 <a href="https://www.instagram.com/nika_jamaspishvili/"><i class="fab fa-instagram"></i></a>
 <a href="https://www.facebook.com/profile.php?id=100013425753100"><i class="fab fa-facebook"></i></a>
  </div>
</div>
});

export default Contact;