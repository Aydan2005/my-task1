import React from 'react'
import StopWatchCss from "./StopWatch.module.css"
import { useState,useEffect } from 'react';
const StopWatch = () => {
  const [seconds,setSeconds] = useState(0);
  const [run,setRun] = useState(false)
  useEffect(() =>{
    if(run){
      const intervalId = 
      setInterval(()=>{
        setSeconds((seconds) => seconds + 1 )
      },1000)
      return () =>{
        clearInterval(intervalId)
      }
    }
  },[run])

  // useEffect(() => {
  //   return () => setRun(false);
  // }, []);

  const hours = Math.floor(seconds/3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const newSeconds = seconds%60
  const StartStop = () => {
    setRun((run) => !run);
  };
  return (
    <div>
      <div className={StopWatchCss.container}>
        <div className={StopWatchCss.item}>{hours.toString().padStart(2,'0')}</div>
        <div className={StopWatchCss.item}>{minutes.toString().padStart(2,'0')}</div>
        <div className={StopWatchCss.item}>{newSeconds.toString().padStart(2,'0')}</div>
      </div>
      <button className={StopWatchCss.button} onClick={StartStop}>{run ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default StopWatch
