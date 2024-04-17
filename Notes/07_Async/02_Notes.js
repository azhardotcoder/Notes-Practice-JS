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
// to stop setinterval with one time of period we require setTimeout()

//? ----------------- Example -------------------
 setTimeout(function() {
    console.log("Hello World! 1");
 }, 2000)
//==================================================

 setTimeout(() => {
  clearInterval(intervalId)
}, 2000 ); // we have to  give time in milliseconds 1 second = 1000.

//? for better understanding check script file in same folder.

//todo ----------------- setInterval() -------------------
// setInterval() is a method that executes a function at specified intervals.
// The setInterval() method takes two parameters: a callback function and a time in milliseconds.
// Its run multiple times.

//? ----------------- Example -------------------
    setInterval(function() {
      console.log("Hello World!");
    }, 3000)

//todo --------------- clearTimeout() ----------------------
