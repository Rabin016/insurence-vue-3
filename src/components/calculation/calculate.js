const convertCurrency = (limit, cur) => Number(limit) * Number(cur);

const bankCalculate = (balance, percent) => Number(balance) + Number(balance) * (Number(percent) / 100);

const rateCalculate = (balance, preRate) => Number(balance) * (Number(preRate) / 100);

export { convertCurrency, bankCalculate, rateCalculate };
