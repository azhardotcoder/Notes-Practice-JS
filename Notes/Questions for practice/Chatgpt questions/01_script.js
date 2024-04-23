//? Write a JavaScript function to find the maximum of two numbers.
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return console.log(num1);
    } else {
        return console.log(num2);
    }
}

maxOfTwoNumbers(40, 30)

//? Write a JavaScript function to check if a number is even or odd.
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

//? Write a JavaScript function to count the number of occurrences of a specific character in a given string.
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

