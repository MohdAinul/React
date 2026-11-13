import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
