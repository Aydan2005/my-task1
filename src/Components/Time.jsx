import React from 'react'
import TimeCss from "./Time.module.css"
import { useState,useEffect } from 'react'
const Time = () => {
const [currentHours,setCurrentHours] = useState("")
const [currentMinutes,setCurrentMinutes] = useState("")
const [currentSeconds,setCurrentSeconds] = useState("")

useEffect(()=>{
  const updateTime = ()=>{
    const now = new Date()
    setCurrentHours(now.getHours());
    setCurrentMinutes(now.getMinutes());
    setCurrentSeconds(now.getSeconds());
  }
  updateTime()
  const intervalId = 
  setInterval(updateTime, 1000);
  return () => clearInterval(intervalId);

},[])

  return (
    <div>
        <div className={TimeCss.container}>
          <div className={TimeCss.item}>{currentHours.toString().padStart(2, '0')}</div>
          <div className={TimeCss.item}>{currentMinutes.toString().padStart(2, '0')}</div>
          <div className={TimeCss.item}>{currentSeconds.toString().padStart(2, '0')}</div>
        </div>
    </div>
  )
}

export default Time