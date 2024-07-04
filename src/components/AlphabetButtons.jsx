import React from 'react';

const AlphabetButtons = () => {
  const alphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div style={{textAlign:'center'}}>
      {alphabet.map((letter, index) => (
        <button key={index}  className="sort-btn">{letter}</button>
      ))}
    </div>
  );
}

export default AlphabetButtons;

 