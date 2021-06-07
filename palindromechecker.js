const palindrome = (str) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    str = str.toLowerCase();

    let result = [];

    for (let letter of str) {
        if (alphabet.includes(letter)) {
            result.push(letter)
        }
    }

    let end = result.length - 1;

    for (let b = 0; b < result.length; b++) {
        if (result[b] != result[end]) {
            return false
        }
        end--;
    }

    return true
}