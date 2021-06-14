const rot13 = (str) => {
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) > 64) {
        let code = str.charCodeAt(i) + 13;
        res.push(String.fromCharCode(code));
      
      } else if (str.charCodeAt(i) > 77) {
        let code = str.charCodeAt(i) - 13;
        res.push(String.fromCharCode(code));
  
      } else {
        res.push(String.fromCharCode(str.charCodeAt(i)));
      }
    }
  
    return res.join('')
    
  }