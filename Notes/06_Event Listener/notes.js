 //todo -------------- Event Listener ----------------
 //* Event Listener is a method that attaches an event handler to the specified element without overwriting existing event handlers.
    //* It allows adding many events to a single element.
    //* It is the most popular way to add or remove events.

//todo -------------- Syntax ----------------

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
}, false)

//todo -------------- event listeners ----------------
//* There are two types of event listeners:
    //* addEventListener
    //* attachEvent
//* addEventListener is the modern way to add an event listener, while attachEvent is the old way to add an event listener.
//* addEventListener is supported by all modern browsers, while attachEvent is supported by Internet Explorer 8 and earlier versions.

//todo -------------- Types of event listeners ----------------
 // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode, charCode

//todo -------- type ------------
//* It returns the type of event.

//todo -------- timestamp ------------
//* It returns the time when the event was created.

//todo -------- defaultPrevented ------------
//* It returns a Boolean value that specifies whether the event was prevented.

//todo -------- target ------------
//* It returns the element that triggered the event.

//todo -------- toElement ------------
//* It returns the element that the mouse pointer moved to.

//todo -------- srcElement ------------
//* It returns the element that triggered the event.

//todo -------- currentTarget ------------
//* It returns the element that is currently handling the event.

//todo -------- clientX ------------
//* It returns the horizontal coordinate of the mouse pointer.

//todo -------- clientY ------------
//* It returns the vertical coordinate of the mouse pointer.

//todo -------- screenX ------------
//* It returns the horizontal coordinate of the mouse pointer.

//todo -------- screenY ------------
//* It returns the vertical coordinate of the mouse pointer.

//todo -------- altkey ------------
//* It returns a Boolean value that specifies whether the "ALT" key was pressed.

//todo -------- ctrlkey ------------
//* It returns a Boolean value that specifies whether the "CTRL" key was pressed.

//todo -------- shiftkey ------------
//* It returns a Boolean value that specifies whether the "SHIFT" key was pressed.

//todo -------- keyCode ------------
//* It returns the Unicode value of a character key that was pressed.

//todo -------- charCode ------------
//* It returns the Unicode value of a non-character key that was pressed.


