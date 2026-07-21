import React, { memo } from "react";

function Counter({ count, increment, calculation }) {
    console.log('this is sub component');
    
  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculation}
      <p>
        Note that this example executes the expensive function also when you
        click on the Add Todo button.
      </p>
    </div>
  );
}

export default memo(Counter);
