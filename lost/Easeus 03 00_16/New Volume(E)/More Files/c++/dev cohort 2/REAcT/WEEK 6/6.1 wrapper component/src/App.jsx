import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//wrapping a component.
function App() {  
  return (
    // passing a component inside a component. that means wrapping a component.
    <>
      <Cardwrapper >
        <TextComponent/>
       </Cardwrapper>
      
      <Cardwrapper >
        <TextComponent/>
       </Cardwrapper>
    </>
  )}

function TextComponent(){
  return <div> hi there!</div>
}

function Cardwrapper({children}){
  // create a div which has border 
  // and inside the div render the prop
  return <div style={{ border : "2px solid black",
    padding :" 0 15px 0 15px",  
    margin: "10px",
    boxSizing : " border-Box",
    width  : "100px"
  }}>
    {children}
    </div>
}
export default App
