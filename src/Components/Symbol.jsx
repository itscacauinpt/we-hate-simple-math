import { useState, useEffect } from "react";

import plus from "../img/symbols/plus.svg"
import minus from "../img/symbols/minus.svg"
import times from "../img/symbols/times.svg"
// import divide from "../img/symbols/divide.svg";

export default function Symbol({ svgTitle }) {
  const [symbol, setSymbol] = useState();

  useEffect(() => {
    if (svgTitle === 'plus') setSymbol(plus);

    if (svgTitle === 'minus') setSymbol(minus);

    if (svgTitle === 'times') setSymbol(times);

    // if (svgTitle === 'divide') setSymbol(divide);
  }, [svgTitle]);

  return (
    <img src={symbol} alt={ svgTitle } />
  );
}
