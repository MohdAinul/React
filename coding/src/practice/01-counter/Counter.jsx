import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count is : {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button
        onClick={() => {
          if (count + step <= 5) setCount(step + count);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (count - step >= 0) setCount(count - step);
        }}
      >
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
