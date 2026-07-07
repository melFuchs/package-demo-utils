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

