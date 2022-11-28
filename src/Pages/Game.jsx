import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import SimpleButton from "../Components/SimpleButton";
import Symbol from "../Components/Symbol";

import backButton from "../img/back-button.svg"

import { startGame } from "../utils/getExpressions";

import GameContext from "../Context/";

export default function Game() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [symbol, setSymbol] = useState();
  const [userAnswer, setUserAnswer] = useState();
  const [expression, setExpression] = useState({});

  const { functions: { setResult, setAnswers } } = useContext(GameContext);

  const backMenu = () => navigate("/menu");

  const handleChanger = ({value}) => {
    if (value <= -1) value = 0;

    setUserAnswer(value);
  }

  const getExpression = () => {
    const expr = startGame();

    setExpression(expr);
    setSymbol(expr.symbol);
    setResult(prev => [...prev, expr.result]);
  }

  const submitResult = () => {
    getExpression();

    setUserAnswer(0);
    setAnswers(prev => [...prev, userAnswer]);
  }

  useEffect(() => {
    getExpression();

    setLoading(true);
  }, []);

  return(
    <section>
    {
      loading ?
        <div>
          <Button
            title={'back to menu button'}
            image={backButton}
            functionGame={backMenu}
          />

          <div class="border-2">
            <div>
              <p>{expression.prod}</p>
              <p>{expression.secondProd}</p>
              <Symbol svgTitle={symbol} />
            </div>
            <div>
              <input
                type="number"
                value={userAnswer}
                onChange={({target}) => handleChanger(target)}
                placeholder="0"
              />
              <SimpleButton
                title={"submit"}
                functionGame={submitResult}
                classStyle={"border-2 rounded-full md:bg-gray-d9 hover:border-slate-400"}
              />
            </div>
          </div>
        </div>
      :
        <div>
          <p>Loading...</p>
        </div>
    }
    </section>
  )
}
