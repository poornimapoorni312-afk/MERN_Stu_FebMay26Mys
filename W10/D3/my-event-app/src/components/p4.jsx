// Synthetic event vs Native DOM events
// Synthetic event:
// A wrapper created by React around the browser's native event
// Gives a consistent API across browsers
// works similarly to native DOM events
// Still allows access to the original brower events via
// event.nativeEvent

// Why does React use it?
// To make event handling behave consistently

// To simplify cross-browser difference
// To integrate smoothly with React's event system

//How synthetic event works:
// Component render:
//  A button appears on the screen
// handleClick is defined but it is not executed

//Use Clicks the button:
//Brower creates a netive click event
// React wrap that native event in a SyntheticEvent
// React passes the SyntheticEvent to handleClick
// event refers to the SyntheticEvent
// event.target gives us the HTML elements
