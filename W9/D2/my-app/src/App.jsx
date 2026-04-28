import { useState } from 'react'

import './App.css'
import { FunctionaName } from './components/FunctionalCompOne.jsx'
import {FunctionalComponentsBasics } from './components/FunctionalComponentsbasics.jsx'
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'
import { ClassComponentState } from './components/ClassComponentsState.jsx'

function App() {
  return (
    // Fragment in react :<>  </>
    <>
    {/*Component name*/}
      {/* <FunctionaName />
      {/* <FunctionalComponentsBasics/>  */}
      {/* <ClassComponentsBasics/> */}
      {/* <FunctionComp/> */}
      <ClassComponentState/>
    </> 
  )
}

export default App