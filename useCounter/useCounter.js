import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((currentCounterValue) => currentCounterValue + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = (value = 1) => {
    if (!counter) return;

    setCounter((currentCounterValue) => currentCounterValue - value);
  };

  return { counter, increment, decrement, reset };
};
