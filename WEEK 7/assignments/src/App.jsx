import './App.css'
import {  Routes,Route,BrowserRouter} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import { Assignment3 } from './components/Assignment3'
import { Assignment4 } from './components/Assignment4'
import { Assignment5 } from './components/Assignment5'
function App() {   
  return (
    <>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <NavBar/> }/>
        <Route path='/Assignment1' element = {
          <Assignment1 /> }/>

        <Route path='/Assignment2' element = {
          <Assignment2 /> }/>
        <Route path='/Assignment3' element = {
          <Assignment3 /> }/>
        <Route path='/Assignment4' element = {
          <Assignment4 /> }/>
        <Route path='/Assignment5' element = {
          <Assignment5 /> }/>
        
          
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
