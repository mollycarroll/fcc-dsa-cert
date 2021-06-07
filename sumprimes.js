const isPrime = (num) => {
    if (num <= 1) {
        return false
    } else if (num === 2) {
        return true
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const sumPrimes = (num) => {
    let sum = 0;
    let current = 1;

    while (current <= num) {
        if (isPrime(current)) {
            sum += current;
        }
        current++;
    }

    return sum
}