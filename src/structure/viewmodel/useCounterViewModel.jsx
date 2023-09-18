// src/viewmodels/CounterViewModel.js
import { useState } from "react";
import CounterModel from "../models/CounterModel";

const useCounterViewModel = () => {
  const [count, setCount] = useState(CounterModel.initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounterViewModel;
