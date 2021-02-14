import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./index.scss";

const Timer = () => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [counter, setCounter] = useState(0);

  const displayedTimer = format(new Date(0, 0, 0, 0, 0, counter), "HH:mm:ss");

  useEffect(() => {
    let intervalId;
    if (isTimerOn) {
      intervalId = setInterval(
        () => setCounter((counter) => counter + 1),
        1000
      );
    }

    return () => clearInterval(intervalId);
  }, [isTimerOn, counter]);

  const handleToggle = () => {
    if (isTimerOn) {
      setCounter(0);
    }

    setIsTimerOn(!isTimerOn);
  };

  return (
    <div className="timer">
      <h2>Timer</h2>
      <div className="timer__display">
        <span>{displayedTimer}</span>
      </div>

      <div className="timer__buttons">
        <button className="button" onClick={handleToggle}>
          {isTimerOn ? "Stop" : "Start"}
        </button>
        <button className="button" onDoubleClick={() => setIsTimerOn(false)}>
          Wait
        </button>
        <button className="button" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
