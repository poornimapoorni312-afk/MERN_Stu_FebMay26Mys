//Basics events in React
// What is an Event?
//An action trigger by the user (mouse, keyboard, DOM).
//React  uses camelCase attributes like onClick, onChange...
//React  passes an event object (syntheticEvent) to the handler

export function EventBasics(){
    //declaring a event handler function
    const handleClick = () => alert("Clicked");

    return(
        <section>
            <h2>Basics Events</h2>
            {/*Event binding*/} 
            <button onClick={handleClick}>
                Click me

            </button>
            </section>
    )
}


