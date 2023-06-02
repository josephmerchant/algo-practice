//Write a function that returns the nth term in the Fibbonacci Sequence

/**
 * The function calculates the nth number in the Fibonacci sequence iteratively.
 * @param n - The input parameter representing the index of the Fibonacci sequence to be calculated.
 * @returns the nth number in the Fibonacci sequence, where n is the input parameter. If n is less than
 * or equal to 1, the function returns n. If n is negative, the function returns undefined.
 */
function fib(n){
    if (n < 0 ){
        return undefined;
    }

    let temp;
    let num = 0;
    let nextNum = 1;

    if (n <= 1){
        return n
    }
    for (let i = 2; i < n; i++){
        temp = num + nextNum;
        num = nextNum;
        nextNum = temp;
    }
    return temp;
}

console.log(fib(4))
