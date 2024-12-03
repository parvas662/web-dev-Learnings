import { useState } from 'react' 

function App() {
  const [count, setCount] = useState(0)
  const [sum,setSum] = useState(1)
  
  const totalSum =  (sum*(sum+1))/2
  
  return (
    <>
    <input type="text" onChange={function(e){
       setSum(parseInt(e.target.value))
    }} /> <br /> <br />
    <div>Sum  from 1 to {sum} is  {totalSum}</div>
    <button onClick={function(){
      setCount(count+1)
    }}> counter {count}</button>
    </>
  )
}

export default App
