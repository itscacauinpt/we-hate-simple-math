const getProducts10 = () => Math.floor(Math.random() * 11);
const getProducts100 = () => Math.floor(Math.random() * 101);

const getSymbol = () => {
  const symbols = ['plus', 'minus', 'times', 'divide'];
  const random = Math.floor(Math.random() * symbols.length);

  return symbols[random];
}

const funcMinus = (symbol) => {
  const prod = getProducts100();
  let secondProd = getProducts100();

  if (secondProd > prod) {
    secondProd = getProducts100();
  }

  return { symbol, prod, secondProd }
}

export const startGame = () => {
  const symbol = getSymbol();

  if (symbol === 'minus') return funcMinus(symbol);

  if (symbol === 'plus') {
    return {
      symbol,
      prod: getProducts100(),
      secondProd: getProducts100()
    }
  }

  if (symbol === 'times') {
    return {
      symbol,
      prod: getProducts100(),
      secondProd: getProducts10(),
    }
  }

  if (symbol === 'divide') {
    return {
      symbol,
      prod: getProducts100(),
      secondProd: getProducts10(),
    }
  }
}