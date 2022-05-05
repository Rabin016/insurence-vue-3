const convertCurrency = (limit, cur) => Number(limit) * Number(cur);

const bankCalculate = (balance, percent) => balance + balance * (percent / 100);

const rateCalculate = (balance, preRate) => balance * (preRate / 100);

export { convertCurrency, bankCalculate, rateCalculate };
