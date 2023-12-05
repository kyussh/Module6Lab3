import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div>
      <h1>Emoji Mood</h1>
      <span role="img" aria-label={isHappy ? 'Happy' : 'Sad'}>
        {isHappy ? '😃' : '😢'}
      </span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
