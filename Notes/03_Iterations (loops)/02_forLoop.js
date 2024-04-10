//todo ----------------- For Loop -------------------
//* for loop is used to iterate over a block of code multiple times.
//* for loop is used when we know the number of iterations.
//* for loop is used when we know the starting and ending point of the loop.

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
}

//todo ----------------- Table print -------------------
for (let i = 1; i <= 100; i++) {
    //console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      //  console.log(i + ' * ' + j + ' = ' + i*j );
    }
    
}

//todo ----------------- for loop Array -------------------
const arr = ['Apple', 'Banana', 'Cherry', 'Dates', 'Egg Fruit'];
for (let i = 0; i < arr.length; i++) {
   // console.log(arr[i]);
}

//todo ----------------- break and continue -------------------
//* break and continue are used to control the flow of the loop.
//* break is used to stop the loop.
//* continue is used to skip the current iteration and continue with the next iteration.


for (let i = 1; i < 20; i++) {
    if (i == 5) {
        //console.log(`Detected 5`);
        break //By using break keyword we can break flow of array.
    }
   // console.log(i);
    
}

for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue //* By using continue keyword we can skip the current iteration and continue with the next iteration.
    }
   console.log(`Value ${i}`);
    
}

