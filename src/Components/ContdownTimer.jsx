import React, { useState, useEffect } from "react"
import getTimer from "../utils/getTimer";

const defaultTime = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
};

export default function Countdown({remainingTime}) {
  const [time, setTime] = useState(defaultTime);

  // const updateTime = (remainingTime) => {
  //   // console.log("deu bom");
  //   setTime(getTimer(remainingTime));
  // }

  useEffect(() => {
    const interval = setInterval(() => {
    // updateTime(remainingTime);
      setTime(getTimer(remainingTime));
    }, 100);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <div class="border-2">
      <h2>{`${time.minutes}:${time.seconds}:${time.milliseconds}`}</h2>
    </div>
  )
}