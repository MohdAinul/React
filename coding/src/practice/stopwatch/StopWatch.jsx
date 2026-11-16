import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [isruning, setIsruning] = useState(false);
  const [lap, setLap] = useState([]);
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
    setLap([]);
  };

  const handlelap = () => {
    if (isruning) setLap((prevlap) => [...prevlap, second]);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>Timer {second}</h3>
      <button onClick={() => setIsruning(true)}>start</button>
      <button onClick={() => setIsruning(false)}>stop</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handlelap}>lap</button>
      <ul>
        {lap.map((laptime, index) => (
          <li key={index}>lap : {laptime} </li>
        ))}
      </ul>
    </div>
  );
};

export default StopWatch;
