import { useState } from 'react' 

function App() {
  const [count, setCount] = useState(0)
  // setcount doesnt need in Count component but it has to be passed because Count's child uses it.
  // so button component want setCount , this is called prop drilling , bcz state is at top level and 
  // middle level dont want a state from top level but bottom level want it,
  // so we nedd to pass props from middle to bottom.
  return (
    <>
      <Count count={count} setCount ={setCount}/> 
      
    </>
  )
}
function Count({count,setCount }){
  return <div>
    {count} 
    <Button count={count} setCount = {setCount}/>
  </div>
}
function Button({count,setCount}){
  return <div>
    <button onClick={()=>{ setCount(count => count +1) }}> Increase</button>
    <button onClick={()=>{ setCount(count => count -1) }}> Decrease</button>
  </div>
}

export default App
