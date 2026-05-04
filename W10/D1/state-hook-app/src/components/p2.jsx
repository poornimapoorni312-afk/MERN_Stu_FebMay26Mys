//Updatiing objects and Arrays
import {useState} from "react";

export function UpdatingObjectsArraysState(){
    // User state 
    const [user,setUser] = useState({
        name:'Poornima',
        skill:'React'
    });

    const updateSkill = () =>{
        setUser({
            ...user,//copies all exisiting properties(name, skill)
            skill:'Advanced React'
        });
    };

    return(
        <>
        <h2>Updating objects state</h2>
        <p>{user.name}-{user.skill}</p>
        <button onClick={updateSkill}>Update Skill</button>
        </>
    )
}
