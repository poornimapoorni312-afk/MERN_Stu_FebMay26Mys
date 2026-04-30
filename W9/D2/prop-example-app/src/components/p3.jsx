// Container/ wrapper component
import { React } from "react";
//childern is a special React prop
//it holds nested JSX passed between comonent tags
//it helps create reusable wrapper/layout components
function Container({children}){
    return(
        <div className="card"> 
           { childrens}
           </div>
    );
}
//Parent Component
export function PropsChildren(){
    return(
        <>
        <Container> {/* Container here is name component */}
            <h3>First child element in Nested approach </h3>
            </Container>
        </>
    )
}