import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [isruning, setIsruning] = useState(false);
  useEffect(() => {
    let interval;
    if (isruning) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isruning]);

  const handleReset = () => {
    setIsruning(false);
    setSecond(0);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>Timer {second}</h3>
      <button onClick={() => setIsruning(true)}>start</button>
      <button onClick={() => setIsruning(false)}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;
