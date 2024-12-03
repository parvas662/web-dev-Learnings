import { useEffect, useState } from 'react' 

function App() {
  const [id,setid] = useState();
  return <>
  <button onClick={ function(id){
    setid(1)
  }}>1</button> 
  <button onClick={ function(id){
    setid(2)
  }}>2</button> 
  <button onClick={ function(id){
    setid(3)
  }}>3</button> 
  <button onClick={ function(id){
    setid(4)
  }}>4</button> 

  < Todo id = {id}></Todo> 
  </>
}

function Todo({id}){
  const [tod,setTodo] = useState({})
  useEffect(function(){
    fetch(`https://dummyjson.com/todos/${id}`)
    .then(async (res)=>{
      const json = await res.json()
      console.log(json)
      console.log(json.id)
      console.log(tod)
      setTodo(json)
    })
  },[id])

  return <div>
    <h1>{tod.id}</h1>
    <h2>{tod.todo}</h2> 
  </div>
}

export default App
