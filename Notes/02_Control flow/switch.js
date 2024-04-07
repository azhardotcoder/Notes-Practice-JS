//todo --------------Switch Statement----------------
// * The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
// * A switch statement first evaluates its expression.
// * It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression.
// * If such a case clause is found, the program executes the associated statements.
// * If no matching case clause is found, the program looks for the optional default clause, and if found, executes the statements associated with it.

//todo --------------Syntax of switch----------------
switch (key) {
    case value:
        // code block
        break;
    case value:
        console.log();
        break;
    case value:
        console.log();
        break;

    default:
        break;
}
//todo --------------Example of switch----------------
let day = 3
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}