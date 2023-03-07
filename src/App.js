import { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {

  const addTodo = (title, desc)=>{
    console.log(title, desc);
    let id;
    if(todos.length===0){
      id=1;
    }
    else{
      id = todos[todos.length - 1].id + 1;
    }
    let myTodo = {
      id : id,
      title : title,
      description : desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }
  
  const deleteTodo = (todo)=>{
    // console.log("Clicked on todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([])

  return (
    <>
        <Header title="Todo List"/>
        <AddTodo addTodo={addTodo}/>
        <Home todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
