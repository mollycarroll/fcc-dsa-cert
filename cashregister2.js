const denoms = {
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
  
  const makeChange = (cid, changeDue) => {
      let arr = []
      changeDue = changeDue * 100;
      
      cid.forEach(el => {
          el[1] = Math.round(el[1] * 100);
      })
      
        for (let i = cid.length - 1; i >= 0; i--) {
        let valueOfChange = cid[i][1];
        let denomValue = Math.floor(changeDue / denoms[cid[i][0]]) * denoms[cid[i][0]];
        denomValue = Math.min(denomValue, cid[i][1]);
        changeDue = changeDue - denomValue;
        if (denomValue > 0) {
          arr.unshift([cid[i][0], denomValue / 100]);
        }
      }
        return arr
  }
  
  function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
  
    let totalInDrawer = cid.map(row => row[1]).reduce((x,y) => x + y);
  
    if (totalInDrawer < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalInDrawer == changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
         let change = makeChange(cid, changeDue); // Array
      let totalChange = change.map(row => row[1]).reduce((x,y) => x + y); // Floating point
      if (totalChange !== changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: change }
      }
    }
  }