import React from "react";
import useCounterViewModel from "../viewmodel/useCounterViewModel";
import ApiViewModel from "../viewmodel/ApiViewModel";

const CView = ({}) => {
  const { count, increment, decrement } = useCounterViewModel();
  const { data, loading } = CViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CView;
