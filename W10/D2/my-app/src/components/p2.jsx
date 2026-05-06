// Custom hooks
// Its a normal Javascript function that uses React hooks inside it. Its name must start with "use".
// It hepls reuse logic across components

import { useEffect, useState } from "react";

// Why to use it?
// Avoid repeating the same hook logic
// Keeps components cleaner
// Makes code easier to understand

// Important things to remember about Custom hooks:
// It does not render JSX themselves
// They return values/functions
// Components use those returned values

// Document Title Changer: Custom hook which updates the browser tab title whenever
function useDocumentTitle(title){
    useEffect(()=>{
        document.title=title;

        return()=>{
            document.title='My react app';
        };
    },[title]);
}

// Custom hook: manages a boolean value and provide a reuseable toggle function

function useToggle(initialValue=false){
    const [value,setValue] = useState(initialValue);

    const toggle = () =>{
        setValue((prev)=>!prev);
    };
    return [value,toggle];
}

export function CustomHooksIntro(){
    const [count,setCount] = useState(0);

    const [isVisible, toggleVisible] = useToggle(true);

    useDocumentTitle(`Count is ${count}`);
    return(
        <section>
            <h2>Custom Hooks Introduction</h2>
            <div style={{marginButton: '10px'}}>
                <h3>Counter Example</h3>
                <p>Count: {count}</p>
                <button onClick={()=>setCount((prev)=>prev + 1)}>
                    Increment Count
                </button>
            </div>
            <div style={{marginButton: '10px'}}>
                <h3>Toggle Example</h3>
                <button onClick={toggleVisible}>
                    {isVisible ? 'Hide Message' : 'Show Message'}
                </button>
                {isVisible && (
                    <p>This visibility is controlled by a Custom hooks</p>
                )}
            </div>
        </section>
    )
}