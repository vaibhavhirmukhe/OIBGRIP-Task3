import React from 'react'
import TodoItems from './TodoItems'

export default function Home({todos, deleteTodo}) {
  const myStyle = {
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#7a7777"
    
  }
  return (
    <div className="container">
    <div className='row my-3'>
        <h3 className='text-center my-2'>My Todos List</h3>
        {todos.length===0?  <h4 style={myStyle}>Add your todo</h4>: todos.map((todo) => {
            return <TodoItems todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
        })}
    </div>
    </div>
  )
}
