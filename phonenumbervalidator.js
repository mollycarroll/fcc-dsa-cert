function telephoneCheck(str) {
  const regex = /^(\+?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  let parens = [];

  if (regex.test(str)) {

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === ')') {
        parens.push(str[i])
      }
    }

    if (parens.length === 0 || parens.length === 2) {
      return true
    }

  }

  return false
}