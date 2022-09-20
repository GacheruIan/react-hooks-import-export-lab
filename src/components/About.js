import React from "react";



function About(user) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={user.image} alt="I made this" />
    </div>
  );
}

export default About
