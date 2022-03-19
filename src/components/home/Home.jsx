import React from 'react';
import Typewriter from "typewriter-effect";
import './home.css'

const Home = () => {
 
  return (
  <div className='home'>
        <Typewriter
              options={{
                strings: ['Welcome! to Admission Portal', 'Browse Instituitions!', 'Browse Courses!', 'Learn'],
                autoStart: true,
                loop: true,
              }}
        />
  </div>
  );
};

export default Home;
