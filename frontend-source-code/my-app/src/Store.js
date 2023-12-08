import React, { useState } from 'react';

const Storee = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <h1>Store Page</h1>
      <button onClick={toggleList}>Toggle List</button>
      {showList && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Storee;
