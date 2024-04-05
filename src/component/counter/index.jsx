import React, { useReducer, useState } from 'react';
import { reducer } from '../../store';
import { DECREMENT, INCREMENT } from '../../store/type';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, count);
  return (
    <div className="flex 2/3 items-center justify-center gap-5 mt-5">
      <button
        type="button"
        className="bg-primary py-2 px-5 text-white text-lg rounded-lg"
        onClick={() => dispatch({ type: INCREMENT })}>
        +
      </button>
      <span>{state}</span>
      <button
        type="button"
        onClick={() => dispatch({ type: DECREMENT })}
        className="bg-red-700 py-2 px-5 text-white text-lg rounded-lg">
        -
      </button>
    </div>
  );
};

export default Counter;
