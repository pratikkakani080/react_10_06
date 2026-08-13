import React, { useReducer } from 'react';
const counterReducer = (state, action) => {
   console.log("🚀 ~ counterReducer ~ state, action:", state, action)
   switch (action.type) {
       case 'INCREMENT':
           return { count: state.count + (action.payload || 1) };
       case 'DECREMENT':
           return { count: state.count - 1 };
       default:
           return state;
   }
};

const initStates = { 
    count: 0,
    
 }

function Counter() {
   const [state, dispatch] = useReducer(counterReducer, initStates);
   return (
       <div>
           <p>Count: {state.count}</p>
           <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
           <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
           <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>Increment by 5</button>
       </div>
   );
}
export default Counter;