import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { lazy , Suspense} from "react";
const  Dashboard = lazy(()=> import('./components/Dashboard')) 
const Landing = lazy(()=> import('./components/Landing') )  
const TopBar = lazy(()=> import('./components/TopBar'))   
// adding lazyloading => using this all the bundle will not come from server, it will come in small chunks.
// like say 100pages of website and if you are in page 1 then bundle will be of 10pages and bundle will come from server as you move to next pages. 

function App() {
  
  return (
    <div>
      <BrowserRouter> 
          <AppBar/>
          <Routes>"
            <Route path='/dashboard' element = {
              <Suspense fallback={<div>Loading...</div>}> 
                <Dashboard />
               </Suspense> }/>
            <Route path="/" element = {
              <Suspense fallback={<div>Loading...</div>}> 
                <Landing />
                </Suspense> }/> 
          </Routes>
      </BrowserRouter>
    </div>
  )
}
function AppBar(){
  const navigate = useNavigate();
  return <div>
      <TopBar/>
      <button onClick={()=>{
        navigate("/")  }}>  Landing PAge</button>
      <button onClick={()=>{
        navigate("/Dashboard") }} > Dashboard PAge</button>
  </div>
}
export default App
