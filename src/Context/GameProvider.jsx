import React, { useState, useMemo } from 'react';
import GameContext from '.';

function GameProvider({ children }) {
  const [result, setResult] = useState([]);
  const [answers, setAnswers] = useState([]);

  const provide = useMemo(() => ({
    values: {
      answers,
      result
    },
    functions: {
      setAnswers,
      setResult
    }
  }), [result, answers]);

  return (
    <GameContext.Provider value={ provide }>
      { children }
    </GameContext.Provider>
  );
}

// install proptypes!!
// GameProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default GameProvider;