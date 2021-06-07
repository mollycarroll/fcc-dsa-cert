const palindrome = (str) => {
    let regex = /[a-z0-9]/
    str = str.toLowerCase();

    let strArr = [];

    for (let letter of str) {
        if (letter.match(regex)) {
            strArr.push(letter);
        }
    }

    const originalOrder = [...strArr];
    strArr = strArr.reverse();

    const originalStr = originalOrder.join('');
    const reverseStr = strArr.join('');

    if (originalStr === reverseStr) {
        return true
    }

    return false
}