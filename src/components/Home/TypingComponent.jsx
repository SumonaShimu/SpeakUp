import React from 'react';
import TypewriterComponent from 'typewriter-effect';


const TypingComponent = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ['Expand Your World!', 'Embrace Diversity!', 'Unleash Potential!'],
        autoStart: true,
        loop: true,
        pauseFor: 2000
      }}
    />
  );
};

export default TypingComponent;