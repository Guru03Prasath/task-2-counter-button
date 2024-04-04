import React, { useState } from 'react';

function Counter() {
  // Define a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count state
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;