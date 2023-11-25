import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>Welcome to the Home Page, {props.username}!</h2>
      <p>This is a simple SPA built with React.</p>
    </div>
  );
};

export default Home;
