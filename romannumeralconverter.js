const convertToRoman = (num) => {
    num = num.toString();
    num = num.split('');
    let result = '';
    const ones = ['I', 'X', 'C', 'M'];
    const fives = ['V', 'L', 'D', ''];
    const tens = ['X', 'C', 'M', ''];

    for (let i = num.length-1; i >= 0; i--) {
        if (num[i] === '1') {
            result = ones[num.length-1-i].concat(result)

        } else if (num[i] === '2') {
            result = ones[num.length-1-i].repeat(2).concat(result)

        } else if (num[i] === '3') {
            result = ones[num.length-1-i].repeat(3).concat(result)

        } else if (num[i] === '4') {
            result = fives[num.length-1-i].concat(result)
            result = ones[num.length-1-i].concat(result)

        } else if (num[i] === '5') {
            result = fives[num.length-1-i].concat(result)

        } else if (num[i] === '6') {
            result = ones[num.length-1-i].concat(result)
            result = fives[num.length-1-i].concat(result)

        } else if (num[i] === '7') {
            result = ones[num.length-1-i].repeat(2).concat(result)
            result = fives[num.length-1-i].concat(result)

        } else if (num[i] === '8') {
            result = ones[num.length-1-i].repeat(3).concat(result)
            result = fives[num.length-1-i].concat(result)

        } else if (num[i] === '9') {
            result = tens[num.length-1-i].concat(result)
            result = ones[num.length-1-i].concat(result)
        }
    }

    return result
}