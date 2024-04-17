//todo -------- There are different types of time related functions available -------------
   // setTimeout()
    // setInterval()
    // clearTimeout()
    // clearInterval()
    // requestAnimationFrame()
    // setImmediate()
    // process.nextTick()

//todo ----------------- setTimeout() -------------------
// setTimeout() is a method that executes a function after a specified amount of time.
// The setTimeout() method takes two parameters: a callback function and a time in milliseconds.
// Its run only once.

//? ----------------- Example -------------------
 setTimeout(function() {
    console.log("Hello World! 1");
 }, 2000)

//todo ----------------- setInterval() -------------------
// setInterval() is a method that executes a function at specified intervals.
// The setInterval() method takes two parameters: a callback function and a time in milliseconds.
// Its run multiple times.

//? ----------------- Example -------------------
    setInterval(function() {
      console.log("Hello World!");
    }, 3000)

//todo --------------- clearTimeout() ----------------------
