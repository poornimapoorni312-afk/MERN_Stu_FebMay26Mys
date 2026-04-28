import React from 'react';
function Welcome(props){
    //child componets:reusable UI
    return(
        <p>Hello,{props.name}</p>
    );
}
export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Rakesh' as prop welcome function receive is as receive is as{name:"Rakesh"} */}
            <Welcome name="Rakesh" />
            {/* We are passing 'Developer' as prop welcome function receive is as receive is as{name:"Developer"} */}
            <Welcome name="Developer" />
        </div>
    )
}