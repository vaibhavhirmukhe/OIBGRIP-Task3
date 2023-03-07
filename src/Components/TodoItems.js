import React from 'react'

export default function TodoItems({todo, deleteTodo}) {
  return (
    <div className="col-md-3">
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button href="/" className="btn btn-sm btn-danger" onClick={()=>deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  </div>
  )
}
