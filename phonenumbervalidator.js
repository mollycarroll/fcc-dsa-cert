function telephoneCheck(str) {
    let arr = str.split('');
    let numbers = [];
    let parens = [];
  
    arr.forEach(el => {
      if (!isNaN(el) && el !== ' ') {
        numbers.push(el);
  
      } else if (el === '(') {
        parens.push(el);
  
      } else if (el === ')') {
        parens.push(el);
      } else {
        return false
      }
    });
  
    if (parens.length % 2 !== 0) {
      return false
    }
  
    console.log(numbers)
  
    if (numbers.length === 10) {
      return true
    } else if (numbers.length === 11 && parseInt(numbers[0]) === 1) {
      return true
    } else {
      return false
    }
  
  }