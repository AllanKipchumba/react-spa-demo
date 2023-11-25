import React from 'react';

const About = (props) => {
  return (
    <div>
      <h2>About Us, {props.username}</h2>
      <p>This is the About Page. Learn more about our awesome SPA!</p>
    </div>
  );
};

export default About;
