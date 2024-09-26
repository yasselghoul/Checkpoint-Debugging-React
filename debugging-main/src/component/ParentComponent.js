import React, { useState } from 'react';
import ChildComponent from './ParentComponent';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
      <ChildComponent counter={counter} />
    </div>
  );
};

export default ParentComponent;
