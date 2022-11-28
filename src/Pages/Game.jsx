import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import SimpleButton from "../Components/SimpleButton";
import Symbol from "../Components/Symbol";

import backButton from "../img/back-button.svg"

import { startGame } from "../utils/getExpressions";

export default function Game() {
  const navigate = useNavigate();

  const [expression, setExpression] = useState({});
  // const [results, setResults] = useContext(); // isso aqui também aqui vai estar no context

  const backMenu = () => navigate("/menu");

  const submitResult = () => console.log('deu, setResults, array de previous + current');

  useEffect(() => {
    const expr = startGame();
    setExpression(expr);

  }, []);

  return(
    <>
      <Button
        title={ 'back to menu button' }
        image={ backButton }
        functionGame={ backMenu }
      />
      <section>
      </section>
      <section>
        <div>
          <p>{expression.prod}</p>
          <p>{expression.secondProd}</p>
          <Symbol svgTitle={ expression.symbol } />
        </div>
      </section>
      <section>
        <div>
          <input
              type="number"
              placeholder="54...?"
          />
          <SimpleButton
            title={ "submit" }
            functionGame={ submitResult }
            classStyle={ "border-2 rounded-full md:bg-gray-d9 hover:border-slate-400" }
          />
        </div>
      </section>
    </>
  )
}