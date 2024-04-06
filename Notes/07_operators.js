/* //todo ------ Operators --------
! 1. Arithmetic Operators 
    //* (+, -, *, /, %, ++, --)
    ? Exaple of Arithmetic Operators
    let x = 10;
    let y = 3;
        console.log(x + y);
        console.log(x - y);
        console.log(x * y);
        console.log(x / y);
        console.log(x % y);
        console.log(x++);
        console.log(++x);
        console.log(x--);
        console.log(--x);

! 2. Assignment Operators 
    //*(=, +=, -=, *=, /=, %=)
    ? Exaple of Assignment Operators
    let x = 10;
    x += 5; // x = x + 5;
    x -= 5; // x = x - 5;
    x *= 5; // x = x * 5;
    x /= 5; // x = x / 5;
    x %= 5; // x = x % 5;

! 3. Comparison Operators 
    *(==, ===, !=, !==, >, <, >=, <=)
    ? Exaple of Comparison Operators
    let x = 1;
    todo-- Relational --
        console.log(x > 0);
        console.log(x >= 1);
        console.log(x < 1);
        console.log(x <= 1);

    todo-- Equality --
        console.log(x === 1);
        console.log(x !== 1);

! 4. Logical Operators
    *(&&, ||, !)
    ? Exaple of Logical Operators
    let x = 10;
    let y = 3;
    todo-- Logical AND (&&) --
        console.log(x > 5 && x < 15);
    todo-- Logical OR (||) --
        console.log(x > 5 || x < 15);
    todo-- Logical NOT (!) --
        console.log(!(x > 5));

! 5. Bitwise Operators
    *(&, |, ^, ~, <<, >>, >>>)
    ? Exaple of Bitwise Operators
        console.log(1 | 2); // Bitwise OR
        console.log(1 & 2); // Bitwise AND
    
! 6. Type Operators
    *(typeof, instanceof)
    ? Exaple of Type Operators
    let x = 1;
        console.log(typeof x);
        console.log(typeof 1);
        console.log(typeof '1');
        console.log(typeof true);
        console.log(typeof null);
    
! 7. Ternary Operator 
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