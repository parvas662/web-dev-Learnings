import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import { CountContext } from './contextApi/context' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value= {{count,setCount}}>
       <Count   />
    </CountContext.Provider>
  )
}
 
function Count(){
  return <div> 
    <CountreRender  />
    <Button  />
  </div>
}
function CountreRender(){
  const { count  } = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button(){
  const { count,setCount }=  useContext(CountContext)
  return <div>  
    <button onClick={()=>{setCount(count => count+1)}} >
    increase  </button>
    <button onClick={()=>{setCount(count => count-1)}} >
    Decrease  </button>
  </div>
}
export default App
