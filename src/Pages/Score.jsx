import React, { useEffect, useState, useContext } from "react"
import Countdown from "../Components/ContdownTimer";
import GameContext from "../Context";

export default function Score() {
  const [score, setScore] = useState(0);

  const {
    values: { answers, result } } = useContext(GameContext);

  useEffect(() => {
    console.log(answers);
  });

  return (
    <section>
      <div>
        <Countdown />
      </div>
    </section>
  )  
}