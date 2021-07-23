import  './components/style.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import { AddTodo } from './components/AddTodo.js';
import { Todos } from './components/Todos.js';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

  const onDelete = (todo) => {
    console.log("i am ondelete of todo., todo");
    // Deleting this way in react dose not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);     
  }
   
   const [todos, setTodos] = useState(initTodo);
   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos])

  return (
       <div>
        <Header name={true} searchbar={true}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos}  onDelete={onDelete}/> 
        <Footer />   
      </div>
  )
}

export default App;
