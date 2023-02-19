const getProducts10 = () => Math.floor(Math.random() * 11);
const getProducts100 = () => Math.floor(Math.random() * 101);

const getSymbol = () => {
  // const symbols = ['plus', 'minus', 'times', 'divide'];
  const symbols = ['plus', 'minus', 'times'];
  const random = Math.floor(Math.random() * symbols.length);

  return symbols[random];
}

const funcMinus = (symbol) => {
  const prod = getProducts100();
  let secondProd = getProducts100();

  while (secondProd > prod) {
    secondProd = getProducts100();
  }

  const result = prod-secondProd;

  return { symbol, prod, secondProd, result };
}

const funcPlus = (symbol) => {
  const prod = getProducts100();
  const secondProd = getProducts100();

  return {
    symbol,
    prod,
    secondProd,
    result: prod+secondProd,
  }
}

const funcTimes = (symbol) => {
  const prod = getProducts100();
  const secondProd = getProducts10();

  return {
    symbol,
    prod,
    secondProd,
    result: prod*secondProd,
  }
}

// const funcDivide = (symbol) => {
//   let prod = getProducts100();
//   let secondProd = getProducts10();

//   while (secondProd === 0 || prod === 0 || secondProd === 1 || prod === 1) {
//     secondProd = getProducts10();
//     prod = getProducts100();
//   }

//   while (prod%secondProd !== 0) {
//     secondProd = getProducts10();
//   }

//   return {
//     symbol,
//     prod,
//     secondProd,
//     result: prod/secondProd,
//   }
// }

export const startGame = () => {
  const symbol = getSymbol();

  if (symbol === 'minus') return funcMinus(symbol);

  if (symbol === 'plus') return funcPlus(symbol);

  if (symbol === 'times') return funcTimes(symbol);

  // if (symbol === 'divide') return funcDivide(symbol);
}