import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../configs/redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  updateText,
} from "../../configs/redux/reducers/mySlice";

export function ReduxComp() {
  const count = useSelector((state: RootState) => state.counter?.value);
  const text = useSelector((state: RootState) => state.counter.text);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{text}</span>
        <input
          type="text"
          onChange={(e) => dispatch(updateText(e.target.value))}
        />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
