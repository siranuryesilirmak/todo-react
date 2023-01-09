import React from 'react'
import Footer from './Footer';
import FooterInfo from './FooterInfo';
import Header from './Header';
import Main from './Main';
import "./style.css"

import { useState, useEffect } from 'react';

function ToDos() {
  const [todos, setTodos] = useState([
    {todoName:"Learn JavaScript",completed:false},
    {todoName:"Learn React", completed:false},
    {todoName:"Have a life ", completed:false},
  ])
  
  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div className='todoapp'>
      <Header addTodo={setTodos}></Header>
      <Main todos={todos} setTodos={setTodos}></Main>
      <Footer todos={todos} ></Footer>
      <FooterInfo></FooterInfo>
    </div>
  )
}

export default ToDos