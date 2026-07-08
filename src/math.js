export function sum (...numbers){
    return numbers.reduce(
        (result, number) => result + number, 
        0
    );
}

export function average(...numbers){
    if (numbers.length === 0){
        throw new TypeError('average(numbers): at least one number expected');
    }
    return sum (...numbers)/numbers.length; 
}

export function faculty(n){
    if (n === 0){
        throw new TypeError('faculty(n): n must be greater than 0');
    }
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

