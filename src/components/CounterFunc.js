import React from "react";
import { increment, decrement } from "../actions/counter";
import { useDispatch, useSelector } from "react-redux";
const CounterFunc = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log("count", count);
  return (
    <>
      <hr />
      <h3>Functional component</h3>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      &nbsp; &nbsp; {count} &nbsp; &nbsp;
      <button onClick={() => dispatch(increment(2))}>+</button>
      <hr />
    </>
  );
};

export default CounterFunc;
