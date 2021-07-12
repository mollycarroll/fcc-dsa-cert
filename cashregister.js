const currencyUnits = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

const checkCashRegister = (price, cash, cid) => {

  let changeTotal = cash * 100 - price * 100;
  let changeCheck = changeTotal;
  let changeArr = [];
  let status = '';

  let cidSum = 0;
  let filteredCID = cid.filter(el => el[1] !== 0).reverse();

  filteredCID.forEach(el => {
    let currency = el[0];
    let currencySum = el[1] * 100;
    cidSum += currencySum;
    let amount = 0;

    while (changeTotal >= currencyUnits[currency] && currencySum > 0) {
      amount += currencyUnits[currency];
      changeTotal -= currencyUnits[currency];
      currencySum -= currencyUnits[currency];
    }

    if (amount !== 0) {
      changeArr.push([currency, amount / 100])
    }
  });

  if (changeTotal > 0) {
    status = 'INSUFFICIENT_FUNDS';
    changeArr = [];

  } else if (changeTotal == 0 && changeCheck == cidSum) {
    status = 'CLOSED';
    changeArr = cid;

  } else {
    status = 'OPEN';
  }

  return { 'status': status, 'change': changeArr }

}