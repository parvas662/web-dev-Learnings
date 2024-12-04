import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BlueCard } from './components/BlueCard'
import { RevenueCard } from './components/RevenueCard'

function App() { 

  return (
    <>
    <div className = "grid  lg:grid-cols-3 md:grid-cols-2" >
      <div className="bg-red-500 text-white-50 ">div1.</div>
      <div className = "bg-yellow-500 text-white-50 ">div2.</div>
      <div className= "bg-blue-500 text-white-50" >div3.</div>
    </div>
    <br />
    <div className = "grid  lg:grid-cols-3 md:grid-cols-2 gap-5 mx-6" >
    <BlueCard title="Next Payout" amount="212323.74" orderCount="12" />
    <RevenueCard title="Amount Pending" amount="98,323.74" orderCount="26" />  
    <RevenueCard title="Amount Pending" amount="98,323.74"  /> 

    </div> 
    </>
)
}

export default App
