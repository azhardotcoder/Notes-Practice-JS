/* //todo ------ Operators --------
! 1. Arithmetic Operators 
    //* (+, -, *, /, %, ++, --)
    ? Exaple of Arithmetic Operators
    let x = 10;
    let y = 3;
        console.log(x + y); //*          +       operator is for addition of two values
        console.log(x - y); //*          -       operator is for subtraction of two values
        console.log(x / y); //*          /       operator is for division of two values
        console.log(x % y); //*          %       operator is for modulus of two values
        console.log(++x);   //*          ++      operator is for increment of value by 1
        console.log(--x);   //*          --x     operator is for decrement of value by 1

! 2. Assignment Operators 
Assignment operators are used to assign values to variables.
    //*(=, +=, -=, *=, /=, %=)
    ? Exaple of Assignment Operators
    let x = 10;
    x += 5; // x = x + 5; output: 15 
    x -= 5; // x = x - 5; output: 5
    x *= 5; // x = x * 5; output: 50 
    x /= 5; // x = x / 5; output: 2
    x %= 5; // x = x % 5; output: 0

! 3. Comparison Operators 
comparison operators are used to compare two values
    *(==, ===, !=, !==, >, <, >=, <=)
    ? Exaple of Comparison Operators
    let x = 1;
    todo-- Relational --
        console.log(x > 0);     //*         >       operator is for greater than
        console.log(x >= 1);    //*         >=      operator is for greater than or equal to
        console.log(x < 1);     //*         <       operator is for less than
        console.log(x <= 1);    //*         <=      operator is for less than or equal to

    todo-- Equality --
        console.log(x === 1); //*           ===     operator is for equal value and equal type
        console.log(x !== 1); //*           !==     operator is for not equal value or not equal type

! 4. Logical Operators
Logical operators are used to determine the logic between variables or values
    *(&&, ||, !)
    ? Exaple of Logical Operators
    let x = 10;
    let y = 3;
    todo-- Logical AND (&&) --
        console.log(x > 5 && x < 15); //*   &&     operator is for logical AND
    todo-- Logical OR (||) -- 
        console.log(x > 5 || x < 15); //*   ||     operator is for logical OR
    todo-- Logical NOT (!) --
        console.log(!(x > 5)); //*          !      operator is for logical NOT

! 5. Bitwise Operators
Bitwise operators are used to perform bitwise operations on variables
    *(&, |, ^, ~, <<, >>, >>>)
    ? Exaple of Bitwise Operators
        console.log(1 | 2); // Bitwise OR 
        console.log(1 & 2); // Bitwise AND
    
! 6. Type Operators
Type operators are used to identify the data type of a variable
    *(typeof, instanceof)
    ? Exaple of Type Operators
    let x = 1;
        console.log(typeof x);
        console.log(typeof 1);
        console.log(typeof '1');
        console.log(typeof true);
        console.log(typeof null);
    
! 7. Ternary Operator 
Ternary operator is used to assign a value to a variable based on some condition
    *(condition ? expr1 : expr2)
    ? Exaple of Ternary Operator
    let points = 110;
    let type = points > 100 ? 'gold' : 'silver';
        console.log(type);
*/


//function which will take two numbers and return the sum of them
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); //30