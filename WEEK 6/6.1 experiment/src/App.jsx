 
import { useState } from 'react'
import React,{ Fragment} from 'react'  
let counter = 0
function App() { 
  const [todos,setTodo]  = useState([
    {  id : 1,
      title : "go to gym",
      description :"at 6am"
    },{
      id : 2,
      title : "go to gym",
      description :"at 6am" 
      },{
        id : 3,
        title : "go to gym",
        description :"at 6am"
        }
  ]);

  return ( 
    <>
      <button onClick={function(){
        setTodo([...todos,{
            id : counter++,
            title : "go to sleep bitch",
            description :"at 3am"
        }]) 
      }}>Add Todo</button>
    {todos.map(function(todo){
      return <Todo title = {todo.title} description = {todo.description}> </Todo>
    })}
     
     <br />
     
    </>   
  )
} 

function Todo({title,description}){
  return <div>
    <h2> {title}</h2>
    <h4>{description}</h4>
  </div>
}

export default App
