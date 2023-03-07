import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    let onSubmit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be Blank");
        }
        props.addTodo(title, desc);
    }
  return (
    <div className="container my-2">
        <div className="mb-3">
            <h3 className='text-center'>Add a Todo</h3>
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter the Title"/>
            </div>
            <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" rows="3" placeholder="Enter the Description"></textarea>
            <button href="/" className="btn btn-sm my-3 btn-success" onClick={onSubmit}>Submit</button>
        </div>
    </div>
  )
}
