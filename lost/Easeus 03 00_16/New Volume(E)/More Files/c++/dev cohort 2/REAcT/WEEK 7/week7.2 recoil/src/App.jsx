import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import { CountContext } from './contextApi/context' 
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom , evenSelector } from './store/atoms/count'
import { useMemo } from 'react'

function App() {
   // const [count, setCount] = useState(0) now we dont need state here  

  return (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  )
}
 
function Count(){ 
  return <div> 
    <CountreRender  />
    <Button  />
    <Even></Even>
  </div>
}
function CountreRender(){
  const  count  = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}
function Even(){ 
  const  even  = useRecoilValue(evenSelector);
      {if(even) {
        return <div> 
        it is even
      </div>
      } }

}
function Button(){
  const setCount = useSetRecoilState(countAtom);
  // this will also not rerender.
  return <div> 
    <button onClick={()=>{setCount(count => count+1)}} >
    increase  </button>
    <button onClick={()=>{setCount(count => count-1)}} >
    Decrease  </button>
  </div>
}
export default App
