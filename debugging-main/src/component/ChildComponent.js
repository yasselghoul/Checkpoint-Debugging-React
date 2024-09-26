import React from 'react';

const ChildComponent = ({ counter }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Counter received from parent: {counter}</p>
    </div>
  );
};

export default ChildComponent;
