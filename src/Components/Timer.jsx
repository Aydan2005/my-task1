import React, { useState, useEffect } from 'react';
import TimerCss from "./Timer.module.css"

const Timer = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [run, setRun] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let intervalId;
    if (run && (hours > 0 || minutes > 0 || seconds > 0)) {
      setComplete(false);
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      setRun(false);
      setComplete(true);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [run, hours, minutes, seconds]);

  const eventInput = (event) => {
    let value = parseInt(event.target.value, 10) || 0;
    const name = event.target.name;

    setRun(false);
    setComplete(false);

    if (name === 'hour') {
      setHours(value);
    }
    if (name === 'minute') {
      if (value >= 60) {
        const additionalHours = Math.floor(value / 60);
        const remainingMinutes = value % 60;
        setHours((prevHours) => prevHours + additionalHours);
        setMinutes(remainingMinutes);
      } else {
        setMinutes(value);
      }
    }
    if (name === 'second') {
      if (value >= 60) {
        const additionalMinutes = Math.floor(value / 60);
        const remainingSeconds = value % 60;
        setMinutes((prevMinutes) => prevMinutes + additionalMinutes);
        setSeconds(remainingSeconds);
      } else {
        setSeconds(value);
      }
    }
  };

  const normalizeTime = (hours, minutes, seconds) => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const normalizedHours = Math.floor(totalSeconds / 3600);
    const normalizedMinutes = Math.floor((totalSeconds % 3600) / 60);
    const normalizedSeconds = totalSeconds % 60;
    setHours(normalizedHours);
    setMinutes(normalizedMinutes);
    setSeconds(normalizedSeconds);
  };

  const startStopTimer = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setRun((run) => !run);
    }
  };

  return (
    <div>
      <div className={TimerCss.container}>
        <input
          type="number"
          value={hours}
          className={TimerCss.item}
          name='hour'
          onChange={eventInput}
        />
        <input
          type="number"
          value={minutes}
          className={TimerCss.item}
          name='minute'
          onChange={eventInput}
        />
        <input
          type="number"
          value={seconds}
          className={TimerCss.item}
          name='second'
          onChange={eventInput}
        />
      </div>

      <button className={TimerCss.button} onClick={startStopTimer}>
        {run && (hours > 0 || minutes > 0 || seconds > 0) ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
